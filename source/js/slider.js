var buttonBefore = document.querySelector(".example__before");
var buttonAfter = document.querySelector(".example__after");
var progress = document.querySelector(".example__image-wrapper");

buttonBefore.addEventListener("click", function() {
  if (progress.classList.contains("example__image-wrapper--show")) {
  progress.classList.remove("example__image-wrapper--show");
}
});

buttonAfter.addEventListener('click', function () {
if (!progress.classList.contains("example__image-wrapper--show")) {
  progress.classList.add("example__image-wrapper--show");
}
});
