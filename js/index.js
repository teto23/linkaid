$(function() {

	var w_flag = "pc";

	$(window).resize(function() {
		setTimeout(function(){
	  		trend_slider();
		},400);
	  	mv_video();
	  	w_flag_check();
	});

	function w_flag_check(){
		var w = $(window).width();
		if(w<=768){
			if(w_flag=="pc"){
				slider_reset();
			}
			w_flag = "sp";
		}else{
			if(w_flag=="sp"){
				slider_reset();
			}
			w_flag = "pc";
		}
	}
	w_flag_check();

	function mv_video(){
    	var h = $(window).height();
    	var w = $(window).width();
    	if(w/h>1.87){
    		$('.top_back_video').css('width','100%');
    		$('.top_back_video').css('height','auto');
    	}else{
    		$('.top_back_video').css('width','auto');
    		$('.top_back_video').css('height','100%');
    	}
	}
	mv_video();

	function opener(){
		$('.opener').removeClass('a1');
		setTimeout(function(){
			$('.opener_logo').addClass('a1');
			$('.opener_logo_sp').addClass('a1');
			setTimeout(function(){
				$('.opener_logo').removeClass('a1');
        $(".draw").addClass("-do");
				setTimeout(function(){
					$('.opener').addClass('a1');
					setTimeout(function(){
						$('.opener').remove();
					},400);
				},600);
			},600);
			setTimeout(function(){
				$('.opener_logo_sp').removeClass('a1');
				setTimeout(function(){
					$('.sp_o').addClass('a1');
				},400);
			},1000);
		},600);
	}
	opener();

	function slider_reset(){
		$('.dot').removeClass('active');
		$('.dot[data-num=0]').addClass('active');
		$('.column_link').removeClass('active');
		$('.column_link[data-num=0]').addClass('active');
		$('.left_cbtn').hide();
		if($('.column_link').length<5){
			$('.right_cbtn').hide();
		}else{
			$('.right_cbtn').show();
		}
	}

	function trend_slider(){
		var num = $('.column_link').length;
		var w = $('.column_link').outerWidth(true);
		trend_so_slide();
	}
	trend_slider();

	function trend_so_slide(){
		var num = $('.column_link.active').data('num');
		var w = $('.column_link').outerWidth(true);
		$('.column_link_item').css('left',-(w*num)+"px");
	}

	//アイテム数で→ボタンを削除
	if($('.column_link').length<5){
		$('.right_cbtn').hide();
	}

	$('.right_cbtn').on('click',function(){
		right_slide();
	});

	function right_slide(){
		var act_num = $('.column_link.active').data('num');
		if(act_num<$('.column_link').length-1){
			$('.column_link').removeClass('active');
			$('.column_link[data-num='+(act_num+1)+']').addClass('active');
			trend_so_slide();
			$('.left_cbtn').show();
			if(w_flag=="pc"){
				if(((act_num+1)>=$('.column_link').length-4)){
					$('.right_cbtn').hide();
				}
			}else{
				if(((act_num+1)>=$('.column_link').length-1)){
					$('.right_cbtn').hide();
				}
			}
			//ページャードットの調整
			$('.dot').removeClass('active');
			$('.dot[data-num='+(act_num+1)+']').addClass('active');
		}
	}

	$('.left_cbtn').on('click',function(){
		left_slide();
	});



	function left_slide(){
		var act_num = $('.column_link.active').data('num');
		if(act_num!=0){
			$('.column_link').removeClass('active');
			$('.column_link[data-num='+(act_num-1)+']').addClass('active');
			trend_so_slide();
			$('.right_cbtn').show();
			if((act_num-1)<=0){
				$('.left_cbtn').hide();
			}
			//ページャードットの調整
			$('.dot').removeClass('active');
			$('.dot[data-num='+(act_num-1)+']').addClass('active');
		}
	}

	$('.dot').on('click',function(){
		var act_num = $(this).data('num');
		$('.column_link').removeClass('active');
		$('.column_link[data-num='+act_num+']').addClass('active');
		trend_so_slide();
		if(w_flag=="pc"){
			if($('.column_link').length<5||(act_num>=$('.column_link').length-4)){
				$('.right_cbtn').hide();
			}else{
				$('.right_cbtn').show();
			}
		}else{
			if(act_num>=($('.column_link').length-1)){
				$('.right_cbtn').hide();
			}else{
				$('.right_cbtn').show();
			}
		}
		if(act_num==0){
			$('.left_cbtn').hide();
		}else{
			$('.left_cbtn').show();
		}
		//ページャードットの調整
		$('.dot').removeClass('active');
		$('.dot[data-num='+act_num+']').addClass('active');
	});



	$(window).scroll(function() {
		scroll_event();
	});

	setTimeout(function(){
		scroll_event();
	},2200);

	function scroll_event(){
		var nh = $(window).scrollTop()+$(window).height();
		if($('.about_us').length&&nh>$('.about_us').offset().top+200){
			$('.about_us .top_detail_title').addClass('show');
			if(nh>$('.about_us').offset().top+500){
				$('.about_us .detail_center').find('.ani_off').addClass('ani_on');
			}
		}
		if (nh>$('.service_detail').offset().top) {
	      $('.lang_item.scroll_lang').fadeIn();
	    } else {
	      $('.lang_item.scroll_lang').fadeOut();
	    }
		if($('.service_detail').length&&nh>$('.service_detail').offset().top+200){
			$('.service_detail .top_detail_title').addClass('show');
			if(nh>$('.service_detail').offset().top+400){
				$('.service_detail .top_detail_h2').addClass('ani_on');
			}
			if(nh>$('.service_detail').offset().top+600){
				$('.sf_box1').addClass('ani_on');
			}
			if(nh>$('.service_detail').offset().top+800){
				$('.sf_box2').addClass('ani_on');
			}
		}
		if($('.column').length&&nh>$('.column').offset().top+200){
			$('.column .top_detail_title').addClass('show');
			if(nh>$('.column').offset().top+400){
				$('.column .top_detail_h2').addClass('ani_on');
			}
			if(nh>$('.column').offset().top+600){
				$('.column_fbox').addClass('ani_on');
				$('.pager_flex').addClass('ani_on');
			}
		}
	}

	//スワイプ処理
	$('.column_item_width').on('touchstart', onTouchStart); //指が触れたか検知
	$('.column_item_width').on('touchmove', onTouchMove); //指が動いたか検知
	$('.column_item_width').on('touchend', onTouchEnd); //指が離れたか検知
	var direction, position;

	//スワイプ開始時の横方向の座標を格納
	function onTouchStart(event) {
	  position = getPosition(event);
	  direction = ''; //一度リセットする
	}

	//スワイプの方向（left／right）を取得
	function onTouchMove(event) {
	  if (position - getPosition(event) > 70) { // 70px以上移動しなければスワイプと判断しない
	    direction = 'left'; //左と検知
	  } else if (position - getPosition(event) < -70){  // 70px以上移動しなければスワイプと判断しない
	    direction = 'right'; //右と検知
	  }
	}

	function onTouchEnd(event) {
	  if (direction == 'right'){
	    left_slide();
	  } else if (direction == 'left'){
	    right_slide();
	  }
	}

	//横方向の座標を取得
	function getPosition(event) {
	  return event.originalEvent.touches[0].pageX;
	}

});
