/*
	Epilogue by TEMPLATED
	templated.co @templatedco
	Released for free under the Creative Commons Attribution 3.0 license (templated.co/license)
*/

(function($) {

	skel.breakpoints({
		xlarge: '(max-width: 1680px)',
		large: '(max-width: 1280px)',
		medium: '(max-width: 980px)',
		small: '(max-width: 736px)',
		xsmall: '(max-width: 480px)',
		xxsmall: '(max-width: 360px)'
	});

	$(function() {

		var	$window = $(window),
			$body = $('body');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				window.setTimeout(function() {
					$body.removeClass('is-loading');
				}, 100);
			});

		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// Prioritize "important" elements on medium.
			skel.on('+medium -medium', function() {
				$.prioritize(
					'.important\\28 medium\\29',
					skel.breakpoint('medium').active
				);
			});

		// Items.
			$('.item').each(function() {

				var $this = $(this),
					$header = $this.find('header'),
					$a = $header.find('a'),
					$img = $header.find('img');

				// Set background.
					$a.css('background-image', 'url(' + $img.attr('src') + ')');

				// Remove original image.
					$img.remove();

			});
			
		    $("#email").click(generate);

	});
	
	function generate() {
		setTimeout(function() {
			var text, text2, text3;
			text = "cihsgiwn#a.os8-gd*j2msd(uiwa2f$si[[nfg;w9k#2.drhtwfthyht8h3d1542aug85632fru_enp@j59tp,m.rpg2rg5ohpfkeonk@ps.@gs"; // chia-man.hung@
			text2 = "e.n3igg9%.y^qzots-odxe9b.@r.ch94%s*ahs=sobmecnpw@8"; // eng.ox.ac
			text2b = "c.seg.qepoqwegxqwdtj.5jt9doa5k30gj6c" // cs.ox.ac
			text3 = ".iuaqkhu"; // .uk
			$("#generated").text(process(text)+process(text2b)+process(text3));
			$("#generated").fadeIn(500);
		}, 100);
	}

	function process(str) {
		var i = 0;
		var s = 2;
		var res = "";
		while (i < str.length) {
			res += str.charAt(i);
			i += s; s++;
		}
		return res;
	}

})(jQuery);