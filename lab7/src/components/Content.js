import React from 'react';

let click = 0;
function changeColor() {
  if (click % 2 === 0) {
    let el1 = document.getElementById('birth_place');
    el1.style.background = 'purple';
    el1.style.color = 'white';
    click++;
  } else {
    let el1 = document.getElementById('birth_place');
    el1.style.background = 'red';
    el1.style.color = 'black';
    click++;
  }
}

let click2 = 0;
function changeColor2() {
  if (click2 % 2 === 0) {
    let el2 = document.querySelector('#education');
    el2.style.background = 'blue';
    el2.style.color = 'white';
    click2++;
  } else {
    let el2 = document.querySelector('#education');
    el2.style.background = 'green';
    el2.style.color = 'black';
    click2++;
  }
}

class Content extends React.Component {
  render() {
    return (
      <div>
        <p id="birth_place" onClick={changeColor}>
          Місце народження: 13 лютого 2002 року, м. Суми.
        </p>
        <p id="education" onClick={changeColor2}>
          Освіта: Загально-освiтня школа номер 1, смт. Вороніж
        </p>
        <p>Хобі:</p>
        <ul>
          <li>Cпорт</li>
          <li>Прогулки из собакой</li>
          <li>Плавання</li>
        </ul>
        <p>Улюблені фільми:</p>
        <ol>
          <li>Достукатись до небес</li>
          <li>Леон</li>
          <li>Сім душ</li>
          <li>Фокус</li>
        </ol>
        <p>
          Львів — місто в західній частині України. Історичний центр Львова
          занесено до списку Світової спадщини ЮНЕСКО. У місті знаходиться
          найбільша кількість пам'яток архітектури в Україні. У 2009 році Львову
          надано звання Культурної столиці України. Місто періодично посідає
          чільні місця в рейтингах туристичної та інвестиційної привабливості.
        </p>
      </div>
    );
  }
}
export default Content;
