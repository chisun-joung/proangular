/**
 * Created by csjoung on 2016. 9. 23..
 */
angular.module("exampleApp",[])
.controller("defaultCtrl", function($scope){
    $scope.displayMode = "list";
    $scope.currentProcut = null;

    $scope.listProducts = function() {
        $scope.products = [
            {id: 0, name: "Dummy1", category: "Test", price: 1.25},
            {id: 1, name: "Dummy2", category: "Test", price: 2.45},
            {id: 3, name: "Dummy3", category: "Test", price: 4.25}];
    }

    $scope.deleteProduct = function (product) {
        $scope.products.splice($scope.products.indexOf(product), 1);
    }

    $scope.createProduct = function (product) {
        $scope.products.push(product);
        $scope.displayMode = "list";
    }

    $scope.updateProduct = function (product) {
        for(var i = 0; i < $scope.products.length; i++) {
            if($scope.products[i].id == products.id) {
                $scope.products[i] = product;
                break;
            }
        }
        $scope.displayMode = "list";
    }

    $scope.editOrCreateProduct = function (product) {
        $scope.currentProcut = product ? angular.copy(product) : {} ;
        $scope.displayMode = "edit";
    }

    $scope.saveEdit = function (product) {
        if(angular.isDefined(product.id)){
            $scope.updateProduct(product);
        } else {
            $scope.createProduct(product);
        }
    }

    $scope.cancelEdit = function () {
        $scope.currentProduct = {};
        $scope.displayMode = "list";
    }

    $scope.listProducts();
});