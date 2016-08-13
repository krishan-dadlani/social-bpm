var socialBpmModule = angular.module('social-bpm-app', []);

socialBpmModule.directive(
  'socialBpmWidget',
  function () {
    return {
      restrict: 'E',
      scope: {},
      templateUrl: 'client/src/app/views/social-bpm-widget.html?version=' + new Date().getTime(),
      replace: true,
      controller: function ($scope, $element, $attrs, socialBpmDataService) {
        var filterType = $attrs.filterType;
        console.log(filterType);
        $scope.todayDate = socialBpmJQuery.datepicker.formatDate('dd-MM-yy', new Date());
        // Calling social bpm data via ajax starts here
        socialBpmDataService
          .getSocialBpmData()
          .success(function (response) {
            // console.log(response);
            $scope.posts = response;
          })
          .error(function () {
            if (!window.console) {
              console.log("Could not load social bpm data.");
            }
          });
        // Calling social bpm data via ajax ends here
      }
    }
  });
