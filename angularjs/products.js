/**
 * Created by csjoung on 2016. 9. 23..
 */
angular.module("exampleApp",["increment"])
    .constant("baseUrl", "http://localhost:5500/products/")
    .controller("defaultCtrl", function($scope, $http, baseUrl){
        $scope.displayMode = "list";
        $scope.currentProduct = null;

        $scope.listProducts = function() {
            /*$scope.products = [
                {id: 0, name: "Dummy1", category: "Test", price: 1.25},
                {id: 1, name: "Dummy2", category: "Test", price: 2.45},
                {id: 3, name: "Dummy3", category: "Test", price: 4.25}];*/
            $http.get(baseUrl).success(function (data) {
                $scope.products = data;
            })
        }

        $scope.deleteProduct = function (product) {
            $http({
                method: "DELETE" ,
                url: baseUrl + product.id
            }).success(function () {
                $scope.products.splice($scope.products.indexOf(product), 1);
            });

        }

        $scope.createProduct = function (product) {
            $http.post(baseUrl, product).success(function (newProduct){
                $scope.products.push(newProduct);
                $scope.displayMode = "list";
            });

        }

        $scope.updateProduct = function (product) {
            $http({
                url: baseUrl + product.id,
                method: "PUT",
                data: product
            }).success(function (modifiedProduct) {
                for(var i = 0; i < $scope.products.length; i++) {
                    if($scope.products[i].id == modifiedProduct.id) {
                        $scope.products[i] = modifiedProduct;
                        break;
                    }
                }
                $scope.displayMode = "list";
            });


        }

        $scope.editOrCreateProduct = function (product) {
            $scope.currentProduct = product ? angular.copy(product) : {} ;
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