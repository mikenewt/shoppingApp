$(document).ready(function () {
	// Add new items by taking val of input on keydown of the enter button and prepend to the shopping list div
	$('#add-items').keydown(function(event) {
		if (event.which == 13) {
			// get value from input
			var value = $(this).val();
			
			// need error check for empty value

			// create new span with val = value
			// create invisible input with val = value for editing
			var new_item = $(
				"<div>" +
				"<span id=\"item\">" + value + "</span>" +
				"<input type=\"text\" val=\"" + value + "\">" +
				"</div>");
			new_item.prependTo('.shopping-list').addClass('need');
			
			// reset value for next item
			$(this).val('');
		}
	});
	$('.edit').on("mouseenter mouseleave", ".need", function() { $(this).find(".options").toggle(); });
	$('.edit').on('click', editItem);
	// $('#check').on('click', checkItem);
	// $('#delete').on('click', deleteItem);
});

function editItem(event) {

	// Called when the pencil icon is clicked next to shopping list item
	function onClick() {

		var span = $(this).find('span');
		var input = $(this).find('input[type=text]');

		span.hide();
		input.show().focus();
	};

	// Receives new input and makes changes to span
	function handleEdit() {

		var input = $(this);
		var span = input.siblings("span");

		input.hide();
		span.text(input.val());
		span.show();
	};
}
