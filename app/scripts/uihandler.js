clTimeout = new Array(6);


$(document).ready(function(){
	!(function assertUI(){
	$([1,2,3,4,5,6]).each(function(index,value){
		if (localStorage.getItem(value) == "1")
			clTimeout[value-1] = $("#btn_"+value).blink();
	});})();

});
