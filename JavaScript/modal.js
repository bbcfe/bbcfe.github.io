var modal = document.getElementsByClassName("modal")[0];

setInterval(() => {
$('head').append('<link rel="stylesheet" href="/CSS/modal.css">');
// $('body').append('<div id="myModal"></div>');
var button = document.getElementById("modalBtn");

var span = document.getElementsByClassName("close")[0];
span.onclick = function(){
	modal.style.display = "none";
}

button.onclick = function() {
	modal.style.display = "block";
}
}, 20);


