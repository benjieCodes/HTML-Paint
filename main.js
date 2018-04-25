// painting board
const canvas = document.querySelector("#paint");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// medium and context of the board
const ctx = canvas.getContext("2d");
ctx.strokeStyle = "#BADA55";
ctx.lineJoin = "round";
ctx.lineCap = "round";

// property to switch between drawing and not drawing
let isDrawing = false;
let lastX = 0;
let lastY = 0;

function draw(event) {
  if (!isDrawing) return; // stop the function from running when mouse isn't clicked
  console.log(event);

  ctx.beginPath();

  // start paint from
  ctx.moveTo(lastX, lastY);

  // goes to
  ctx.lineTo(event.offsetX, event.offsetY);
  ctx.stroke();
  [lastX, lastY] = [event.offsetX, event.offsetY];
}

canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mousedown", () => (isDrawing = true));
canvas.addEventListener("mouseup", () => (isDrawing = false));
canvas.addEventListener("mouseout", () => (isDrawing = false));
