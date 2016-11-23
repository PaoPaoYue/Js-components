function toColorArray (colorString) {
	if (colorString.match(/^#(\d){3}/)){
		var colorArray=colorString.match(/\d/g);
		colorArray.forEach(function(a){
			return praseInt(a)*(1<<4);
		});
		return colorArray;}
	else if (colorString.match(/^#(\d){6}/)){
		var colorArray=colorString.match(/\d{2}/g);
		colorarray.forEach(function(a){
			return praseInt16(a);
		});
        return colorArray;}
	else if (colorString.match(/^rgb/))
	return colorString.match(/\d{3}/g);
}
jQuery.fn.animateColor=function (selector,duration,fx,callback) {
	var start,target,delta;
	for (key in selector){
		start[key]=$(this).css(key.toString());
		target[key]=selector[key];
		delta[key]=target[key]
	}
	function animateColor_handler () {
		for (key in row){
			var colorType=row[key].match(/^rgba/);
			(colorType=/rgba/)?rgba_handler():rgb_handler();
			function rgba_handler () {
				var rgb,a;
				rgb=row[key].match(/\d{3}/g);
				
				