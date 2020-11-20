
$(function() {
	var video = document.getElementById('video');
  
	if (document.body.clientWidth >= 940) {
	  video.setAttribute('autoplay', true);
	  video.classList.remove('hide');
	}
  
	$(window).resize(function() {
	  if (document.body.clientWidth >= 940) {
		video.classList.remove('hide')
		video.play();
		video.setAttribute('autoplay', true);
	  } else {
		video.classList.add('hide');
		video.removeAttribute('autoplay');
		video.pause();
	  }
	});
  })