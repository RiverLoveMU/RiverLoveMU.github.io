function demandScroll (obj,start){
	var end = 0;
	if (start == 0) {
		end = -43
	}else if(start == 43){
		end = 0;
	}
	obj.delay(1000).animate({'top': end},1000,'linear',function(){
		if (end == -43) {
			obj.css('top','43px');
			end = 43;
		}
		demandScroll(obj,end);
	});
}
function changeFa (index){
	var faOp = 0;
	$('.facilitator .fa-list').eq(index).siblings('.fa-list').addClass('hide')
	$('.facilitator .fa-list').eq(index).removeClass('hide');
	$('.facilitator .fa-list').eq(index).css('opacity',0);
	var timer = setInterval(function(){
			faOp+=0.04;
			$('.facilitator .fa-list').eq(index).css('opacity',faOp);
			if (faOp>=1) {
				clearInterval(timer);
			}
		},10)
}
function aChange(){
	autoChange = setInterval(function(){
		autoIndex = (++autoIndex)%3;
		$('.facilitator .fa-tit .sub-tit').eq(autoIndex).css('border-bottom-color','#ff6600');
		$('.facilitator .fa-tit .sub-tit').eq(autoIndex).siblings().css('border-bottom-color','#e8e8e8');
		changeFa(autoIndex)
	},10000)
}
