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
