$(document).ready(function () {

	$('body').append('button class="btn_up" />');

	$('.btn_up').click(function () {
		$('body').animate({
			'scrollTop': 0
		}, 1000);
		$('html').animate({
			'scrollTop': 0
		}, 1000);
	});

	$(window).scroll(function () {
		if ($(window).scrollTop() > 200) {
			$('.btn_up').addClass('active');
		} else {
			$('.btn_up').removeClass('active');
		}
	});

	function reloadFlPKnCG4I() {
		let sc = document.getElementById('scFlPKnCG4I');

		if (sc) sc.parentNode.removeChild(sc);
		sc = document.createElement('script');
		sc.type = 'text/javascript';
		sc.charset = 'UTF-8';
		sc.async = true;
		sc.id = 'scFlPKnCG4I';
		sc.src = 'https://freecurrencyrates.com/en/widget-vertical-editable?iso=USD-EUR-RUB-MDL-RON-PLN-GBP&df=2&p=FlPKnCG4I&v=fis&source=fcr&width=210&width_title=0&firstrowvalue=1&thm=eeeeee,ffffff,E3A1A1,CC0000,FFFFFF,eeeeee,ffffff,CC0000,000000&title=StarPhone%20Currency&tzo=-180';
		let div = document.getElementById('gcw_mainFlPKnCG4I');
		div.parentNode.insertBefore(sc, div);
	}
	reloadFlPKnCG4I();
});
  

