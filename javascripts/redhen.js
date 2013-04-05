$(function() {
	
  $('#toggle a').bind('click', function() {
  	$('ul.primary-menu').slideToggle('400');
    event.preventDefault();
  });

  var ww = document.body.clientWidth;

  if (ww < 800) {
  	$('ul.primary-menu a').bind('click', function() {
  		$('ul.primary-menu').slideToggle('400');
  	});
  } else {

  }

});