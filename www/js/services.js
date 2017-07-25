angular.module('app.services',[])

.factory('MovieFactory', function($http){
	var token = '3A4593EE28AC2662C53BEEA6AFA59FAC';
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
				console.log(data);
				return data});
		},
		getActorsbyMoive: function(movie){
			return $http.get("http://api.cinemalytics.in/v2/movie/"+movie+"/actors/?auth_token="+token).then(function(response){
				console.log("http://api.cinemalytics.in/v2/movie/"+movie+"/actors/?auth_token="+token)
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


.service('LoginService', function ($q, $http) {
    return {
      loginUser: function (name, pw) {
        console.log("here " + name);
        console.log("here2 " + pw);

        //return  $http.get("http://indianmovieserver.us-west-2.elasticbeanstalk.com/user/login?userId=" + name + "&pw=" + pw)
        return $http.get("http://indianmovieserver.us-west-2.elasticbeanstalk.com/user/login?username=" + name + "&pw=" + pw)
          .then(function (response) {
            console.log(response);
            var data = response.data;
            return data;
          })
      },

      signUp: function (name, pw, email, phone) {
      /*  console.log("here " + name);
        console.log("here2 " + pw);
        console.log("here " + email);
        console.log("here2 " + phone);*/
        var data = {username: name, password: pw, email: email, phone: phone};


        //return  $http.post("http://indianmovieserver.us-west-2.elasticbeanstalk.com/user/signUp", data)
        return $http.post("http://indianmovieserver.us-west-2.elasticbeanstalk.com/user/signUp", data)
          .then(function (response) {
            console.log(response);
            var data = response.data;
            return data;
          })

      }
    }
  })


.service('ReviewService', function ($q, $http) {
    return {
      submitReview: function (username, email, phone, review, movieId) {
        console.log("here " + review);
        console.log("here2 " + movieId);
        var deferred = $q.defer();

        var data = {username: username, movieId: movieId, review: review};

        //return $http.post("http://indianmovieserver.us-west-2.elasticbeanstalk.com/user/postReview", data)
        return $http.post("http://indianmovieserver.us-west-2.elasticbeanstalk.com/user/postReview", data)
          .then(function (response) {
            var data = response.data[0].reviews;
            return data;
          })
      },


      getReviews: function (movieId) {
        console.log("in getreview" + movieId);

        return $http.get("http://indianmovieserver.us-west-2.elasticbeanstalk.com/user/getReviews?movieId=" + movieId)
          //       return $http.get("http://localhost:3000/user/getReviews?movieId=" + movieId)
          .then(function (response) {
            var data = response.data[0].reviews;
            return data;
          });
      }
    }
  })

.service('DeveloperAPI', function($q,$http){
  return{
    SearchAPI: function(param){
      console.log("Seach name" +param);
      return $http.get("http://indianmovieserver.us-west-2.elasticbeanstalk.com/Service/cinema?id="+param).then(function(response){
        var data = response.data;
        return data;
      })
    }
  }
})


.service('CrowdSourceService', function ($q, $http) {
  return {
    addData: function (title, director,actors, description) {
      console.log("here " + description);
      //console.log("here2 " + movieId);
      var deferred = $q.defer();

      var data = {title: title, director: director, actors: actors, description: description};

      //return $http.post("http://indianmovieserver.us-west-2.elasticbeanstalk.com/user/postReview", data)
     return $http.post("http://indianmovieserver.us-west-2.elasticbeanstalk.com/user/addCrowdSource", data)
        .then(function (response) {
          var data = response.data;
          return data;
          console.log(data);
        })
    }



  }
});

