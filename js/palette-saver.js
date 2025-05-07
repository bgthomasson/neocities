//palette-saver.js
const colorPalettes = document.querySelectorAll('[name="palette"]');

// store palette
const storePalette = function (palette) {
  localStorage.setItem("palette", palette);
};

// set palette when visitor returns
const setPalette = function () {
  const activePalette = localStorage.getItem("palette");
  colorPalettes.forEach((paletteOption) => {
    if (paletteOption.id === activePalette) {
      paletteOption.checked = true;
    }
  });
  // fallback for no :has() support
  document.documentElement.className = activePalette;
};

colorPalettes.forEach((paletteOption) => {
  paletteOption.addEventListener("click", () => {
    storePalette(paletteOption.id);
    // fallback for no :has() support
    document.documentElement.className = paletteOption.id;
  });
});

document.onload = setPalette();
