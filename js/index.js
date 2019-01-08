var config = {url: 'json/profile.json'};
var app = angular.module('Profile_App', ['ngMaterial', 'material.svgAssetsCache']);
app.controller('Profile_Controller', function($scope, $http, $mdSidenav) {
	$http.get(config.url).success(function (response) {
		$scope.data = response;
		$scope.showMobileMainHeader = true;
	    $scope.openSideNavPanel = function() {
	        $mdSidenav('left').open();
	    };
	    $scope.closeSideNavPanel = function() {
	        $mdSidenav('left').close();
	    };
	});
});
var toogleReadMore = function(node) {
	var description = node.parentNode.parentNode.querySelector('.Card_Description');
	var height = description.style.maxHeight;
	if (height == '1000px') {
		description.style.maxHeight = '70px';
		node.innerHTML = 'Read more';
	} else {
		description.style.maxHeight = '1000px';
		node.innerHTML = 'Read less';
	}
};