document.addEventListener("keyup", k => {
  console.log("key event", k);
});
document.addEventListener("mousedown", k => {
  console.log("moust event", k);
});
document.addEventListener("deviceorientation", k => {
  console.log("device orientation event", k);
});
document.addEventListener("click", k => {
  console.log("click event", k);
});
document.addEventListener("touchend", k => {
  console.log("touchend event", k);
});
