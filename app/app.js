(function(){

  var dashboardApp = angular.module("mdashboard", ["ngRoute","ui.bootstrap","nvd3","ngResource","checklist-model","ngCookies"]); 
      
  dashboardApp.config(function($routeProvider){
    $routeProvider
      .when("/dashboard",{
        templateUrl: "dashboard/dashboard.html",
        controller: "DashBoardController"
      })
      .when("/settings",{
        templateUrl: "settings/settings.html",
        controller: "SettingsController"
      })
      .otherwise({redirectTo:"/dashboard"});
  });
  
}());