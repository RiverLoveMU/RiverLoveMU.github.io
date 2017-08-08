function showFirst() {
	$('.title').removeClass('hide')
	$('.browsergif').removeClass('hide');
	$('.btnBox').removeClass('hide');
	$('.ballScreen').removeClass('second');
	$('.ballScreen').addClass('first');
	$('.ballScreen div').each(function(i, elem) {
		$(elem).removeClass('active');
		$(elem).stop();
		$(elem).css('left', ballStart[i]);
	})
	startMove();
	controlWheel = true;
}

function showSecond() {
	$('.dashboard').removeClass('hide');
	$('.bigTitle').removeClass('hide');
}

function hideSecond() {
	$('.bigTitle').removeClass('fadeout');
	$('.dashboard').addClass('hide');
	$('.bigTitle').addClass('hide');
}

function showThird(k) {
	if(k == 1) {
		$('.windows').addClass('lateralOut');
		$('.clean').addClass('lateralOut');
	}
	$('.windows').removeClass('hide');
	$('.clean').removeClass('hide');
}

function hideThird(k) {
	$('.windows').addClass('hide');
	$('.clean').addClass('hide');
	if(k == 1) {
		$('.windows').removeClass('lateral');
		$('.clean').removeClass('lateral');
	} else {
		$('.windows').removeClass('fadeout');
		$('.clean').removeClass('fadeout');
	}
}

function thirdDirection(k) {
	$('.windows').removeClass('lateralOut');
	$('.clean').removeClass('lateralOut');
	if(k == 1) {
		$('.windows').addClass('lateral');
		$('.clean').addClass('lateral');
	} else {
		$('.windows').addClass('fadeout');
		$('.clean').addClass('fadeout');
	}
}

function hideFourth(k) {
	if(k == 1) {
		$('.extend').removeClass('leave');
	} else {
		$('.extend').removeClass('left');
	}
	$('.extend').addClass('hide');
}
function startMove (){
	setTimeout(function(){
		$('.ballScreen div').each(function(i,elem){
			$(elem).addClass('active');
			$(elem).animate({'left': -$(elem).width() + 'px'},($(elem).offset().left+$(elem).width())/(screenWidth+$(elem).width())*ballMove[i]*3,'linear',function(){
				loopMove($(elem),i);
			})
		})
	},2000)
}
function loopMove (obj,i) {
	obj.css('left',screenWidth);
	obj.delay(1000).animate({'left': -obj.width() + 'px'},ballMove[i]*3,'linear',function(){
		loopMove(obj,i);
	})
}