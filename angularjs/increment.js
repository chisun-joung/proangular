/**
 * Created by chisunjoung on 2016. 9. 24..
 */
angular.module("increment",[])
    .directive("increment", function () {
        return {
            restrict: "E",
            scope: {
                value: "=value"
            },
            link: function (scope, element, attrs) {
                var button = angular.element("<botton>").text("+");
                button.addClass("btn btn-primary btn-xs");
                element.append(button);
                button.on("click", function () {
                    scope.$apply(function () {
                        scope.value++;
                    })
                })
            },
        }
    });