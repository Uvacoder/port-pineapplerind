function lerp(start, end, amt) {
  return (1 - amt) * start + amt * end;
}
function quadraticEaseInOut(x) {
  return x < 0.5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2;
}
function exponentialEaseInOut(x) {
  return x === 0
    ? 0
    : x === 1
      ? 1
      : x < 0.5 ? Math.pow(2, 20 * x - 10) / 2
        : (2 - Math.pow(2, -20 * x + 10)) / 2;
}
function linear(x) {
  return x
}
if (localStorage.getItem('bezierBannerState')) document.querySelector('.banner').remove()
var points = [
  [731, 551],
  [338, 551],
  [731, 214],
  [338, 214]
]

var playing = true
let canv = document.getElementById("canvas"),
  ctx = canv.getContext("2d"),
  canv2 = document.getElementById("canvas2"),
  ctx2 = canv2.getContext("2d"),
  background = "#000020",
  t = 0, easedT, inter;


(canv.height = window.innerHeight), (canv.width = window.innerWidth);
(canv2.height = window.innerHeight), (canv2.width = window.innerWidth);
onresize = () => {
  (canv.height = window.innerHeight), (canv.width = window.innerWidth);
  (canv2.height = window.innerHeight), (canv2.width = window.innerWidth);
}
class Point {
  constructor(x, y, radius) {
    this.x = x;
    this.y = y;
    point(x, y, radius);
  }
}

function point(x, y, rad, col) {

  ctx.beginPath();

  ctx.arc(x, y, rad, 0, 2 * Math.PI, true);
  ctx.closePath();
  if (!col) ctx.fillStyle = "#ffffff";
  else ctx.fillStyle = col
  ctx.fill();
}
function line(startx, starty, finishx, finishy) {
  ctx.beginPath();
  ctx.strokeStyle = "white";
  ctx.moveTo(startx, starty, 0);
  ctx.lineTo(finishx, finishy);
  ctx.stroke(); // Bottom side line
}
function stp() {
  clearInterval(inter);
  if (t >= 1) t = 0, playing = false, evaluatePlaying()
}
strt(true)
function strt(refresh) {
  clearCanvas()
  if (!refresh) clearTrail()
  inter = setInterval(function () {
    advance(exponentialEaseInOut);
  }, 10);

}
function evaluatePlaying() {
  if (playing == true) strt(true), document.getElementById('playBtn').innerHTML = 'Stop';
  else stp(), document.getElementById('playBtn').innerHTML = 'Play';
}
function advance(ease) {
  clearCanvas();
  if (t >= 1) stp();
  t = t + 0.0015;
  easedT = ease(t);

  new Point(points[0][0], points[0][1], 10, 'coral'); // Anchor dot
  new Point(points[1][0], points[1][1], 10, 'magenta'); // Right side anchor dot
  new Point(points[2][0], points[2][1], 10, 'dodgerblue'); // bottom side anchor dot
  new Point(points[3][0], points[3][1], 10, 'mint'); // bottom right side anchor dot

  line(points[2][0], points[2][1], points[3][0], points[3][1]);
  line(points[0][0], points[0][1], points[2][0], points[2][1]);
  line(points[1][0], points[1][1], points[3][0], points[3][1]);

  let topMiddlePointX = lerp(
    points[0][0], points[2][0], easedT
  )
  let topMiddlePointY = lerp(
    points[0][1], points[2][1], easedT
  )
  new Point(topMiddlePointX, topMiddlePointY, 5)

  let middleBottomPointX = lerp(
    points[2][0], points[3][0], easedT
  )
  let middleBottomPointY = lerp(
    points[2][1], points[3][1], easedT
  )
  new Point(middleBottomPointX, middleBottomPointY, 5)

  let bottomRightPointX = lerp(
    points[3][0], points[1][0], easedT
  )
  let bottomRightPointY = lerp(
    points[3][1], points[1][1], easedT
  )
  new Point(bottomRightPointX, bottomRightPointY, 5)

  line(
    topMiddlePointX, topMiddlePointY,
    middleBottomPointX, middleBottomPointY
  )
  line(
    middleBottomPointX, middleBottomPointY,
    bottomRightPointX, bottomRightPointY
  )

  let midpoint1X = lerp(
    topMiddlePointX, middleBottomPointX, easedT
  )
  let midpoint1Y = lerp(
    topMiddlePointY, middleBottomPointY, easedT
  )
  new Point(midpoint1X, midpoint1Y, 5)

  let midpoint2X = lerp(
    middleBottomPointX, bottomRightPointX, easedT
  )
  let midpoint2Y = lerp(
    middleBottomPointY, bottomRightPointY, easedT
  )
  new Point(midpoint2X, midpoint2Y, 5)
  line(
    midpoint1X, midpoint1Y,
    midpoint2X, midpoint2Y
  )
  let finalMidPointX = lerp(
    midpoint1X,
    midpoint2X,
    easedT
  )
  let finalMidPointY = lerp(
    midpoint1Y,
    midpoint2Y,
    easedT
  )
  new Point(finalMidPointX, finalMidPointY, 10)
  /*
  Trail
  */
  ctx2.beginPath();
  ctx2.fillStyle = "#ffffff";
  ctx2.arc(finalMidPointX, finalMidPointY, 10, 0, 2 * Math.PI, true);
  ctx2.closePath();
  ctx2.fill();
}

function clearCanvas() {
  ctx.clearRect(0, 0, canv.width, canv.height);

}
function clearTrail() {
  ctx2.clearRect(0, 0, canv.width, canv.height);
}


let mouseIsDown = false
let draggingPoint = false
onmousedown = () => {
  mouseIsDown = true
  console.log(mouseIsDown)
}

onmouseup = () => {
  mouseIsDown = false
  dragging = -1
  console.log(mouseIsDown)
}

onmousemove = windowEvent => {
  if (mouseIsDown == true) {
    var x = windowEvent.clientX
    var y = windowEvent.clientY
    for (let i = 0; i < points.length; i++) {
      if (
        (
          (
            (x >= points[i][0] && x <= points[i][0] + 30) || (x <= points[i][0] && x >= points[i][0] - 30))
            &&
            ((y >= points[i][1] && y <= points[i][1] + 30) || (y <= points[i][1] && y >= points[i][1] - 30))
          ) || dragging == i) {
        dragging = i
        points[i][0] = x
        points[i][1] = y
        clearCanvas();
        new Point(points[0][0], points[0][1], 10, 'coral'); // Anchor dot
        new Point(points[1][0], points[1][1], 10, 'magenta'); // Right side anchor dot
        new Point(points[2][0], points[2][1], 10, 'dodgerblue'); // bottom side anchor dot
        new Point(points[3][0], points[3][1], 10, 'mint'); // bottom right side anchor dot

        line(points[2][0], points[2][1], points[3][0], points[3][1]);
        line(points[0][0], points[0][1], points[2][0], points[2][1]);
        line(points[1][0], points[1][1], points[3][0], points[3][1]);
        break;
      }
    }
  }
}