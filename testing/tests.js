// suite

describe('Testing a MoneyTree controller', function(){
	var $controller;

	// Setup for all tests
	beforeEach(function(){
		// loads the app module
		module('MoneyTree');
		inject(function(_$controller_){
			// inject removes the underscores and finds the $scontroller Providers
			$controller = _$controller_;
		});
	});

	//test (spec)
	it('should say \'Hello MoneyTree\'', function(){
		var $scope ={};
		//$controller takes and object containing reference to the $scope
		var controller = $contoller('RouteController', {$scope:$scope});
		// the assertion checks the expected result
		expect($scope.title).toEqual('Hello MoneyTree');
	});

	
});