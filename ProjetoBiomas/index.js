let pos = { x: 0, y: 0 };
let lastPos = { x: 0, y: 0 };
let rotation = { x: 0, y: 0 };
let dragging = false;

const draggable = document.getElementById('main');
const cube = document.getElementById('cube');
const cubeStyles = getComputedStyle(cube);

draggable.addEventListener('mousedown', ratoDown);
draggable.addEventListener('mousemove', ratoMove);
draggable.addEventListener('mouseup', ratoUp);

document.oncontextmenu = (e) => {
	e.preventDefault();
};

function ratoDown(e) {
	dragging = true;
	lastPos.x = Math.round(e.clientX);
	lastPos.y = Math.round(e.clientY);
	cube.style.cursor = 'grabbing';
}

function ratoUp(e) {
	dragging = false;
	cube.style.cursor = 'grab';
}

function ratoMove(e) {
	if (dragging) {
		let deltaX = Math.round(e.clientX) - lastPos.x,
			deltaY = Math.round(e.clientY) - lastPos.y;

		lastPos.x = Math.round(e.clientX);
		lastPos.y = Math.round(e.clientY);

		rotation.x -= deltaY * 0.5;
		rotation.y += deltaX * 0.5;

		updateCube();
	}
}

function updateCube() {
	cube.style.transform = `rotateX(${rotation.x}deg)
	rotateY(${rotation.y}deg)`;
}
