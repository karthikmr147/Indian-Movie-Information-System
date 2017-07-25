angular.module('app.controllers',['ngSanitize'])

  
.controller('iMISCtrl',function RatingController() {
    console.log('displaying directive');
    this.rating1 = 5;
    })
   
.controller('menuCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   

   

  .controller('LoginCtrl', function ($scope, LoginService, $state) {
    $scope.data = {};
    $scope.loginError = false;
    $scope.login = function () {
      /* console.log($scope.data.username);
       console.log($scope.data.password);*/
      LoginService.loginUser($scope.data.username, $scope.data.password).then(function (data) {
        console.log(data);
        if(data =="Success"){
          $scope.loginError = false;
          $state.go('Index');
        } else {
          $scope.loginError = true;
        }
      })
    };
  })

  .controller('signupCtrl',  // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams, LoginService) {

      $scope.signUp = function () {
        console.log($scope.data.username);
        LoginService.signUp($scope.data.username, $scope.data.password, $scope.data.email, $scope.data.phone).then(function (response) {
          console.log(response);
        })
      };

    })

.controller('movie',['$scope','$state','$stateParams','MovieFactory','ReviewService','$sce', function($scope,$state,$stateParams,MovieFactory,ReviewService,$sce){
        $scope.reviewstatus = false ;
        MovieFactory.getMovieById($stateParams.movie).then(function(data){
            $scope.Singlemovie = data;
            $scope.videoLink = $sce.trustAsHtml($scope.Singlemovie.TrailerEmbedCode)

            console.log($scope.Singlemovie.Id);
           
        }); 
        MovieFactory.getActorsbyMoive($stateParams.movie).then(function(data){
            $scope.Actors = data;
            console.log($scope.Actors);
        });   

        ReviewService.getReviews($stateParams.movie).then(function (data) {
      console.log(data);
      $scope.reviews =  data;
      $scope.reviewstatus=true;
      console.log("review in controller "+$scope.reviews);
          });   


          $scope.submitReview = function (movieId) {
  ///    alert("herer");
      console.log(movieId);
      console.log($scope.review.phone);
      ReviewService.submitReview($scope.review.name, $scope.review.email, $scope.review.phone, $scope.review.message, movieId).then(function (response) {
        console.log(response);
      })}  
   
}])

.controller('moviesTop',['$scope','MovieFactory',function ($scope,MovieFactory) {
    $scope.test = "yashas";
    //  var vm= this;
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
            $scope.moviesReleasedThisWeek = data;
         
        console.log($scope.moviesReleasedThisWeek);
    })}])
.controller('movieSearch',['$scope','$state','MovieFactory',function($scope,$state,MovieFactory){

     // create empty object for search params
    // var moviename=this;
        $scope.data={};
        
    $scope.doSearch = function(){
        //console.log($scope.data.search);
        MovieFactory.SearchMovie($scope.data.search).then(function(data){
            $scope.movie = data[0];
            console.log($scope.movie);
            $state.go('Single',{movie : $scope.movie.Id});
            

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

.controller('DeveloperAPI',['$scope','DeveloperAPI',function($scope,DeveloperAPI){
  $scope.movie={};
     var myApp;
        myApp = myApp || (function () {
        var pleaseWaitDiv = $('<div class="modal-header"><h1>Processing...</h1></div><div class="modal-body"><div class="progress progress-striped active"><div class="bar" style="width: 100%;"></div></div></div>');
         return {
         showPleaseWait: function() {
            pleaseWaitDiv.modal();
        },
        hidePleaseWait: function () {
            pleaseWaitDiv.modal('hide');
        },

    };
})();
   $scope.successMsg = false;
  $scope.searchmovieapi = function(){
    console.log($scope.movie.name);
    myApp.showPleaseWait();
    DeveloperAPI.SearchAPI($scope.movie.name).then(function(data){
      $scope.moviejson = data;
      myApp.hidePleaseWait();
       $scope.successMsg = true;

  })}}])

.controller('CrowdSourceController', function ($scope, $window, CrowdSourceService) {
   // console.log("ssd");
          $scope.successMsg = false;
       
          $scope.crowdSource = function () {
            

            console.log($scope.cs.director);
            CrowdSourceService.addData($scope.cs.title, $scope.cs.director, $scope.cs.actors, $scope.cs.description).then(function (data) {
              console.log(data);
             if(data == "OK"){
               
               $scope.successMsg = true;

               $("#crowdform").load(location.href + " #croedform");
              // $window.location.reload();
           
        }
        })
      };

    })

  


