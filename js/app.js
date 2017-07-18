angular.module('MoneyTree', ['ngRoute', 'RouteControllers', 'UserService', 'ngAnimate', 'ui.bootstrap', 'ngMessages', 'angular-storage', 'forms']);

angular.module('MoneyTree').config(function($locationProvider, $routeProvider) {
    $locationProvider.html5Mode(true); //Enables href routing without hashed

	$routeProvider.when('/', {
		templateUrl: 'templates/home.html',
		controller: 'HomeController'
	})
	.when('/credit-score', {
		templateUrl: 'templates/credit-score.html',
		controller: 'CreditScoreController'
	})
	.when('/isas', {
		templateUrl: 'templates/isas.html',
		controller: 'ISAsController'
	})
	.when('/money-saving-tips', {
		templateUrl: 'templates/money-saving-tips.html',
		controller: 'MoneySavingTipsController'
	})	
	.when('/accounts/register', {
		templateUrl: 'templates/register.html',
		controller: 'RegisterController'
	})
	.when('/accounts/login', {
		templateUrl: 'templates/login.html',
		controller: 'LoginController'
	})
	.when('/accounts/logout', {
		templateUrl: 'templates/logout.html',
		controller: 'LogoutController'
	});
});

