const start = document.getElementById("start");
const stop = document.getElementById("stop");

let intervalId = null;

function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

start.addEventListener("click", () => {
  if (intervalId !== null) return;

  intervalId = setInterval(() => {
    document.body.style.backgroundColor = getRandomColor();
  }, 1000);
});

stop.addEventListener("click", () => {
  clearInterval(intervalId);
  intervalId = null;
});
