$('.top-nav .website li').eq(0).mouseover(function(){
	$(this).css({'background':'white','border-left':'1px solid gainsboro','border-right':'1px solid gainsboro'});
	$('.top-nav .website li .show').removeClass('hide');
})
$('.top-nav .website li').eq(0).mouseout(function(){
	$(this).css({'background':'transparent','border':'none'});
	$('.top-nav .website li .show').addClass('hide');
})
$('.top-nav .enter li').mouseover(function(){
	$(this).find('.show').removeClass('hide');
	$(this).find('.website-nav').removeClass('hide');
})
$('.top-nav .enter li').mouseout(function(){
	$(this).find('.show').addClass('hide');
	$(this).find('.website-nav').addClass('hide');
})
$('.bajie-icon .close').click(function(ev){
	ev.preventDefault();
	ev.stopPropagation();
	$(this).parent().addClass('hide');
})
$('.search .city').mouseover(function(){
	$(this).find('.city-list').removeClass('hide');
})
$('.search .city').mouseout(function(){
	$(this).find('.city-list').addClass('hide');
})
$('.search .search-box .sort').mouseover(function(){
	$('.more-search-box').removeClass('hide');
})
$('.search .search-box .sort').mouseout(function(ev){
	$('.more-search-box').addClass('hide');
})
$('.more-search').click(function(){
	if ($(this).index()!=0) {
		$('.search .search-box .sort span').html($(this).html());
	}
})
$('.search .search-box .tianpengwang').click(function(){
	$(this).css({'background':'#DE352F','color':'white'});
	$('.search .search-box .zhubajie').removeClass('bg-ff6901').css('color','#ff6901');
	$('.search .search-box .input-box input').css('border-color','#DE352F');
	$('.search .search-box .input-box .sort').css('border-color','#DE352F');
	$('.search .search-box .input-box button').css({'background':'#DE352F','border-color':'#DE352F'});
	$('.search .search-box .input-box .demand').css('visibility','hidden');
	$('.search .search-box .input-box .or').css('visibility','hidden');
	for (var i=0;i<$('.search .search-box ul a').length;i++) {
		$('.search .search-box ul a').eq(i).removeClass('orange');
		switch (i){
			case 0:
				$('.search .search-box ul a').eq(i).html('logo');
				break;
			case 1:
				$('.search .search-box ul a').eq(i).html('营销推广');
				break;
			case 2:
				$('.search .search-box ul a').eq(i).html('网站建设');
				break;
			case 3:
				$('.search .search-box ul a').eq(i).html('APP开发');
				$('.search .search-box ul a').eq(i).css('color','#DE352F');
				break;
			case 4:
				$('.search .search-box ul a').eq(i).html('打造爆款');
				break;
			case 5:
				$('.search .search-box ul a').eq(i).html('企业转型');
				break;
			default:
				$('.search .search-box ul a').eq(i).css('display','none');
				break;
		}
	}
})
$('.search .search-box .zhubajie').click(function(){
	$('.search .search-box .tianpengwang').css({'background':'transparent','color':'#DE352F'});
	$('.search .search-box .zhubajie').addClass('bg-ff6901').css('color','white');
	$('.search .search-box .input-box input').css('border-color','#ff6901');
	$('.search .search-box .input-box .sort').css('border-color','#ff6901');
	$('.search .search-box .input-box button').css({'background':'#ff6901','border-color':'#ff6901'});
	$('.search .search-box .input-box .demand').css('visibility','visible');
	$('.search .search-box .input-box .or').css('visibility','visible');
	for (var i=0;i<$('.search .search-box ul a').length;i++) {
		$('.search .search-box ul a').eq(i).removeClass('orange');
		switch (i){
			case 0:
				$('.search .search-box ul a').eq(i).html('定制开发');
				$('.search .search-box ul a').eq(i).addClass('orange')
				break;
			case 1:
				$('.search .search-box ul a').eq(i).html('大咖动画');
				$('.search .search-box ul a').eq(i).addClass('orange')
				break;
			case 2:
				$('.search .search-box ul a').eq(i).html('网站建设');
				break;
			case 3:
				$('.search .search-box ul a').eq(i).html('电商服务');
				$('.search .search-box ul a').eq(i).addClass('orange')
				break;
			case 4:
				$('.search .search-box ul a').eq(i).html('营销推广');
				break;
			case 5:
				$('.search .search-box ul a').eq(i).html('企业官网');
				break;
			default:
				$('.search .search-box ul a').eq(i).css('display','block');
				break;
		}
	}
})
var inDemand = 1
$('.search .search-box .input-box .demand').mouseover(function(){
	$(this).find('.demand-list').removeClass('hide');
	if (inDemand==1) {
		demandScroll($(this).find('.first-show'),0);
		demandScroll($(this).find('.second-show'),-43);
		inDemand = 2;
	}
})
$('.search .search-box .input-box .demand').mouseout(function(){
	$(this).find('.demand-list').addClass('hide');
})
$('.nav .left-nav .ul-content').mouseover(function(){
	$(this).find('.nav-detail-list').removeClass('hide');
})
$('.nav .left-nav .ul-content').mouseout(function(){
	$(this).find('.nav-detail-list').addClass('hide');
})
$('.nav .left-nav .ul-content .cover').each(function(i,elem){
	if (i<3) {
		$(elem).css('top',i*22+72+'px')
	}
	if(i>=3 && i<6){
		$(elem).css('top',i*22+72+24+'px')
	}
	if(i>=6 && i<9){
		$(elem).css('top',i*22+72+48+'px')
	}
	if(i>=9 && i<11){
		$(elem).css('top',i*22+72+72+'px')
	}
	if(i>=11 && i<14){
		$(elem).css('top',i*22+72+96+'px')
	}
	if(i>=14 && i<16){
		$(elem).css('top',i*22+72+120+'px')
	}
})
$('.nav .right-nav .welcome .manu ul li').each(function(i,elem){
	$(elem).mouseover(function(){
		var myIndex = $(this).index();
		var myOp = 0
		$(this).closest('ul').find('li').css({'background':'#F9F9F9','border-bottom':'1px solid gainsboro'})
		$(this).css({'background':'white','border-bottom':'none'})
		$('.nav .right-nav .welcome .notice .manu-detail ul').addClass('hide');
		$('.nav .right-nav .welcome .notice .manu-detail .credit-search').addClass('hide');
		$('.nav .right-nav .welcome .notice .manu-detail .credit-search').css('opacity',0);
		$('.nav .right-nav .welcome .notice .manu-detail ul').eq(myIndex).css('opacity',0);
		$('.nav .right-nav .welcome .notice .manu-detail ul').eq(myIndex).removeClass('hide');
		if (myIndex==2) {
			$('.nav .right-nav .welcome .notice .manu-detail .credit-search').removeClass('hide');
		}
		var timer = setInterval(function(){
			myOp+=0.04;
			$('.nav .right-nav .welcome .notice .manu-detail ul').eq(myIndex).css('opacity',myOp);
			$('.nav .right-nav .welcome .notice .manu-detail .credit-search').css('opacity',myOp);
			if (myOp>=1) {
				clearInterval(timer);
			}
		},10)
	})
})