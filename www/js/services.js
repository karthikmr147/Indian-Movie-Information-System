angular.module('app.services', [])

.factory('MovieFactory', function($http){
	var dataSource = 'https://api.cinemalytics.com/v1/analytics/TopMovies/?auth_token=608E09A3C3A314035B8FB22FDA5B16F7';
	//var dataSource = 'http://www.omdbapi.com/?t=dangal';
	return {
		getMovies: function(){

			return $http.get(dataSource).then(function(response){
				var data = response.data;
				return data});
		},
		getMovie: function(movieId) {
			return $http.get(dataSource,{ params: { id: movieId}});
		}
	}

})

.service('BlankService', [function(){

}]);