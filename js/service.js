/* This is a new Angular module - a service. Services in Angular are generally used 
to make calls to APIs. The reason for this is that putting all the logic for calling 
APIs into your controllers can get messy, so it’s best to put that code elsewhere!*/

/*The url argument will be a string that will contain the URL that we’ll be calling 
for our API. The data argument will be the user object that contains the username and 
	password that we’ll be registering with.*/

angular.module('UserService', [])
	.factory('UserAPIService', function($http) {

		UserAPIService = {
			callAPI: function(url, data) {
				return $http.post(url, data);
			}
		}; 
		return UserAPIService;
	});