/**
 * Created by csjoung on 2016. 9. 23..
 */
angular.module("exampleApp",["increment", "ngResource", "ngRoute"])
    .constant("baseUrl", "http://localhost:5500/products/")
    .config(function ($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);

        $routeProvider.when("/list", {
            templateUrl: "/tableView.html"
        });

        $routeProvider.when("/edit", {
            templateUrl: "/editorView.html"
        });

        $routeProvider.when("/create", {
            templateUrl: "/editorView.html"
        });

        $routeProvider.otherwise({
            templateUrl: "/tableView.html"
        });
    })
    .controller("defaultCtrl", function($scope, $http, $resource, $location, baseUrl){

        $scope.currentProduct = null;

        $scope.productsResource = $resource(baseUrl + ":id", { id: "@id"}
            ,{ create: {method: "POST"}, save: { method: "PUT"}});

        $scope.listProducts = function() {
            /*$scope.products = [
                {id: 0, name: "Dummy1", category: "Test", price: 1.25},
                {id: 1, name: "Dummy2", category: "Test", price: 2.45},
                {id: 3, name: "Dummy3", category: "Test", price: 4.25}];*/
            /*$http.get(baseUrl).success(function (data) {
                $scope.products = data;
            })*/

            $scope.products = $scope.productsResource.query();
            console.log($scope.products.length);


        }

        $scope.deleteProduct = function (product) {
           /* $http({
                method: "DELETE" ,
                url: baseUrl + product.id
            }).success(function () {
                $scope.products.splice($scope.products.indexOf(product), 1);
            });*/

           product.$delete().then(function() {
               $scope.products.splice($scope.products.indexOf(product), 1);
           });
            $location.path("/list");

        }

        $scope.createProduct = function (product) {
            /*$http.post(baseUrl, product).success(function (newProduct){
                $scope.products.push(newProduct);
                $scope.displayMode = "list";
            });*/

            new $scope.productsResource(product).$create().then(function (newProduct) {
                $scope.products.push(newProduct);
                $location.path("/list");
            });

        }

        $scope.updateProduct = function (product) {
            /*$http({
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
            });*/

            product.$save();
            $location.path("/list");


        }

        $scope.editProduct = function (product) {
            $scope.currentProduct = product;
            $location.path("/edit");
        }

        $scope.saveEdit = function (product) {
            if(angular.isDefined(product.id)){
                $scope.updateProduct(product);
            } else {
                $scope.createProduct(product);
            }

            $scope.currentProduct = {};
        }

        $scope.cancelEdit = function () {
            if($scope.currentProduct&&$scope.currentProduct.$get){
                $scope.currentProduct.$get();
            }
            $scope.currentProduct = {};
            $location.path("/list");
        }

        $scope.listProducts();
        console.log($scope.products.length);
    });