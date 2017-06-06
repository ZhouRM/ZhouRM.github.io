window.onload=function(){
	BDmap();
	Canvas();
}



// 地图API
function BDmap(){
	var map = new BMap.Map("map");
	var point = new BMap.Point(116.331398,39.897445);
	map.centerAndZoom(point,12);

	function myFun(result){
		var cityName = result.name;
		map.setCenter(cityName);
		alert("当前定位城市:"+cityName);
	}
	var myCity = new BMap.LocalCity();
	myCity.get(myFun);
}



// 2D图形
function Canvas(){
	var canvas = document.getElementById("drew");
	var context = canvas.getContext("2d");
	context.fillRect(10,10,100,100);
}



