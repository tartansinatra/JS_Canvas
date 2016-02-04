window.onload = function(){
  console.log('App started');
  var canvas = document.getElementById('main');
  var context = canvas.getContext('2d');

  // // PROPERTIES OF THE RECTANGLE DEFINED IN INDEX.HTML
  // context.fillStyle = "purple";
  // context.fillRect(10, 10, 50, 50);

  // // DRAW A LINE
  // context.beginPath();
  // context.moveTo(100,100);
  // context.lineTo(100,150);
  // context.stroke();

  // var drawCircle = function(x, y){  // FULL-CIRCLE
  // context.beginPath();
  x = event.x;
  y = event.y;
  // context.arc(x, y, radius, startAngle, endAngle, anticlockwise)
  context.arc(x, y, 20, 0, Math.PI*2, true);
  context.stroke();
  context.fill();
  // }

  // // SEMI-CIRCLE - USES THE SAME VALUES AS CIRCLE, JUST DOESN'T REPEAT THE PI numerable.
  // // context.arc(x, y, radius, startAngle, endAngle, anticlockwise)
  // context.beginPath();
  // context.arc(300, 100, 20, 0, Math.PI, true);
  // context.stroke();


  // canvas.onclick = function(){   // This is the listener being added for the onclick.
  //   console.log('clicked', event);  
  //   drawCircle(event.x, event.y);  // This will draw the circle as per function (line 16)
  // }

  // DRAW A LINE

var previousX = 300;
var previousY = 100;
var lineLength = 10;

// ETCH A SKETCH

var drawRight = function(x, y){
  var newX = previousX +lineLength;
  var newY = previousY;
  

  context.beginPath();
  context.moveTo(previousX, previousY);
  context.lineTo(newX, newY);
  context.stroke();

  previousX = newX;
  previousY = newY;
}

var drawLeft = function(x, y){
  var newX = previousX -lineLength
  var newY = previousY
  

  context.beginPath();
  context.moveTo(previousX, previousY);
  context.lineTo(newX, newY);
  context.stroke();

  previousX = newX;
  previousY = newY;
}


var drawUp = function(x, y){
  var newX = previousX 
  var newY = previousY -lineLength
  

  context.beginPath();
  context.moveTo(previousX, previousY);
  context.lineTo(newX, newY);
  context.stroke();

  previousX = newX;
  previousY = newY;
}

var drawDown = function(x, y){
  var newX = previousX 
  var newY = previousY +lineLength
  

  context.beginPath();
  context.moveTo(previousX, previousY);
  context.lineTo(newX, newY);
  context.stroke();

  previousX = newX;
  previousY = newY;
}


  var rightButton = document.getElementById('right');
  rightButton.onclick = drawRight;

  var leftButton = document.getElementById('left');
  leftButton.onclick = drawLeft;

  var upButton = document.getElementById('up');
  upButton.onclick = drawUp;

  var downButton = document.getElementById('down');
  downButton.onclick = drawDown;

  var clearButton = document.getElementById('clear')
  clearButton.onclick = function(){
    context.clearRect(0, 0, canvas.width, canvas.height);
    previousX = 300;
    previousY = 100;
  }

  var colourPicker = document.getElementById('colour');
    colourPicker.onchange = function(){
      context.strokeStyle = colourPicker.value;
    }


    var prevDragX = 0;
    var prevDragY = 0;
    
    canvas.onmousedown = function(event){
      prevDragX = event.x;
      prevDragY = event.y;
      canvas.onmousemove = function(event){
        context.beginPath();
        context.moveTo(prevDragX, prevDragY);
        context.lineTo(event.x, event.y);
        context.stroke();
        context.fill();
        prevDragX = event.x;
        prevDragY = event.y;
      }
    }

    canvas.onmouseup = function(event){
      canvas.onmousemove = null;
      previousX = event.x;
      previousY = event.y;
    }

  var drawCircle = function(x, y){
    context.beginPath();
    context.arc(previousX, previousY, 20, 0, Math.PI*2, false);
    context.stroke();

  }
  var circleButton = document.getElementById('circle');
  circleButton.onclick = drawCircle;

}
