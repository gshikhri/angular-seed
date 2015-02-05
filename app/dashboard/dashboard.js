(function() {
	var dashboardApp = angular.module("mdashboard");

	dashboardApp.factory('JsonService', function($resource) {
		return $resource('data.json',
        {'query': {method: 'GET', isArray: true }});
	});

	var dashBoardController = function($scope, JsonService, PassCookieData) {

		$scope.checkedMetrics = PassCookieData.get().metrics;
		console.log($scope.checkedMetrics);
		
		JsonService.query(function(data) {
 			$scope.metricData = data;
		});
		
		$scope.nameFilter = function (list) {
            if ($scope.checkedMetrics && $scope.checkedMetrics.length > 0) {
                if ($.inArray(list.name, $scope.checkedMetrics) < 0)
                    return false;
            }
            return true;
        }

        $scope.name = "Rishi";
		var date = new Date();
		$scope.datestamp = date.getDay() + "/" + date.getMonth() + "/" + date.getFullYear();

        $scope.options = {
            pie: {
                chart: {
                    type: 'pieChart',
                    height: 450,
                    width: 450,
                    x: function(d) {
                        return d.key;
                    },
                    y: function(d) {
                        return d.y;
                    },
                    showLabels: true,
                    transitionDuration: 500,
                    labelThreshold: 0.01,
                    legend: {
                        margin: {
                            top: 5,
                            right: 35,
                            bottom: 5,
                            left: 0
                        }
                    }
                }
            },
            line: {
                chart: {
                    type: 'discreteBarChart',
                    height: 450,
                    width: 450,
                    margin: {
                        top: 20,
                        right: 20,
                        bottom: 60,
                        left: 55
                    },
                    x: function(d) {
                        return d.label;
                    },
                    y: function(d) {
                        return d.value;
                    },
                    showValues: true,
                    valueFormat: function(d) {
                        return d3.format(',.4f')(d);
                    },
                    transitionDuration: 500,
                    xAxis: {
                        axisLabel: 'X Axis'
                    },
                    yAxis: {
                        axisLabel: 'Y Axis',
                        axisLabelDistance: 30
                    }
                }
            },
            bar : {
                chart: {
                    type: 'historicalBarChart',
                    height: 450,
                    width: 500,
                    margin: {
                        top: 20,
                        right: 20,
                        bottom: 60,
                        left: 50
                    },
                    x: function(d) {
                        return d[0];
                    },
                    y: function(d) {
                        return d[1] / 100000;
                    },
                    showValues: true,
                    valueFormat: function(d) {
                        return d3.format(',.1f')(d);
                    },
                    transitionDuration: 500,
                    xAxis: {
                        axisLabel: 'X Axis',
                        tickFormat: function(d) {
                            return d3.time.format('%x')(new Date(d))
                        },
                        rotateLabels: 50,
                        showMaxMin: false
                    },
                    yAxis: {
                        axisLabel: 'Y Axis',
                        axisLabelDistance: 35,
                        tickFormat: function(d) {
                            return d3.format(',.1f')(d);
                        }
                    }
                }
            }
        };
        
        $scope.optionsperformance = {
            chart: {
              type: 'pieChart',
              height: 500,
              width: 500,
              x: function(d) {
                return d.key;
              },
              y: function(d) {
                return d.y;
              },
              showLabels: true,
              transitionDuration: 500,
              labelThreshold: 0.01,
              legend: {
                margin: {
                  top: 5,
                  right: 35,
                  bottom: 5,
                  left: 0
                }
              }
            }
          };
          
        $scope.dataperformance = [{
                key: "One",
                y: 5
              }, {
                key: "Two",
                y: 2
              }, {
                key: "Three",
                y: 9
              }, {
                key: "Four",
                y: 7
              }, {
                key: "Five",
                y: 4
              }, {
                key: "Six",
                y: 3
              }, {
                key: "Seven",
                y: .5
              }];

	};

	dashboardApp.controller("DashBoardController", dashBoardController);

}());