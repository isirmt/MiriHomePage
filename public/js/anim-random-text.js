function AnimTextRandomControl() {
	$('.anim-text-random').each(function () {
		var elemPos = $(this).offset().top - 50;
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight) {
			$(this).addClass("anim-text-random-appear");

		} else {
			$(this).removeClass("anim-text-random-appear");
		}
	});
}

$(window).scroll(function () {
	AnimTextRandomControl();
});

$(window).on('load', function () {
	//spanタグを追加する
	var element = $(".anim-text-random");
	element.each(function () {
		var text = $(this).text();
		var insert_text = '';
		text.split('').forEach(function (t) {
			insert_text += '<span>' + t + '</span>';
		});
		$(this).html(insert_text);
	});

	AnimTextRandomControl();
});