$(document).ready(function () {
	$('#add-items').keydown(function(event) {
		if (event.which == 13) {
			var item = $(this).val();
			$('<div>' + item + '</div>').prependTo('.shopping-list').addClass('need');
			$('#add-items').val('');
		}
	});
})