const btn = document.querySelector(".btn-theme");
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

btn.addEventListener("click", function() {
  if (prefersDarkScheme.matches) {
    document.body.classList.toggle("light");
  } else {
    document.body.classList.toggle("dark");
  }
});

/* borrowed from CSS Tricks, but got bugs from local storage and it seems like a bother, so simple version. */