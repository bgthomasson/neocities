
const patternSelect = document.querySelectorAll('[name="pattern]');

const storePattern = function (pattern) {
  localStorage.setItem("pattern", pattern);
};

const retrievePattern = function () {
  const activePattern = localStorage.getItem("pattern");
  patternSelect.forEach((patternOption) => {
      if (patternOption.id === activePattern) {
          patternOption.checked = true;
      } 
  });
  // fallback for no :has() support
  document.documentElement.className = activePattern;
};

patternSelect.forEach((patternOption) => {
  patternOption.addEventListener("click", () => {
      storePattern(patternOption.id);
      document.documentElement.className = patternOption.id;
  });
});

document.onload = retrievePattern(); 

