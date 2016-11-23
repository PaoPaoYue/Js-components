function toColorArray (colorString) {
	if (colorString.match(/^#\w{3}\b/)){
		var colorArray=colorString.match(/\w/g);
		colorArray=colorArray.map(function(a){
			return parseInt('0x'+a)*((1<<4)+1);
		});
		return colorArray;}
	else if (colorString.match(/^#\w{6}/)){
		var colorArray=colorString.match(/\w{2}/g);
		colorArray=colorArray.map(function(a){
			return parseInt('0x'+a);
		});
        return colorArray;}
	else if (colorString.match(/^rgb/))
	return colorString.match(/\d+\b/g);
}
function toColorString (colorArray) {
        return 'rgb('+colorArray.join(',')+')';
}
$.fn.animateColor = function (target,duration,oncomplete) {
	var targetColor=[], startColor=[], deltaColor=[], currentColor=[];
	var that = this;
	var length = 0;
	for (var i in target) {
		targetColor.push(toColorArray(target[i]));
		startColor.push(toColorArray($(this).css(i)));
		length+=1;
	}
	for (var n=0 ; n<length ; n++){
		deltaColor[n]=[0];
		currentColor[n]=[0];
		for (var k=0 ; k<3 ;k++){
			deltaColor[n][k]=targetColor[n][k]-startColor[n][k];
		}
	}
	var startTime= (new Date()).getTime();
	animate();
	
	function animate () {
		var deltaTime = (new Date()).getTime()- startTime;
		var fraction = deltaTime/duration;
		var j=0
		if (fraction<1) {
			for (var n=0 ; n<length ; n++){
				for (var k=0 ; k<3 ;k++){
					currentColor[n][k] = parseInt(startColor[n][k])+~~(deltaColor[n][k]*(Math.sqrt(fraction)));
				}
			}
			for (var i in target) {
				$(that).css(i,toColorString(currentColor[j]));
				j+=1;
			}
			setTimeout(animate,25);
		}
		else if (fraction>=1){
			for (var i in target) {
				$(that).css(i,toColorString(targetColor[j]));
				j+=1
			}
			if (oncomplete) oncomplete(that);
		}
	}
}