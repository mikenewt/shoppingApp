$(document).ready(function () {
	$('#add-items').keydown(function(event) {
		if (event.which == 13) {
			var item = $(this).val();
			$('<div><p id="item">' + item + '</p></div>').prependTo('.shopping-list').addClass('need');
			$('#add-items').val('');
		}
	});
	$()
})