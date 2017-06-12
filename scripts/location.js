window.onload=function(){
	BDmap();
	Canvas();
}

// 2D图形
function Canvas(){
	var c = document.getElementById("myCanvas");
	var ctx = c.getContext("2d");
	ctx.fillStyle="rgb(200,0,0)";
	ctx.fillRect(10,10,55,50);
	
	ctx.fillStyle="rgba(0,0,200,0.5)";
	ctx.fillRect(30,30,55,50);
	
	var radgrad1=ctx.createRadialGradient(45,45,10,52,50,30);
	radgrad1.addColorStop(0,'#A7D30C');
	radgrad1.addColorStop(0.9,'#019F62');
	radgrad1.addColorStop(1,'rgba(1,159,98,0)');
	var radgrad2=ctx.createRadialGradient(105,105,20,112,120,50);
	radgrad2.addColorStop(0,'#FF5F98');
	radgrad2.addColorStop(0.75,'#FF0188');
	radgrad2.addColorStop(1,'rgba(255,1,136,0)');
	var radgrad3=ctx.createRadialGradient(95,15,15,102,20,40);
	radgrad3.addColorStop(0,'#00C9FF');
	radgrad3.addColorStop(0.8,'#00B5E2');
	radgrad3.addColorStop(1,'rgba(0,201,255,0)');
	var radgrad4=ctx.createRadialGradient(0,150,50,0,140,90);
	radgrad4.addColorStop(0,'#F4F201');
	radgrad4.addColorStop(0.9,'#E4C700');
	radgrad4.addColorStop(1,'rgba(228,199,0,0)');
	ctx.fillStyle=radgrad4;
	ctx.fillRect(0,0,150,150);
	ctx.fillStyle=radgrad3;
	ctx.fillRect(0,0,150,150);
	ctx.fillStyle=radgrad2;
	ctx.fillRect(0,0,150,150);
	ctx.fillStyle=radgrad1;
	ctx.fillRect(0,0,150,150);
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



