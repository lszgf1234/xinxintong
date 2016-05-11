<?php
namespace site\fe\user;

require_once dirname(dirname(__FILE__)) . '/base.php';
/**
 * 站点用户退出
 */
class logout extends \site\fe\base {

	public function get_access_rule() {
		$rule_action['rule_type'] = 'white';
		$rule_action['actions'] = array();
		$rule_action['actions'][] = 'do';

		return $rule_action;
	}
	/**
	 * 执行帐号注册
	 */
	public function do_action($redirect = 'N') {
		/*更新cookie状态*/
		$modelWay = $this->model('site\fe\way');
		$cookieUser = $modelWay->getCookieUser($this->siteId);
		$cookieUser->loginExpire = 0;
		unset($cookieUser->members);
		unset($cookieUser->sns);

		/*缓存用户信息*/
		$modelWay->setCookieUser($this->siteId, $cookieUser);
		if ($redirect === 'Y') {
			$referer = $_SERVER['HTTP_REFERER'];
			$this->redirect($referer);
		} else {
			return new \ResponseData($cookieUser);
		}
	}
}