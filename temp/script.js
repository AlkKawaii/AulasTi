const corpo = document.getElementsByTagName('body');

function fade() {
	corpo[0].style.opacity = 0;
	corpo[0].style.display = 'none';
	// setTimeout(() => {
	// 	window.location.replace('ajaj.html');
	// }, 1000);
}

window.onload = () => {
	corpo[0].style.opacity = 1;
};
