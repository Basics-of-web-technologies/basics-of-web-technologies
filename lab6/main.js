'use strict';
document
  .querySelector('#show')
  .addEventListener('click', () => showFromFile('export.json'));
document
  .querySelector('#download')
  .addEventListener('click', () => showFromServer(5));

let cards = document.querySelector('#cards');
let status_bar = document.querySelector('#download-status');

function buildCards(profile) {
  let tag = document.createElement('div');
  tag.classList.add('card');

  let tag_inside = document.createElement('div');
  tag_inside.classList.add('profile-info');

  let img = new Image();
  img.src = profile.results[0].picture.large;
  img.alt = 'profile-picture';
  img.classList.add('picture');

  console.log({ name: profile.results[0].name });

  let name = document.createElement('p');
  const { title, first, last } = profile.results[0].name;
  name.innerText = 'Name: ' + title + ' ' + first + ' ' + last;

  let country = document.createElement('p');
  country.innerText = 'Country: ' + profile.results[0].location.country;

  let postcode = document.createElement('p');
  postcode.innerText = 'Postcode: ' + profile.results[0].location.postcode;

  let phone = document.createElement('p');
  phone.innerText = 'Phone: ' + profile.results[0].phone;

  tag.appendChild(img);

  tag_inside.appendChild(name);
  tag_inside.appendChild(country);
  tag_inside.appendChild(postcode);
  tag_inside.appendChild(phone);

  tag.appendChild(tag_inside);

  return tag;
}

function showFromFile(file) {
  fetch(file)
    .then((response) => response.json())
    .then((json) => {
      status_bar.innerText = 'Successfully fetched elements from file!';
      json.forEach((element) => {
        cards.appendChild(buildCards(element));
      });
    })
    .catch((err) => {
      status_bar.innerText = 'Something went wrong: ' + err;
    });
}

let apiRequestLoop = function (inp) {
  let promiseArray = [];
  for (let i = 0; i < inp; i++) {
    promiseArray.push(
      fetch('https://randomuser.me/api').then(function (response) {
        return response.json();
      })
    );
  }
  return promiseArray;
};

function showFromServer(count) {
  Promise.all(apiRequestLoop(count)).then(
    (value) => {
      status_bar.innerText =
        'Successfully downloaded elements from server! Count: ' + count;
      value.forEach((element) => {
        cards.appendChild(buildCards(element));
      });
    },
    (reason) => {
      status_bar.innerText = 'Something went wrong: ' + reason;
    }
  );
}
