
$(document).ready(function() {
	console.log('Function loaded');
	$('.menu-Toggle').click(function() {
		$('.menu-Toggle').toggleClass('active')
		$('.menu').toggleClass('active')
	})
});