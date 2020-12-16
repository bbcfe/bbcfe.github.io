

setInterval(() => {
	var modal = document.getElementsByClassName("modal")[0];
	var button = document.getElementById("modalBtn");

	var span = document.getElementsByClassName("close")[0];
	span.onclick = function(){
		modal.style.display = "none";
	}

	button.onclick = function() {
		modal.style.display = "block";
	}
}, 50);


