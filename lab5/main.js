function validFunc() {
  const reName =
    /([А-Яа-яёЁЇїІіЄєҐґ]) ([А-Яа-яёЁЇїІіЄєҐґ]{0,1})\.([А-Яа-яёЁЇїІіЄєҐґ]{0,1})\./;
  const name = document.getElementById('name').value;
  const validName = reName.test(name);
  if (validName) {
    document.getElementById('name').style.border = 'solid green';
    document.getElementById('nameValid').innerHTML = `ПІБ: ${name}`;
  } else {
    document.getElementById('name').style.border = 'solid red';
    document.getElementById('nameValid').innerHTML = 'Невірне ПІБ';
  }

  const reGrp = /[А-Яа-яЁёЇїІіЄєҐґ'][А-Яа-яЁёЇїІіЄєҐґ']+\-+[0-9][0-9]/;
  const group = document.getElementById('group').value;
  const validGroup = reGrp.test(group);
  if (validGroup) {
    document.getElementById('group').style.border = 'solid green';
    document.getElementById('groupValid').innerHTML = `Група: ${group}`;
  } else {
    document.getElementById('group').style.border = 'solid red';
    document.getElementById('groupValid').innerHTML = 'Невірна група';
  }

  const reCard = /[A-Z][A-Z]+\s+\№\d{6}/;
  const card = document.getElementById('card').value;
  const validCard = reCard.test(card);
  if (validCard) {
    document.getElementById('card').style.border = 'solid green';
    document.getElementById('cardValid').innerHTML = `Номер картки: ${card}`;
  } else {
    document.getElementById('card').style.border = 'solid red';
    document.getElementById('cardValid').innerHTML = 'Невірна картка';
  }

  const reDate =
    /(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d/;
  const date = document.getElementById('date').value;
  const validDate = reDate.test(date);
  if (validDate) {
    document.getElementById('date').style.border = 'solid green';
    document.getElementById('dateValid').innerHTML = `Дата народження: ${date}`;
  } else {
    document.getElementById('date').style.border = 'solid red';
    document.getElementById('dateValid').innerHTML = 'Невірна дата народження';
  }

  const reEmail = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
  const email = document.getElementById('email').value;
  const validEmail = reEmail.test(email);
  if (validEmail) {
    document.getElementById('email').style.border = 'solid green';
    document.getElementById('emailValid').innerHTML = `Пошта: ${email}`;
  } else {
    document.getElementById('email').style.border = 'solid red';
    document.getElementById('emailValid').innerHTML = 'Невалідний адрес пошти';
  }
}

const first = document.getElementById('eight');
const colorInput = document.getElementById('colorInput');

function getRandom(min, max) {
  return Math.ceil(Math.random() * (max - min) + min);
}

first.addEventListener('mouseover', function () {
  eight.style.backgroundColor = `rgb(${getRandom(0, 255)}, ${getRandom(
    0,
    255
  )}, ${getRandom(0, 255)})`;
});

first.addEventListener('click', function () {
  eight.style.backgroundColor = colorInput.value;
});

const changes = [
  'two',
  'eight',
  '14',
  '20',
  '26',
  '32',
  'fourth',
  'tenth',
  '16',
  '22',
  '28',
  '34',
  'sixth',
  'twelfth',
  '18',
  '24',
  '30',
  '36',
];

first.addEventListener('dblclick', function () {
  for (const change of changes) {
    document.getElementById(change).style.backgroundColor = colorInput.value;
  }
});
