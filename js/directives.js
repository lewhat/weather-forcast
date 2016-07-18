//Directives

weatherApp.directive('weatherReport', function(){
    return {
        restrict: 'E',
        templateUrl: 'js/directives/weatherReport.html',
        replace: true,
        scope: { 
            weatherDay: '=',
            convertToStandard: '&',
            convertToDate: '&',
            dateFormat: '@'
        }
    }
})
