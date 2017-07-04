angular.module('app.controllers',[])

  
.controller('iMISCtrl',function RatingController() {
	console.log('displaying directive');
    this.rating1 = 5;
    })
   
.controller('menuCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('loginCtrl',function ($scope, $ionicModal, $timeout, ngFB) {
   $scope.fbLogin = function () {
    ngFB.login({scope: 'email,read_stream,publish_actions'}).then(
        function (response) {
            if (response.status === 'connected') {
                console.log('Facebook login succeeded');
                $scope.closeLogin();
            } else {
                alert('Facebook login failed');
            }
        });
};})
   
.controller('LoginCtrl', function($scope, LoginService, $state) {
    $scope.data = {};
 
    $scope.login = function() {
        LoginService.loginUser($scope.data.username, $scope.data.password).success(function(data) {
            $state.go('Home');
            $modal.hide();
        }).error(function(data) {
            console.log("Error");
            alert("Error Logn");
        });
    }
})

.controller('signupCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('movie',['$scope','$state','$stateParams','MovieFactory', function($scope,$state,$stateParams,MovieFactory){
    $scope.Singlemovie = $stateParams.movie;
    console.log($scope.Singlemovie);
     MovieFactory.getActorsbyMoive($scope.Singlemovie).then(function(data){
            $scope.Actors = data;
            console.log($scope.Actors);

        })
   
}])

.controller('moviesTop',['$scope','MovieFactory',function ($scope,MovieFactory) {
    $scope.test = "yashas";
	//	var vm= this;
		MovieFactory.getTopMovies().then(function(data){
			$scope.Topmovies = data;
		console.log($scope.Topmovies);

		})}])

.controller('moviesTopFemale',['$scope','MovieFactory',function ($scope,MovieFactory) {
    $scope.test1 = "yashas";
    //  var vm= this;
        MovieFactory.getTopFemaleActors().then(function(data){
            $scope.TopFemale = data;
        console.log($scope.TopFemale);

        })}])
.controller('moviesTopMale',['$scope','MovieFactory',function ($scope,MovieFactory) {
    $scope.test2 = "yashas";
    //  var vm= this;
        MovieFactory.getTopMaleActors().then(function(data){
            $scope.TopMale = data;
        console.log($scope.TopMale);

        })}])

.controller('moviesUpcoming',['$scope','MovieFactory',function ($scope,MovieFactory) {

      //  var vm= this;
        MovieFactory.getUpcomingMovies().then(function(data){
            $scope.Upcomingmovies = data;
         
        console.log($scope.Upcomingmovies);})

      
    }])
.controller('moviesTopGrossed',['$scope','MovieFactory',function ($scope,MovieFactory) {
        $scope.test = "yashas";
      //  var vm= this;
        MovieFactory.getTopGrossedMovies().then(function(data){
            $scope.TopGrossedMovies = data;
         
        console.log($scope.TopGrossedMovies);
    })}])
.controller('moviesReleasedThisWeek',['$scope','MovieFactory',function ($scope,MovieFactory) {

      //  var vm= this;
        MovieFactory.getReleasedThisWeek().then(function(data){
            $scope.TopGrossedMovies = data;
         
        console.log($scope.TopGrossedMovies);
    })}])
.controller('movieSearch',['$scope','$state','MovieFactory',function($scope,$state,MovieFactory){

     // create empty object for search params
    // var moviename=this;
        $scope.data={};
        
    $scope.doSearch = function(){
        //console.log($scope.data.search);
        MovieFactory.SearchMovie($scope.data.search).then(function(data){
            $scope.movie = data;
            console.log($scope.movie);
            $state.go('Single',{movie : $scope.movie})
            

    })}}])

.controller('movieByYears',['$scope','MovieFactory',function($scope,MovieFactory){
        
       // var year= $scope;
        $scope.searchyear = function(year){
            console.log(year);
        MovieFactory.getMovieByYear(year).then(function(data){

            $scope.getMovieByYear = data;
            console.log($scope.getMovieByYear[0]);
            console.log($scope.getMovieByYear);

    })}}])

  


 