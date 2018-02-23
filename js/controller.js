angular.module('RouteControllers', [])

    .controller('HomeController', function($scope) {
    })

    .controller('CreditScoreController', function($scope){
    })

    .controller('AccountsController', function($scope){
    })
        

    .controller('NavBarController', function($scope, $location) {
        $scope.isActive = function (viewLocation) { 
        return viewLocation === $location.path();
        };
    })
    
    .controller('MoneySavingTipsController', function ($scope, $http) {
        $scope.oneAtATime = true;

        $scope.status = {
            isFirstOpen: true,
            };

        $scope.formData = {};

        $scope.processForm = function() {
            alert('Thank you for your feedback ' + $scope.formData.name + '\nWe will be in contact and respond to ' + $scope.formData.email );
            $scope.formData = {};
            $scope.contactForm.$setPristine(true); 
            $scope.contactForm = ''; 
        };
    })


    .controller('ISAsController', function($scope){

            $scope.amount = 500;
            $scope.rate = "1.02";
            $scope.time = 1;
            var amountinvested = 0;
            var newAmount = 0;
            var interestgain = 0;
            var monthlyPayments = 0;
            var months = 0;
            var interest = 0;

            $scope.yearstomonths = function(){
                months = $scope.time * 12;
                return months;
                };

            $scope.paymentstoMonths = function(){
                monthlyPayments =  parseFloat($scope.amount) / 12;
                return monthlyPayments;
                };

            $scope.investment = function(){
                newAmount = parseFloat($scope.amount) * parseFloat($scope.rate);
                    for (var i=1; i<$scope.time; i++){
                        newAmount = parseFloat($scope.amount) + parseFloat(newAmount);
                        newAmount *= parseFloat($scope.rate);
                    }
                    return newAmount;
                };

            $scope.contribution = function(){
                amountinvested = parseFloat($scope.amount) * $scope.time;
                    return amountinvested;
                };

            $scope.interestgain = function(){
                interest = newAmount - amountinvested;
                    return interest;
                };
        })


    //---Register ---// 
    .controller('RegisterController', function($scope, $location, UserAPIService, store) {

        $scope.registrationUser = {};
        var url = "https://morning-castle-91468.herokuapp.com/";

        
        $scope.submitForm = function() {
            if ($scope.registrationForm.$valid) {
                $scope.registrationUser.username = $scope.user.username;
                $scope.registrationUser.password = $scope.user.password;

                UserAPIService.callAPI(url + "/accounts/register/", $scope.registrationUser).then(function(results) {
                    $scope.data = results.data;
                    if ($scope.data.username == $scope.registrationUser.username && $scope.data.password == $scope.registrationUser.password) {                      
                        $scope.login();
                        alert("You have successfully registered to MoneyTree, welcome!");
                    }
                }).catch(function(err) {
                    console.log(err);
                    alert("Registration failed, please try again with another username.");
                });
            }
        };

        $scope.login = function() {
            UserAPIService.callAPI(url + "/accounts/api-token-auth/", $scope.data).then(function(results){
                $scope.token = results.data.token;
                store.set('username', $scope.registrationUser.username);
                store.set('authToken', $scope.token);
                $location.path("/");
            }).catch(function(err) {
                console.log(err.data);
                
            });
        };		
    })
     //---/Register ---// 

     //--- login ---//     
     .controller('LoginController', function($scope, $location, UserAPIService, store) {
        $scope.loginUser = {};
        var url = "https://morning-castle-91468.herokuapp.com/";

        $scope.submitForm = function() {
            if ($scope.loginForm.$valid) {
                $scope.loginUser.username = $scope.user.username;
                $scope.loginUser.password = $scope.user.password;

                UserAPIService.callAPI(url + "/accounts/api-token-auth/", $scope.loginUser).then(function(results) {
                    $scope.token = results.data.token;
                    store.set('username', $scope.loginUser.username);
                    store.set('authToken', $scope.token);
                    $location.path("/");
                    alert("You are now logged into MoneyTree");
                    
                }).catch(function(err) {
                    console.log(err);
                    alert("Something went wrong, please try again.");
                });
            }
        };
    })
    //---/login ---//   

    //---logout---//
    .controller('LogoutController', function(store, $location) {
        store.remove('username');
        store.remove('authToken');
        $location.path("/accounts/logout");
    });
    //---/logout---//