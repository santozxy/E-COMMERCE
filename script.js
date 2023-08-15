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
    const button = document.querySelector('.btn-color');
    const icon = button.querySelector('i');
    let isLightMode = false;

    button.addEventListener('click', function() {
        isLightMode = !isLightMode;
        const newBgColor = isLightMode ? '#f4f4f4' : '#131313';
        const newTertiaryColor = isLightMode ? '#000' : '#fff';
        const newIconClass = isLightMode ? 'fa-moon' : 'fa-sun';

        document.documentElement.style.setProperty('--bg', newBgColor);
        document.documentElement.style.setProperty('--terciary', newTertiaryColor);
        icon.classList.remove(isLightMode ? 'fa-sun' : 'fa-moon');
        icon.classList.add(newIconClass);
    });
});


function openSideBar(){
  document.getElementById("sidebar").style.visibility = "visible"
}

function closeSideBar(){
  document.getElementById("sidebar").style.visibility = "hidden"
}



