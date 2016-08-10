angular.module('myApp')
.directive('markdown',['$timeout','markdownService',mdDirective])

function mdDirective($timeout,markdownService){
  var converter = new showdown.Converter();
  var timeout;
    return {
        restrict: 'A',
        link: function(scope, element, attrs){
            loadContent();
            scope.$watch(attrs.markdown,renderMarkdown);
            function loadContent(){
               var content = markdownService.get();
               scope[attrs.markdown] = content;
            }
            function renderMarkdown(content){
                var markdownText = scope.$eval(attrs.markdown);
                var htmlText = converter.makeHtml(markdownText || '');
                element.html(htmlText);
                if (timeout) $timeout.cancel(timeout);
                timeout = $timeout(function() {
                  markdownService.save(markdownText);
                }, 800);
           }
        }
    }
}