var landing = {
	init: function() {
		this.getPrice();
		this.formSubmit();
	}, 
	getPrice: function() {
		$('.new__price').each(function () {
			var p = parseInt($(this).text());
	                var currency = $(this).text().replace(/[0-9]/g, '');
			p = p * 100 / 50;
			p2 = Math.ceil(p);
			$(this).closest('.price').find('.old__price').text(p2 + ' ' + currency);
		});

	},
	formSubmit: function () {

		var size;

		$(".card__left .header__order-btn").click(function(event) {
			size = $(this).closest('.card__left').find('.btn__block.active .card__size-btn').text();
			console.log(size);
		});

		$(".order-form").submit(function(event) {

			var id = $(this).closest('.card__left').find('.card__color.active').data('id');
			var name = $(this).closest('.card__left').find('.card__title').text();
			if (id !== undefined) {
				$(this).find('input[name=products]').val(id);
			}

			if ( size !== undefined ) {
				$(this).find('input[name=comment]').val('Размер: ' + size + " " + 'Name: ' + name);
			}
		});
	}
}

$(document).ready(function() {
	landing.init();
});