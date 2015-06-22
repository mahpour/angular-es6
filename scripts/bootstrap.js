import angular from 'angular';
import angularRoute from 'angular-route';
import {MainController} from './MainController'

export function bootstrap() {
    angular.module("app", ["ngRoute"])
    .controller("mainController",MainController)
    .config(['$routeProvider',function($routeProvider){
        $routeProvider.when('/view',{
            template:'<div ui-view>Hello!<button ng-click="doSomething()">ACTION</button></div>',
            controller:'mainController'
        })
        .otherwise({redirectTo: '/view'});
    }])
    .run(function(){
    
      console.log("hello");
})
}