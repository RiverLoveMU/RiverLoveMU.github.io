var k = $('.lottery').css('height');
$('.lottery').css('width', k);
$('.lottery').css('left', ($(document).width() - parseFloat(k)) / 2 + 'px');

var lottery = (function() {
	var carAngle = 0;
	var plateAngle = 0;
	var timer = null;
	var nextTimer = null;
	var prize = 0;
	var control = true;
	var speed = 0;
	var speedTimer = null;
	function start() {
		console.log(control);
		if (control) {
			speed = 0;
			carAngle = 0;
			plateAngle = 0;
			prize = 5;
			$('#car').css('-webkit-transform', 'rotate(' + carAngle + 'deg)');
			$('#plate').css('-webkit-transform', 'rotate(' + plateAngle + 'deg)');
			timer = setInterval(function() {
				if (speed<=3) {
					speed+=0.005;
				}else if (speed>3) {
					speed == 3;
				}
				console.log(speed);
				carAngle -= speed;
				plateAngle += speed;
				$('#car').css('-webkit-transform', 'rotate(' + carAngle + 'deg)');
				$('#plate').css('-webkit-transform', 'rotate(' + plateAngle + 'deg)');
			}, 1)
		}
	};
	function getPrize(){
		return prize;
	}
	function end(number) {
		if (control) {
			control = false;
			var arr = [120, 40, 80, 0, 160, 200, 240, 280, 320];
			var add = arr[number];
			speedTimer = setInterval(function(){
				if (speed >= 3) {
					clearInterval(timer);
					clearInterval(speedTimer);
					var oldPlateAngle = plateAngle;
					var oldCarAngle = carAngle;
					var carSpeed = speed;
					var plateSpeed = speed;
					nextTimer = setInterval(function() {
						if(plateAngle - oldPlateAngle <= 720 - oldPlateAngle % 360) {
							plateAngle += plateSpeed;
						} else if(plateAngle - oldPlateAngle <= 900 - oldPlateAngle % 360) {
							if (plateSpeed>2) {
								plateSpeed -= 0.05;
							}else{
								plateSpeed = 2;
							}
							plateAngle += plateSpeed;
						} else if(plateAngle - oldPlateAngle <= 1080 - oldPlateAngle % 360) {
							if (plateSpeed>1) {
								plateSpeed -= 0.05;
							}else{
								plateSpeed = 1;
							}
							plateAngle += plateSpeed;
						}
						if(carAngle - oldCarAngle >= -(1080 + add) + (-oldCarAngle) % 360) {
							carAngle -= carSpeed;
						} else if(carAngle - oldCarAngle >= -(1260 + add) + (-oldCarAngle) % 360) {
							if (carSpeed>2) {
								carSpeed -= 0.05;
							}else{
								carSpeed = 2;
							}
							carAngle -= carSpeed;
						} else if(carAngle - oldCarAngle >= -(1440 + add) + (-oldCarAngle) % 360) {
							if (carSpeed>1) {
								carSpeed -= 0.05;
							}else{
								carSpeed = 1;
							}
							carAngle -= carSpeed;
						}
						$('#car').css('-webkit-transform', 'rotate(' + carAngle + 'deg)');
						$('#plate').css('-webkit-transform', 'rotate(' + plateAngle + 'deg)');
						if(carAngle - oldCarAngle < -(1440 + add) + (-oldCarAngle) % 360) {
							clearInterval(nextTimer);
							control = true;
						}
					}, 1)
				}
			})
		}
	}
	return {
		start:start,
		end:end,
		prize:getPrize
	}
})()
$('#finger-print').on('touchstart', lottery.start);
$('#finger-print').on('touchend', function() {
	lottery.end(1);
})