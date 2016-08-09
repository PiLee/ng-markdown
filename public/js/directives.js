angular.module('myApp')
.directive('markdown',[mdDirective])

function mdDirective(){
  var converter = new showdown.Converter();
    return {
        restrict: 'AE',
        link: function (scope, element, attrs) {
            function renderMarkdown() {
                var htmlText = converter.makeHtml(scope.$eval(attrs.markdown)  || '');
                element.html(htmlText);
            }
            scope.$watch(attrs.markdown, renderMarkdown);
            renderMarkdown();
        }
    };
}