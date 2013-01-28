


$('button').click( function(evt){

	var text = $(this).text().trim();
	var elem = document.body;
	elem.style.backgroundColor = text;

});