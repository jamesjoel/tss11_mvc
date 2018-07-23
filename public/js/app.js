var app = angular.module("myApp", []);
app.controller("myCtrl", function($scope, $http){
	$scope.allData = [];
	$scope.newData = {};
	$scope.getData=function(){

		$http({
			method : "GET",
			url : "stuWebService"
		}).then(function(res){
			$scope.allData=res.data;
		});
	}
	$scope.add=function(){
		if($scope.newData._id)
		{
			$http({
				method : "PUT",
				url : "stuWebService",
				data : $scope.newData
			}).then(function(res){
				for(var i = 0; i < $scope.allData.length; i++)
				{
					if($scope.allData[i]._id == $scope.newData._id)
					{
						$scope.allData[i]=$scope.newData;
					}
				}
			});	
		}
		else
		{
			$http({
				method : "POST",
				url : "stuWebService",
				data : $scope.newData
			}).then(function(res){
				$scope.allData.push(res.data);
			});	
			
		}
	}

	$scope.delete=function(){
		$http({
			method : "DELETE",
			url : "stuWebService/?id="+$scope.selectedObj._id
			// data : $scope.selectedObj
		}).then(function(res){
			// $scope.allData.push(res.data);
			var i = 
			$scope.allData.splice($scope.allData.indexOf($scope.selectedObj), 1);
		});	
	}



	$scope.askDelete=function(obj){
		$scope.selectedObj=obj;
	}
	$scope.askUpdate=function(obj){
		// $scope.newData=obj;
		angular.copy(obj, $scope.newData);
	}
});