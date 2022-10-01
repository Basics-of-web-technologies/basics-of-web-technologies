const first = document.getElementById('first');
const second = document.querySelector('.second');

const changeColor = (el) => {
  if (el.style.backgroundColor == 'red') {
    el.style.color = 'white';
    el.style.backgroundColor = 'blue';
  } else {
    el.style.backgroundColor = 'red';
    el.style.color = 'black';
  }
};
first.addEventListener('click', () => changeColor(first));

const changeColor2 = (el) => {
  if (el.style.backgroundColor == 'green') {
    el.style.color = 'white';
    el.style.backgroundColor = 'purple';
  } else {
    el.style.backgroundColor = 'green';
    el.style.color = 'black';
  }
};

second.addEventListener('click', () => changeColor2(second));

const img = document.getElementById('img');

function makeBig() {
  img.style.width = '35%';
}
function makeSmall() {
  img.style.width = '15%';
}
function deleteImage() {
  document.getElementById('img').parentNode.removeChild(img);
}
btn.onclick = function () {
  if (!document.getElementById('img')) {
    var image = document.createElement('img');
    image.id = 'img';
    image.src = 'Lviv_banner_1.jpg';
    document.body.appendChild(image);
  }
};
