// painting board
const canvas = document.querySelector("#paint");
// sets size according to browser window
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// medium and context of the board
const ctx = canvas.getContext("2d");
ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.lineWidth = 5;

// property to switch between drawing and not drawing
let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;

function draw(event) {
  if (!isDrawing) return; // stop the function from running when mouse isn't clicked
  console.log(event);

  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  ctx.beginPath();

  // start paint from
  ctx.moveTo(lastX, lastY);

  // goes to
  ctx.lineTo(event.offsetX, event.offsetY);
  ctx.stroke();
  [lastX, lastY] = [event.offsetX, event.offsetY];
  hue++;
}

canvas.addEventListener("mousedown", event => {
  isDrawing = true;
  [lastX, lastY] = [event.offsetX, event.offsetY];
});
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", () => (isDrawing = false));
canvas.addEventListener("mouseout", () => (isDrawing = false));
