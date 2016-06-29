// controller.js

(function() {
    var app = angular.module('myApp', ['onsen']);
  
    //Sliding menu controller, swiping management
    app.controller('SlidingMenuController', function($scope){
      
        $scope.checkSlidingMenuStatus = function(){
          
            $scope.slidingMenu.on('postclose', function(){
                $scope.slidingMenu.setSwipeable(false);
            });
            $scope.slidingMenu.on('postopen', function(){
                $scope.slidingMenu.setSwipeable(true);
            });
        };
    
        $scope.checkSlidingMenuStatus();
    });

    //Map controller
    app.controller('MapController', function($scope, $timeout){
      
        $scope.map;
        $scope.markers = [];
        $scope.markerId = 1;
          
        //Map initialization  
        $timeout(function(){
            $scope.map = new google.maps.Map(document.getElementById("map"), myOptions); 
            $scope.overlay = new google.maps.OverlayView();
            $scope.overlay.draw = function() {}; // empty function required
            $scope.overlay.setMap($scope.map);
            $scope.element = document.getElementById('map');
            $scope.hammertime = Hammer($scope.element).on("hold", function(event) {
                $scope.addOnClick(event);
            });
            
        },100);
    });
})();