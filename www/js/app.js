// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('app', ['ionic','ui.router', 'app.controllers','app.services'])


.run(function($ionicPlatform) {
 
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider,$urlRouterProvider){
  $stateProvider
  //parent route 
  .state('Index',{
    URL: '/Index',
    templateUrl: 'index.html'

  })
  .state('Index.Login',{
    url: '/Login',
    templateUrl:'/templates/Login.html'

  })
  .state('Home',{
    url: '/Home',
    templateUrl:'Home.html'
  })
  .state('Single',{
    url: '/Single',
    params: {movie: null},
    templateUrl:'templates/Single.html'
  })
  .state('Analytics',{
    url: '/Analytics',
    templateUrl: 'templates/analytics.html'
  })
  .state('About',{
    url: '/About',
    templateUrl: 'templates/About.html'

  })
  .state('MovieByYear',{
    url: '/MovieByYear',
    templateUrl: 'templates/MovieByYear.html'

  })

  .state('FAQ',{
    url: '/FAQ',
    templateUrl: 'templates/FAQ.html'

  })
  .state('ContactUs',{
    url: '/ContactUs',
    templateUrl: 'templates/Contact.html'
  });
  
 //$urlRouterProvider.otherwise('/Home');


})

/*
  This directive is used to disable the "drag to open" functionality of the Side-Menu
  when you are dragging a Slider component.
*/
.directive('disableSideMenuDrag', ['$ionicSideMenuDelegate', '$rootScope', function($ionicSideMenuDelegate, $rootScope) {
    return {
        restrict: "A",  
        controller: ['$scope', '$element', '$attrs', function ($scope, $element, $attrs) {

            function stopDrag(){
              $ionicSideMenuDelegate.canDragContent(false);
            }

            function allowDrag(){
              $ionicSideMenuDelegate.canDragContent(true);
            }

            $rootScope.$on('$ionicSlides.slideChangeEnd', allowDrag);
            $element.on('touchstart', stopDrag);
            $element.on('touchend', allowDrag);
            $element.on('mousedown', stopDrag);
            $element.on('mouseup', allowDrag);

        }]
    };
}])

/*
  This directive is used to open regular and dynamic href links inside of inappbrowser.
*/
.directive('hrefInappbrowser', function() {
  return {
    restrict: 'A',
    replace: false,
    transclude: false,
    link: function(scope, element, attrs) {
      var href = attrs['hrefInappbrowser'];

      attrs.$observe('hrefInappbrowser', function(val){
        href = val;
      });
      
      element.bind('click', function (event) {

        window.open(href, '_system', 'location=yes');

        event.preventDefault();
        event.stopPropagation();

      });
    }
  };
});