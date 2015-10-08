;(function(){
	'use strict'
	String.prototype.format = function(){
		var str = this.valueOf();
		if(!arguments.length){
			return str;
		}
		var tokens = str.match(/{[0-9]}/gi)
			, i = 0
			, l = tokens.length;
		for(;i<l;i++){
			var token = tokens[i]
				, index = token.match(/\d+/);
			str = str.replace(token, arguments[index]);
		}
		return str;
	}
}());
