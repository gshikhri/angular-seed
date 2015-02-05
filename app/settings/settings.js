(function(){
    var dashboardApp = angular.module("mdashboard");
    
    var settingsController=function($scope, $cookieStore, PassCookieData,$location, JsonService){
      $scope.name="Rishi";  
      $scope.metrics = [];
      
      JsonService.query(function(data) {
          for(var i = 0 ; i<data.length;i++){
 			$scope.metrics.push(data[i].name);
          }
		});
		
      $scope.checkedmetrics = {
        metrics: []
      };
      $scope.storeMetrics = function() {
        PassCookieData.set({
          metrics: $scope.checkedmetrics.metrics,
        });
        $location.path("/dashboard");
      };
    };
    var PassCookieData=function(){
       var cookieData = {}
       function set(data) {
         cookieData = data;
       }
       function get() {
        return cookieData;
       }
      
       return {
        set: set,
        get: get
       }
    };
    
    dashboardApp.controller("SettingsController",settingsController);
    dashboardApp.factory("PassCookieData",PassCookieData);
}());
