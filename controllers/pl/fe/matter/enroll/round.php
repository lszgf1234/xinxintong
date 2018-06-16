<?php
namespace pl\fe\matter\enroll;

require_once dirname(dirname(__FILE__)) . '/base.php';
/*
 * 登记活动主控制器
 */
class round extends \pl\fe\matter\base {
	/**
	 * 返回指定登记活动下的轮次
	 *
	 * @param string $app app's id
	 *
	 */
	public function list_action($app, $checked = null, $page = 1, $size = 10) {
		if (false === ($oUser = $this->accountUser())) {
			return new \ResponseTimeout();
		}

		$oApp = $this->model('matter\enroll')->byId($app, ['cascaded' => 'N']);
		if (false === $oApp || $oApp->state !== '1') {
			return new \ObjectNotFoundError();
		}

		$modelRnd = $this->model('matter\enroll\round');

		$oPage = new \stdClass;
		$oPage->num = $page;
		$oPage->size = $size;

		$oResult = $modelRnd->byApp($oApp, ['page' => $oPage, 'fields' => 'id,state,rid,title,start_at,end_at,mission_rid']);
		if (!empty($checked)) {
			if ($checked = $modelRnd->byId($checked)) {
				$oResult->checked = $checked;
			}
		}

		return new \ResponseData($oResult);
	}
	/**
	 * 获取设置定时轮次的时间
	 *
	 * @param string $app
	 *
	 */
	public function getCron_action() {
		if (false === ($oUser = $this->accountUser())) {
			return new \ResponseTimeout();
		}

		$modelRnd = $this->model('matter\enroll\round');

		$oPosted = $this->getPostJson();

		if (empty($oPosted->roundCron)) {
			return new \ResponseError('请先设置定时规则！');
		}

		$rules[] = $oPosted->roundCron;
		$rst = $modelRnd->byCron($rules);

		return new \ResponseData($rst);
	}
	/**
	 * 添加轮次
	 *
	 * @param string $app
	 *
	 */
	public function add_action($app) {
		if (false === ($oUser = $this->accountUser())) {
			return new \ResponseTimeout();
		}

		$oApp = $this->model('matter\enroll')->byId($app, ['cascaded' => 'N']);
		if (false === $oApp) {
			return new \ObjectNotFoundError();
		}

		$modelRnd = $this->model('matter\enroll\round');
		$oPosted = $this->getPostJson();

		if (isset($oPosted->start_at) && isset($oPosted->end_at) && $oPosted->start_at > $oPosted->end_at) {
			return new \ResponseError('添加失败，本轮次的开始时间不能晚于结束时间！');
		}

		$rst = $modelRnd->create($oApp, $oPosted, $oUser);
		if ($rst[0] === false) {
			return new \ResponseError($rst[1]);
		}

		return new \ResponseData($rst[1]);
	}
	/**
	 * 更新轮次
	 *
	 * @param string $app
	 * @param string $rid
	 */
	public function update_action($app, $rid) {
		if (false === ($oUser = $this->accountUser())) {
			return new \ResponseTimeout();
		}

		$oApp = $this->model('matter\enroll')->byId($app, ['cascaded' => 'N']);
		if (false === $oApp) {
			return new \ObjectNotFoundError();
		}

		$modelRnd = $this->model('matter\enroll\round');
		$oRound = $modelRnd->byId($rid);
		if (false === $oRound) {
			return new \ObjectNotFoundError();
		}

		$oPosted = $this->getPostJson();
		$oUpdate = new \stdClass;

		if (!empty($oPosted->start_at) && !empty($oPosted->end_at) && $oPosted->start_at > $oPosted->end_at) {
			return new \ResponseError('更新失败，本轮次的开始时间不能晚于结束时间！');
		}
		/* 指定了开始时间的轮次，自动指定为启用状态 */
		if ((int) $oRound->start_at > 0 && (int) $oPosted->start_at === 0) {
			$oUpdate->state = 0;
		} else if ((int) $oRound->start_at === 0 && (int) $oPosted->start_at > 0) {
			$oUpdate->state = 1;
		}

		/* 更改轮次的状态 */
		if (isset($oPosted->state) && (int) $oPosted->state !== (int) $oRound->state && (int) $oPosted->state === 1 && (int) $oPosted->start_at === 0) {
			if ($lastRound = $modelRnd->getAssignedActive($oApp)) {
				return new \ResponseError('请先停止轮次【' . $lastRound->title . '】');
			}
		}

		foreach ($oPosted as $prop => $value) {
			switch ($prop) {
			case 'title':
				$oUpdate->title = $modelRnd->escape($value);
				break;
			case 'start_at':
			case 'end_at':
				$oUpdate->{$prop} = (int) $value;
				break;
			}
		}

		$rst = $modelRnd->update(
			'xxt_enroll_round',
			$oUpdate,
			['aid' => $app, 'rid' => $rid]
		);

		$oRound = $modelRnd->byId($rid);

		return new \ResponseData($oRound);
	}
	/**
	 * 删除轮次
	 *
	 * @param string $app
	 * @param string $rid
	 */
	public function remove_action($app, $rid) {
		if (false === ($oUser = $this->accountUser())) {
			return new \ResponseTimeout();
		}

		$oApp = $this->model('matter\enroll')->byId($app, ['cascaded' => 'N']);
		if (false === $oApp) {
			return new \ObjectNotFoundError();
		}

		$modelRnd = $this->model('matter\enroll\round');
		$oRound = $modelRnd->byId($rid);
		if (false === $oRound) {
			return new \ObjectNotFoundError();
		}

		$modelRec = $this->model('matter\enroll\record');
		$countOfRecords = $modelRec->byRound($rid, ['fields' => 'count(*)']);
		if ($countOfRecords > 0) {
			return new \ResponseError('【' . $oRound->title . '】已有登记数据不能删除');
		}
		/**
		 * 删除轮次
		 */
		$rst = $modelRnd->delete(
			'xxt_enroll_round',
			['aid' => $oApp->id, 'rid' => $rid]
		);

		if (0 === (int) $modelRnd->query_val_ss(['count(*)', 'xxt_enroll_round', ['aid' => $oApp->id]])) {
			/**
			 * 如果不存在轮次了修改登记活动的状态标记
			 */
			$modelRnd->update(
				'xxt_enroll',
				['multi_rounds' => 'N'],
				['id' => $oApp->id]
			);
		}

		return new \ResponseData($rst);
	}
}