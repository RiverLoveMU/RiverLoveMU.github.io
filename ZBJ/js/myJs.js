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
})
$('.top-nav .enter li').mouseout(function(){
	$(this).find('.show').addClass('hide');
})