window.onload=function(){
	BDmap();
	Canvas();
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



// 2D图形
function Canvas(){
	var canvas,ctx;
var clockRadius=250;
var clockImage;
function  clear(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}
function drawScene(){
    claer();

    var date = new Date();
    var hours = date.getHours();
    var minutes= date.getMinutes();
    var seconds = date.getSeconds();

    hours = hours>12?hours-12:hours;
    var hour = hours+minutes/60;
    var minute = minutes+ seconds/60;

    ctx.save();
    ctx.drawImage(clockImage,0,0,500,500);
    ctx.translate(canvas.width/2,canvas.height/2);
    ctx.beginPath();

    ctx.font="36px Arial";
    ctx.fillStyle="#000";
    ctx.textAlign="center";
    ctx.textBaseline = "middle";
    for(var n=1;n<=12;n++){
        var theta = (n-3)*(Math.PI*2)/12;
        var x=clockRadius*0.7*Math.cos(theta);
        var y=clockRadius*0.7*Math.sin(theta);
        ctx.fillText(n,x,y);
    }

    ctx.save();
    var theta = (hour-3)*2*Math.PI/12;
    ctx.rotate(theta);
    ctx.beginPath();
    ctx.moveTo(-15,-5);
    ctx.lineTo(-15,5);
    ctx.lineTo(clockRadius*0.5,1);
    ctx.lineTo(clockRadius*0.5,-1);
    ctx.fill();
    ctx.restore();

    ctx.save();
    var theta=(minute-15)*2*Math.PI/60;
    ctx.rotate(theta);
    ctx.beginPath();
    ctx.moveTo(-15,-4);
    ctx.lineTo(-15,4);
    ctx.lineTo(clockRadius*0.8,1);
    ctx.lineTo(clockRadius*0.8,-1);
    ctx.fill();
    ctx.restore();

    ctx.save();
    var theta = (seconds-15)*2*Math.PI/60;
    ctx.rotate(theta);
    ctx.beginPath();
    ctx.moveTo(-15,-4);
    ctx.lineTo(-15,4);
    ctx.lineTo(clockRadius*0.8,1);
    ctx.lineTo(clockRadius*0.8,-1);
    ctx.fill();
    ctx.restore();

    ctx.save();
    var theta = (seconds-15)*2*Math.PI/60;
    ctx.rotate(theta);
    ctx.beginPath();
    ctx.moveTo(-15,-3);
    ctx.lineTo(-15,3);
    ctx.lineTo(clockRadius*0.9,1);
    ctx.lineTo(clockRadius*0.9,-1);
    ctx.fillStyle="#0f0";
    ctx.fill();
    ctx.restore();
    ctx.restore();
}
$(function(){
    canvas=document.getElementById(canvas);
    ctx=canvas.getContext('2d');
    clockImage=new Image();
    clockImage.src='images/';
    setInterval(drawScene,1000);
});
}



