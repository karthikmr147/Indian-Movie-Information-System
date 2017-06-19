angular.module('app.controllers',['app.ngOpenFB'])

  
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
   
.controller('signupCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('moviesCtrl',
    ['MovieFactory',function (MovieFactory) {

		var vm= this;
		MovieFactory.getMovies().then(function(data){
			vm.movies = data;
		console.log('test moviectrl');

		}).catch(function(data){
				alert(data);
			})}
	
		])

.controller('staz',function RatingController() {
	console.log('displaying directive');
    this.rating1 = 5;
    this.rateFunction = function(rating) {
      console.log('Rating selected: ' + rating);
    };}
 )



  


 