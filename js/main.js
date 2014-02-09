$(document).ready(function() {
	$('.slide img').css({'opacity': '0'}).eq(0).css({'opacity': '1'});
	$('.slide .info').animate({'bottom': '282px', 'opacity': '0'}, 1).eq(0).animate({'bottom': '0', 'opacity': '1'}, 1);
	var slideNum = 0;
	slideCount = $('#slider .slide').size();

	function animSlide(arrow) {
		clearTimeout(slideTime);
		$('.slide img').eq(slideNum).animate({opacity: 0}, 500);
		$('.slide .info').eq(slideNum).animate({'bottom': '282px', 'opacity': '0'}, 500);

		if (arrow == 'next') {
			if (slideNum == (slideCount - 1)) {
				slideNum = 0;
			} else {
				slideNum++;
			}
		} else if (arrow == 'prew') {
			if (slideNum == 0) {
				slideNum = slideCount - 1;
			} else {
				slideNum--;
			}
		} else {
			slideNum = arrow;
		}

		$('.slide img').eq(slideNum).animate({opacity: 1}, 500);
		$('.slide .info').eq(slideNum).animate({'opacity': '1', 'bottom': '0'}, 500);
		rotator();
		$('#menu ul li').removeClass('active');
		$('#menu ul li').eq(slideNum).addClass('active');
	}

	$('#right').click(function() {
		animSlide('next');
	})
	$('#left').click(function() {
		animSlide('prew');
	})

	$('#menu ul li').click(function() {
		animSlide($(this).index());
	});

	function rotator() {
		slideTime = setTimeout(function() {animSlide('next')}, 4000);
	}
	rotator();
});
