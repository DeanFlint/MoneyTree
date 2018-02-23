angular.module('forms', [])    
    //---/Form Validation ---// 
    .directive('integer', function() {
        var INTEGER_REGEXP = /^-?\d+$/;
        return {
            require: 'ngModel',
            link: function(scope, elm, attrs, ctrl) {
                ctrl.$validators.integer = function(modelValue, viewValue) {
                    if (ctrl.$isEmpty(modelValue)) {
                        // consider empty models to be valid
                        return true;
                        }

                    if (INTEGER_REGEXP.test(viewValue)) {
                    // it is valid
                        return true;
                        }
                    // it is invalid
                    return false;
                };
            }};
        })
    //---/Form Validation ---// 

    //---Tooltips ---// 
    .directive('toggle', function(){
        return {
            restrict: 'A',
            link: function(scope, element, attrs){
                if (attrs.toggle=="popover"){
                    $(element).popover();
                    }
                }
            };
        });
    //---/Tooltips ---// 
