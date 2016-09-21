(function() {
	//ctrlExtract  具体轮次运行：控制器定义方法和变量   抽奖的逻辑
	ngApp.provider.controller('ctrlExtract', ['$scope', '$http', '$timeout','ls','$interval', function($scope, $http, $timeout, LS, $interval) {
		var mySwiper,
			timer,
			winnerIndex = -1;//获奖者下标
		$scope.speed = 50;
		$scope.times = 0;
		$scope.stopping = false;
		$scope.winners = [];
		$scope.currentRound = null;//现在的分组是空
		//移出选手
		var removePlayer = function() {
			$scope.players.splice(winnerIndex - 1, 1);
			mySwiper.removeSlide(winnerIndex - 1);
			mySwiper.updateSlidesSize();
			winnerIndex = -1;
		};
		//   ？
		var activePlayer = function() {
			var ai, player;
			ai = mySwiper.activeIndex;
			ai > $scope.players.length && (ai = 1);
			player = $scope.players[ai - 1];
			return player;
		};
		//设置中将选手
		var setWinner = function() {
			var winner;
			winnerIndex = mySwiper.activeIndex;
			winnerIndex > $scope.players.length && (winnerIndex = 1);
			winner = $scope.players[winnerIndex - 1];
			if (winner) {
				$scope.winners.push(winner);
				$http.post(LS.j('/done', 'site', 'app', 'rid') + '&ek=' + winner.enroll_key, {
					uid: winner.userid,
					nickname: winner.nickname
				});
			}
			$scope.stopping = false;
			$scope.running = false;
			$scope.times++;
			if ($scope.winners.length == $scope.currentRound.times) {
				removePlayer();
				$scope.$broadcast('xxt.app.group.round-finish');
				return;
			}
			if ($scope.currentRound.autoplay === 'Y' && $scope.times < $scope.currentRound.times) {
				$scope.start();
			}
		};
		//初始化  Swiper插件
		$scope.init = function() {
			mySwiper = new Swiper('.swiper-container', {
				slidesPerView: 1,
				mode: 'horizontal',
				loop: true,
				speed: $scope.speed
			});
		};
		//开始抽奖
		$scope.start = function() {
			if (winnerIndex !== -1) {
				removePlayer();
			}
			if ($scope.winners.length == $scope.currentRound.times) {
				$scope.$broadcast('xxt.app.group.round-finished');
				return;
			}
			if ($scope.players.length === 0) {
				$scope.$broadcast('xxt.app.group.players-empty');
				return;
			}
			$scope.running = true;
			timer = $interval(function() {
				mySwiper.slideNext();
			}, $scope.speed);
			if ($scope.currentRound.autoplay === 'Y')
				$timeout(function() {
					$scope.stop()
				}, 1000);
		};
		//停止抽奖
		$scope.stop = function() {
			var timer2, step, steps;
			$scope.stopping = true;
			$interval.cancel(timer);
			step = 0;
			steps = Math.round(Math.random() * 10); //随机移动的步数
			timer2 = $interval(function calcWinner() {
				var currentRound, target;
				mySwiper.slideNext();
				if (step === steps) {
					$interval.cancel(timer2);
					currentRound = $scope.currentRound;
					if (currentRound.targets && currentRound.targets.length > 0) {
						target = currentRound.targets[$scope.times % currentRound.targets.length];
						if (Object.keys(target).length > 0) {
							/**
							 * 检查规则
							 */
							var candidate, checked, timer3;
							candidate = activePlayer();
							if (!$scope.matched(candidate, target)) {
								/**
								 * 不匹配，继续找。有可能所有的候选人都不匹配。
								 */
								checked = []; //已经检查过的候选人
								timer3 = $interval(function() {
									candidate = activePlayer();
									if ($scope.matched(candidate, target)) {
										/**
										 * 匹配了，或者所有的候选人都已经检查过。
										 */
										$interval.cancel(timer3);
										setWinner();
									} else if (checked.length === $scope.players.length) {
										$interval.cancel(timer3);
										setWinner();
										//alert('没有匹配的用户');
									} else {
										mySwiper.slideNext();
										if (checked.indexOf(mySwiper.activeIndex) === -1) {
											checked.push(mySwiper.activeIndex);
										}
									}
								}, $scope.speed);
							} else {
								setWinner();
							}
						} else {
							setWinner();
						}
					} else {
						setWinner();
					}
				}
				step++;
			}, $scope.speed);
		};
	}]);
	//控制轮次切换
	ngApp.provider.controller('ctrlRounds', ['$scope', '$http', '$timeout','ls', function($scope, $http, $timeout,LS) {
		$scope.round = '';
		//轮次切换方法
		$scope.shiftRound = function() {
			var url, t;
			t = (new Date()).getTime();
			url = '/rest/site/op/matter/group?site=' + LS.p.site + '&app=' + LS.p.app + '&_=' + t;
			if ($scope.round && $scope.round.length > 0) url += '&rid=' + $scope.round;
			location.href = url;
		};
		/*完成一个轮次的抽奖*/
		//？ 具体用途用法待研究
		$scope.$on('xxt.app.group.round-finish', function() {});
		//LS.j('roundsGet', 'site', 'app')   j()方法拼接了一个url路径  ；j（）方法值得借鉴
		$http.get(LS.j('roundsGet', 'site', 'app')).success(function(rsp) {
			var i, round, rounds;
			rounds = rsp.data; //轮次信息
			$scope.rounds = rounds;
			for (i in rounds) {
				round = rounds[i];
				if (LS.p.rid === round.round_id) {//LS.p  具体信息 例如：{site: "5ad7f368402bc5a1ba7883b1af754b9a", app: "57e1da89490f8", rid: "57e224bea5594"}
					$scope.round = rounds[i].round_id;
					//现在的轮次   给  currentRound 赋值
					$scope.$parent.currentRound = round;
					$timeout(function() {
						$scope.$parent.getUsers().then(function() {
							$scope.$parent.init();
							$scope.$parent.start();
						});
					});
					break;
				}
			}
		});
	}]);
})();