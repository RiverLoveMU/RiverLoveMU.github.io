var k = $('.lottery').css('height');
$('.lottery').css('width',k);
$('.lottery').css('left',($(document).width()-parseFloat(k))/2+'px');
$.ajax({
	type:"post",
	url:"http://webapp.aboutnew.net/mwcloudapi/merchant/user_add.php",
	dataType:'json',
	data:{
		wxoid:wxUserInfo.openid,
		project_id:2017081701,
		project_token:'lsfkl3jlkjfldjsfljdi343l43werew3kj4j4j4f34ljls',
		merchant_id:2017081701,
		merchant_token:'slj343lkjfdlj4j5lj34lgf5656456457hhh'
	},
	success:function(result){
			console.log(JSON.stringify(result));
		},
	error:function(err){
		console.log(JSON.stringify(err));
	}
});
var lottery = (function(){
	var carAngle = 0;
	var plateAngle = 0;
	var timer = null;
	var nextTimer = null;
	var prize = 0;
	var control = true;
	var speed = 0;
	var speedTimer = null;
	function start(){
		if(control){
			$.ajax({
				type:"post",
				url:"http://webapp.aboutnew.net/mwcloudapi/prize/index.php",
				dataType:'json',
				data:{
					wxoid:wxUserInfo.openid,
					project_id:2017081701,
					project_token:'lsfkl3jlkjfldjsfljdi343l43werew3kj4j4j4f34ljls',
					merchant_id:2017081701,
					merchant_token:'slj343lkjfdlj4j5lj34lgf5656456457hhh'
				},
				success:function(result){
					prize = parseInt(result.winning_prize_id);
				},
				error:function(err){
					console.log(1);
				}
			});
			speed = 0;
			carAngle=0;
			plateAngle=0;
			rot();
			timer = setInterval(function(){
				if (speed<=3) {
					speed+=0.005;
				}else if (speed>3) {
					speed == 3;
				}
				carAngle-=speed;
				plateAngle+=speed;
				rot();
			},1)
		}
	}
	function getPrize(){
		return prize;
	}
	function end(number){
		if (control) {
			alert(prize);
			control = false;
			var arr = [120, 40, 80, 0, 160, 200, 240, 280, 320];
			var add = arr[number];
			speedTimer = setInterval(function(){
				if (speed>=3) {
					speed = 3;
					clearInterval(timer);
					clearInterval(speedTimer);
					var oldPlateAngle = plateAngle;
					var oldCarAngle = carAngle;
					var carSpeed = speed;
					var plateSpeed = speed;
					nextTimer = setInterval(function(){
						if (plateAngle-oldPlateAngle<=720-oldPlateAngle%360) {
							plateAngle += plateSpeed;
						}else if(plateAngle-oldPlateAngle<=900-oldPlateAngle%360){
							if (plateSpeed>2) {
								plateSpeed -= 0.05;
							}else{
								plateSpeed = 2;
							}
							plateAngle += plateSpeed;
						}else if(plateAngle-oldPlateAngle<=1080-oldPlateAngle%360){
							if (plateSpeed>1) {
								plateSpeed -= 0.05;
							}else{
								plateSpeed = 1;
							}
							plateAngle += plateSpeed;
						}
						if (carAngle-oldCarAngle>=-(1080+add)+(-oldCarAngle)%360) {
							carAngle -= carSpeed;
						} else if(carAngle-oldCarAngle>=-(1260+add)+(-oldCarAngle)%360){
							if (carSpeed>2) {
								carSpeed -= 0.05;
							}else{
								carSpeed = 2;
							}
							carAngle -= carSpeed;
						}else if(carAngle-oldCarAngle>=-(1440+add)+(-oldCarAngle)%360){
							if (carSpeed>1) {
								carSpeed -= 0.05;
							}else{
								carSpeed = 1;
							}
							carAngle -= carSpeed;
						}
						if (carAngle-oldCarAngle<=-(1440+add)+(-oldCarAngle)%360) {
							clearInterval(nextTimer);
							control = true;
						}else{
							rot();
						}
					},1)
					
				}
			})
		}
	}
	function rot (){
		$('#car').css('-webkit-transform','rotate('+carAngle+'deg)');
		$('#plate').css('-webkit-transform','rotate('+plateAngle+'deg)');
	}
	return{
		start:start,
		end:end,
		prize:getPrize
	}
})()
$('#finger-print').on('touchstart',lottery.start);
$('#finger-print').on('touchend',function(){
	lottery.end(lottery.prize());
})