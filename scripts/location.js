window.onload=function(){
	BDmap();
	Canvas();
}

// 2D图形
function Canvas(){
	var c = document.getElementById("drew");
	var ctx = c.getContext("2d");
	ctx.beginPath();
	ctx.arc(95,50,40,0.2*Math.PI);
	ctx.stroke();
	
	//var grd=ctx.createLinearGradient(0,0,200,0);
	//grd.addColorStop(0,"bule");
	//grd.addColorStop(1,"white");
	//ctx.fillStyle=grd;
	//ctx.fillRect(95,50,40,0.2*Math.PI);
}


// 地图API
function BDmap(){
	var map = new BMap.Map("map");
	var point = new BMap.Point(116.331398,39.897445);
	map.centerAndZoom(point,12);

// 	function myFun(result){
// 		var cityName = result.name;
// 		map.setCenter(cityName);
// 		alert("当前定位城市:"+cityName);
// 	}
// 	var myCity = new BMap.LocalCity();
// 	myCity.get(myFun);
	var geolocation = new BMap.Geolocation();
	geolocation.getCurrentPosition(function(r){
		if(this.getStatus() == BMAP_STATUS_SUCCESS){
			var mk = new BMap.Marker(r.point);
			map.addOverlay(mk);
			map.panTo(r.point);
			alert('您的位置：'+r.point.lng+','+r.point.lat);
		}
		else {
			alert('failed'+this.getStatus());
		}        
	},{enableHighAccuracy: true})
}



