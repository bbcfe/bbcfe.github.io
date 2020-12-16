$('head').append('<link rel="stylesheet" href="/CSS/modal.css">');
var modal = document.getElementsByClassName("modal")[0];

modal.style.display = "block";

var span = document.getElementsByClassName("close")[0];
span.onclick = function(){
	modal.style.display = "none";
}