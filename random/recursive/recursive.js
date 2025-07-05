let el = document.getElementById("button");
el.style.position = "absolute";
let pos = 0;
let direction = 1;
let moving = false;
const max = window.innerWidth / 2;
el.addEventListener("click", () => {
  moving = true;
  changepos();
});

function changepos() {
  pos = pos + 3 * direction;
  el.style.left = pos + "px";
  if (pos >= max || pos <= 0) {
    direction = direction * -1;
  }
  requestAnimationFrame(changepos);
}
