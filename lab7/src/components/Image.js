import React from 'react';

function addImage() {
  let img = document.getElementById('img');
  img.innerHTML += `
  <img
  id="image"
  src="https://blog.airbaltic.com/wp-content/uploads/2020/01/Lviv.jpg"
  width="800"
  height="550"
  alt="Amsterdam"
/>
  `;
}

function deleteImage() {
  let img = document.getElementById('img');
  img.innerHTML = '<p></p>';
}

function biggerImage() {
  let myImg = document.getElementById('image');
  let currWidth = myImg.clientWidth;
  let currHeight = myImg.clientHeight;
  if (currWidth >= 1000) {
    alert('You have reached the maximum!');
  } else {
    myImg.style.width = currWidth + 20 + 'px';
    myImg.style.height = currHeight + 20 + 'px';
  }
}

function smallerImage() {
  let myImg2 = document.getElementById('image');
  let currWidth2 = myImg2.clientWidth;
  let currHeight2 = myImg2.clientHeight;
  if (currHeight2 <= 160) {
    alert('You have reached the minimum!');
  } else {
    myImg2.style.width = currWidth2 - 20 + 'px';
    myImg2.style.height = currHeight2 - 20 + 'px';
  }
}

function Image() {
  return (
    <div>
      <div id="img"></div>
      <p>
        <button onClick={addImage}>Додати</button>
        <button onClick={biggerImage}>Збільшити</button>
        <button onClick={smallerImage}>Зменшити</button>
        <button onClick={deleteImage}>Видалити</button>
      </p>
    </div>
  );
}
export default Image;
