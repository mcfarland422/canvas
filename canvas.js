var canvas = document.querySelector('canvas')
  ;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

// Rectangle
// c.fillStyle = 'rgba(255, 0, 0, 0.5)';
// // start point x and y
// // c.fillRect( x, y, width, height)
// c.fillRect(100, 100, 100, 100);
// c.fillStyle = 'rgba(0, 0, 255, 0.5)';
// c.fillRect(400, 100, 100, 100);
// c.fillStyle = 'rgba(0, 255, 0, 0.5)';
// c.fillRect(300, 300, 100, 100);
//
// // Line
// c.beginPath();
// c.moveTo(50, 300);
// c.lineTo(300, 100);
// c.lineTo(400, 300);
// c.strokeStyle = "#fa34a3";
// c.stroke();
//
// // Arc / Circt
// // c.beginPath();
// // c.arc(300, 300, 30, 0, Math.PI * 2, false);
// // c.strokeStyle = 'blue';
// // c.stroke();
//
// for (var i=0; i<3; i++) {
//   var x = Math.random() * window.innerWidth;
//   var y = Math.random() * window.innerHeight;
//   c.beginPath();
//   c.arc(x, y, 30, 0, Math.PI * 2, false);
//   c.strokeStyle = 'blue';
//   c.stroke();
// }

function Circle(x, y) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;

  this.draw = function() {
    c.beginPath();
    c.arc(x, y, radius, 0, Math.PI * 2, false);
    c.strokeStyle = 'red';
    c.stroke();
  }

  this.update = function() {
    if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
      this.dx = -this.dx;
    }

    if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
      this.dy = -this.dy;
    }

    this.x += this.dx;
    this.y += this.dy;

    this.draw();
  }
}

// var circle = new Circle(200, 200);
var circleArray = [];

for (var i = 0; i < 100; i++) {
  var radius = 30;
  var x = Math.random() * innerWidth;
  var y = Math.random() * innerHeight;
  // dx is volocity
  var dx = (Math.random() - 0.5) *8;
  var dy = (Math.random() - 0.5) *8;
  circleArray.push(new Circle(x, y, dx, dy, radius));

}

console.log(circleArray);

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);

  for (var i=0; i < circleArray.length; i++) {
    circleArray[i].update();
  }

  circle.draw();

  // c.beginPath();
  // c.arc(x, y, radius, 0, Math.PI * 2, false);
  // c.strokeStyle = 'blue';
  // c.stroke();
  //
  // if (x + radius > innerWidth || x - radius < 0) {
  //   dx = -dx;
  // }
  // if (y + radius > innerHeight || y - radius < 0) {
  //   dy = -dy;
  // }
  //
  // x += dx;
  // y += dy;
}

animate();
