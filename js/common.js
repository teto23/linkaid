$(function() {

	var w_flag = "pc";

	$(window).resize(function() {
	  	w_flag_check();
	});

	function w_flag_check(){
		var w = $(window).width();
		if(w<=768){
			w_flag = "sp";
		}else{
			w_flag = "pc";
		}
	}
	w_flag_check();

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

	$('.menu_box,.menu_btn.sp').on('click',function(){
		$(this).parent().find('.top_side_bar').fadeIn().css('display','flex');
		$('body').addClass('open');
	});

	$('.ts_close_btn').on('click',function(){
		$(this).parent('.top_side_bar').fadeOut();
		$('body').removeClass('open');
	});


	$(window).scroll(function() {
		scroll_event();
	});

	setTimeout(function(){
		scroll_event();
	},2200);

	function scroll_event(){
		var nh = $(window).scrollTop()+$(window).height();
		if($(window).scrollTop()>1000){
			$('.menu_btn.sp').addClass('b');
		}else{
			$('.menu_btn.sp').removeClass('b');
		}
		if(w_flag=="pc"){
			if(nh>$('.footer_fbox').offset().top+$('.footer_fbox').height()-100){
				$('.footer_fbox').find('.ani_off').addClass('ani_on');
			}
		}else if(w_flag=="sp"){
			if(nh>$('.footer_fbox').offset().top+100){
				$('.footer_fbox').find('.ani_off').addClass('ani_on');
			}
		}
	}

});
