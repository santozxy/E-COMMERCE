var radio = document.querySelector(".manual-btn");
var cont = 1;

document.getElementById("radio1").checked = true;

setInterval(() => {
  proxImg();
}, 5000);

function proxImg() {
  cont++;
  if (cont > 3) {
    cont = 1;
  }
  document.getElementById("radio" + cont).checked = true;
}

document.addEventListener('DOMContentLoaded', function() {
    const colorsButton = document.querySelector('.colors');
    const icon = colorsButton.querySelector('i');
    let isLightMode = false;

    colorsButton.addEventListener('click', function() {
        isLightMode = !isLightMode;
        const newBgColor = isLightMode ? '#f2f2f2' : '#131313';
        const newTertiaryColor = isLightMode ? '#000' : '#fff';
        const newIconClass = isLightMode ? 'fa-moon' : 'fa-sun';

        document.documentElement.style.setProperty('--bg', newBgColor);
        document.documentElement.style.setProperty('--terciary', newTertiaryColor);
        icon.classList.remove(isLightMode ? 'fa-sun' : 'fa-moon');
        icon.classList.add(newIconClass);
    });
});