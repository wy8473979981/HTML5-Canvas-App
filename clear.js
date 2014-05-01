
var clearButton = document.getElementById('clear');

clearCanvas = function(){
	context.beginPath();
	context.clearRect(0,0,canvas.width,canvas.height);
	context.closePath();
}

clearButton.addEventListener('click',clearCanvas);