angular.module('myApp')
.factory('markdownService',markdownService)

function markdownService(){
	return{
		get:function(){
			var markdownText = window.localStorage['markdownText'];
			if(markdownText!=='undefined'){
				console.log(markdownText);
				return angular.fromJson(markdownText);
			}
			return "";
		},
		save:function(markdownText){
			window.localStorage['markdownText'] = angular.toJson(markdownText);
		}
	}
}