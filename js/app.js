$(document).ready(function () {
	// Add new items by taking val of input on keydown of the enter button and prepend to the shopping list div
	$('#add-items').keydown(addItem);

	$(".edit").on("click", "button", editStart);
	// $('#check').on('click', checkItem);
	// $('#delete').on('click', deleteItem);
});

function addItem(event) {
	var input = $('#add-items');

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
			new_item.prependTo('.shopping-list').addClass('need').attr('id','items');
			var options = $(
	            "<div class=\"options\">" +
	            "<a href=\"#\" class=\"button\"><span class=\"edit\"></span></a>" +
                "<a href=\"#\" class=\"button\"><span class=\"check\"></span></a>" +
                "<a href=\"#\" class=\"button\"><span class=\"delete\"></span></a>" +
                "</div>");
			options.appendTo('#items');
			
			// reset value for next item
			$(this).val('');
	};
}

// Called when the pencil icon is clicked next to shopping list item
function editStart() {


	var span = $(this).closest('.need')
	var input = $(this).find('input[type=text]');

	span.hide();
	input.show().focus();
}

// Receives new input and makes changes to span
function editFinish() {

	var input = $(this);
	var span = input.siblings("span");

	input.hide();
	span.text(input.val());
	span.show();
}
