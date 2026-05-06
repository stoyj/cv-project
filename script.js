document.addEventListener("DOMContentLoaded", function () {
  const skillFills = document.querySelectorAll(".skill-fill");
  skillFills.forEach(function (fill) {
    const width = fill.getAttribute("data-width");
    fill.style.width = width + "%";
  });
});
