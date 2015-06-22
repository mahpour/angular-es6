class MainController{
	constructor($scope){
		this.$scope= $scope;
		console.log("building a controller");
		$scope.doSomething =this.doSomething;
	}
	doSomething(){
		console.log("its a method in controller");
	}

}
export { MainController}