angular.module('app.services', [])

.factory('MovieFactory', function($http){
	var token = 'B53582EA39F710F19A06E50BAFDF88D1';
	var TopMovies = 'https://api.cinemalytics.com/v1/analytics/TopMovies/?auth_token='+token;
	var UpcomingMovies = 'http://api.cinemalytics.in/v2/movie/upcoming?auth_token='+token;
	var TopGrossedMovies = 'http://api.cinemalytics.in/v2/analytics/TopGrossedMovies/?auth_token='+token;
	var ReleasedThisWeek = 'http://api.cinemalytics.in/v2/movie/releasedthisweek?auth_token='+token;
	var TopfemaleActor = 'http://api.cinemalytics.in/v2/analytics/FemaleActorsByHighestRating/?auth_token='+token;
	var TopMaleActor = 'http://api.cinemalytics.in/v2/analytics/MaleActorsByHighestRating/?auth_token='+token;


	//var dataSource = 'http://www.omdbapi.com/?t=dangal';
	return {
		SearchMovie: function(param){
			//console.log("PARAMS: ",param);
			return $http.get("http://api.cinemalytics.in/v2/movie/title/?value="+param+"&auth_token="+token).then(function(response){
				var data = response.data;
			
				return data});
		},
		getActorsbyMoive: function(movie){
			return $http.get("http://api.cinemalytics.in/v2/movie/"+movie+"/actors/?auth_token="+token).then(function(response){
				var data = response.data;
				return data});
		},
		getTopFemaleActors: function(){
			return $http.get(TopfemaleActor).then(function(response){
				var data = response.data;
				return data});
		},
		getTopMaleActors: function(){
			return $http.get(TopMaleActor).then(function(response){
				var data = response.data;
				return data});
		},
		getTopMovies: function(){

			return $http.get(TopMovies).then(function(response){
				var data = response.data;
				return data});
		},
		getUpcomingMovies: function(){
			return $http.get(UpcomingMovies).then(function(response){
				var upcomingdata = response.data;
				return upcomingdata});
		},
		getTopGrossedMovies: function(){
			return $http.get(TopGrossedMovies).then(function(response){
				var TopGrossMovieData = response.data;
				return TopGrossMovieData});
		},
		getReleasedThisWeek: function(){
			return $http.get(ReleasedThisWeek).then(function(response){
				var ReleasedThisWeekData = response.data;
				return ReleasedThisWeekData;
			})
		},
		getMovieByYear: function(id){
			console.log("http://api.cinemalytics.in/v2/movie/year/"+id+"/?auth_token="+token);

			return $http.get("http://api.cinemalytics.in/v2/movie/year/"+id+"/?auth_token="+token).then(function(response){
				var data = response.data;
				//console.log(data);
				return data});
		},
		getMovieById: function(id){
			console.log("http://api.cinemalytics.in/v2/movie/id/"+id+"/?auth_token="+token);

			return $http.get("http://api.cinemalytics.in/v2/movie/id/"+id+"/?auth_token="+token).then(function(response){
				var data = response.data;
				//console.log(data);
				return data});
		}

	}

})

.service('LoginService', function($q) {
    return {
        loginUser: function(name, pw) {
            var deferred = $q.defer();
            var promise = deferred.promise;
 
            if (name == 'a' && pw == 'a') {
                deferred.resolve('Welcome ' + name + '!');
            } else {
                deferred.reject('Wrong credentials.');
            }
            promise.success = function(fn) {
                promise.then(fn);
                return promise;
            }
            promise.error = function(fn) {
                promise.then(null, fn);
                return promise;
            }
            return promise;
        }
    }
})

