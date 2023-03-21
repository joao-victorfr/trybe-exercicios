const superHero = 'https://superheroapi.com/api.php/5911460892305115';

const id = () => {
  return Math.floor(Math.random() * 731);
}

const btn = document.querySelector('#btn')
btn.addEventListener('click', (event) => {
  event.preventDefault();
  const randomId = id();
  fetch(`${superHero}/${randomId}`)
  .then((response) => response.json())
  .then((data) => {
    const heroImg = document.getElementById('img');
    const image = data.image.url;
    heroImg.src = image;
    heroImg.alt = data.name
    heroImg.style.width = '500px';
    heroImg.style.height = '500px';

    const nameOfHero = data.name;
    const p = document.getElementById('name');
    p.innerHTML = nameOfHero;
  })
  .catch((error) => {
    console.log(error.message);
  })
})