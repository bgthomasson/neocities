//webdraw.js
// properly this should be a function with if/else fallback BUT 
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const brushSize = document.getElementById('brush-size');
const colorPicker =	document.getElementById('color-picker');
const clearCanvas =	document.getElementById('clear-canvas');

let isDrawing = false;

canvas.width =	1024;
canvas.height =	768;

ctx.lineWidth = 5;
ctx.lineCap = 'round';
ctx.strokeStyle = 'black';

function startPosition(e) {
	isDrawing = true;
	draw(e);
}
function endPosition() {
	isDrawing = false;
	ctx.beginPath();
}

//Function to draw on the Canvas
function draw(e) {
	if (!isDrawing) return;
	ctx.strokeStyle = colorPicker.value; 
	ctx.lineWidth = brushSize.value; 
	ctx.lineTo(
		e.clientX - canvas.offsetLeft,
		e.clientY - canvas.offsetTop
	);
	ctx.stroke();
	ctx.beginPath();
	ctx.moveTo(
		e.clientX - canvas.offsetLeft,
		e.clientY - canvas.offsetTop
	);
}

//event listener for different mouse actions
canvas.addEventListener('mousedown', startPosition);
canvas.addEventListener('mouseup', endPosition);
canvas.addEventListener('mousemove', draw);

clearCanvas.addEventListener('click', () => {
	ctx.clearRect(
		0, 0, canvas.width, canvas.height
	);
});

brushSize.addEventListener('input', () => {
	ctx.lineWidth = brushSize.value;
	updateBrushSizeLabel(brushSize.value);
});

function updateBrushSizeLabel(size) {
	const brushSizeLabel = document.getElementById('brush-size-label');
	if (brushSizeLabel) {
		brushSizeLabel.textContent = `Brush Size: ${size}`;
	}
}

const penButton = document.getElementById('pen');
const eraserButton = document.getElementById('eraser');

function activatePen() {
	ctx.globalCompositeOperation = 'source-over';
	ctx.strokeStyle = colorPicker.value;
}

function activateEraser() {
	ctx.globalCompositeOperation = 'destination-out';
	ctx.strokeStyle = 'rgba(0, 0, 0, 0)';
}

penButton
	.addEventListener('click', () => {
	activatePen();
});

eraserButton
	.addEventListener('click', () => {
	activateEraser();
});
