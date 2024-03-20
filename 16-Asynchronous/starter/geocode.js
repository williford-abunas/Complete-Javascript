'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
const token = 'pk.d7fe8f8111280b7a72768d187880d76b';

const renderCountry = function (data, className = '') {
  const html = `
    <article class="country ${className}">
          <img class="country__img" src="${data.flag}" />
          <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              +data.population / 1000000
            ).toFixed(1)}M people</p>
            <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
            <p class="country__row"><span>💰</span>${
              data.currencies[0].name
            }</p>
          </div>
        </article>`;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

// const whereAmI = function (lat, lng) {
//   fetch(
//     `https://us1.locationiq.com/v1/reverse?key=${token}&lat=${lat}&lon=${lng}&format=json`
//   )
//     .then(response => {
//       if (!response.ok)
//         throw new Error(`Error fetching geocoding api (${response.status})`);
//       return response.json();
//     })
//     .then(data => {
//       console.log(
//         `You are in ${data.address.municipality}, ${data.address.country}`
//       );

//       return fetch(`https://restcountries.com/v2/name/${data.address.country}`);
//     })
//     .then(response => {
//       if (!response.ok)
//         throw new Error(`Error fetching REST country API ${response.status}`);

//       return response.json();
//     })
//     .then(data => renderCountry(data[0]))
//     .catch(err => console.error(err.message))
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    // navigator.geolocation.getCurrentPosition(
    //   position => resolve(position),
    //   err => reject(err)
    // )
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

// const whereAmI = function () {
//   getPosition()
//     .then(pos => {
//       const { latitude: lat, longitude: lng } = pos.coords;

//       return fetch(
//         `https://us1.locationiq.com/v1/reverse?key=${token}&lat=${lat}&lon=${lng}&format=json`
//       );
//     })
//     .then(response => {
//       if (!response.ok)
//         throw new Error(`Error fetching geocoding api (${response.status})`);
//       return response.json();
//     })
//     .then(data => {
//       console.log(`You are in ${data.address.city}, ${data.address.country}`);

//       return fetch(`https://restcountries.com/v2/name/${data.address.country}`);
//     })
//     .then(response => {
//       if (!response.ok)
//         throw new Error(`Error fetching REST country API ${response.status}`);

//       return response.json();
//     })
//     .then(data => renderCountry(data[0]))
//     .catch(err => console.error(err.message))
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

////////////////////////////////////////////////////////
// const whereAmI = async function () {
//   const position = await getPosition();
//   const { latitude: lat, longitude: lng } = position.coords;

//   try {
//     const resGeo = await fetch(
//       `https://us1.locationiq.com/v1/reverse?key=${token}&lat=${lat}&lon=${lng}&format=json`
//     );

//     if (!resGeo.ok) {
//       throw new Error('Problem getting location data.');
//     }
//     const dataGeo = await resGeo.json();

//     const resCountry = await fetch(
//       `https://restcountries.com/v2/name/${dataGeo.address.country}`
//     );

//     if (!resCountry.ok) {
//       throw new Error('Problem getting country data.');
//     }
//     const dataCountry = await resCountry.json();

//     renderCountry(dataCountry[0]);

//     return `You are in ${dataGeo.address.city}, ${dataGeo.address.country}`;
//   } catch (error) {
//     console.error(`${error} 💥`);

//     throw error;
//   }
// };
///////////////////////////////////////////////////////////

// (async function () {
//   try {
//     const currentCountry = await whereAmI();
//     console.log(currentCountry);
//   } catch (error) {
//     console.error(error.message);
//   }
// })();

//////////////////////////////////////////////////////

//Helper
const getJSON = async function (url, errorMsg = 'Something went wrong!') {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);
  return await response.json();
};

const get3Countries = async function (c1, c2, c3) {
  try {
    const data = await Promise.all([
      getJSON(`https://restcountries.com/v2/name/${c1}`),
      getJSON(`https://restcountries.com/v2/name/${c2}`),
      getJSON(`https://restcountries.com/v2/name/${c3}`),
    ]);
    data.map(d => console.log(d[0].capital));
  } catch (err) {
    console.error(err);
  }
};

get3Countries('turkey', 'india', 'pakistan');

//Promise combinator
//Promise.race
(async function () {
  const res = await Promise.race([
    getJSON(`https://restcountries.com/v2/name/italy`),
    getJSON(`https://restcountries.com/v2/name/egypt`),
    getJSON(`https://restcountries.com/v2/name/laos`),
  ]);
  console.log(res[0]);
})();

const timeout = function (sec) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error('Request took too long!'));
    }, sec * 1000);
  });
};

Promise.race([getJSON(`https://restcountries.com/v2/name/poland`), timeout(1)])
  .then(res => console.log(res[0]))
  .catch(err => console.error(err));

//Promise.allSettled - return all results, short circuits when reject
Promise.allSettled([
  Promise.resolve('Succes'),
  Promise.resolve('Error'),
  Promise.resolve('Another Succes'),
]).then(res => console.log(res));

//Promise.any ES2021
//- rejected promises are ignored
//- returns only fulfilled promises
