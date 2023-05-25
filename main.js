const card = document.querySelectorAll('.card');
const bodyCard = document.querySelectorAll('.card-img-overlay');
const play = document.querySelectorAll('.play i');

for (let i = 0; i < card.length; i++) {
    card[i].addEventListener('mouseenter', function () {
        bodyCard[i].style.display = 'block';
        setTimeout(function () {
            play[i].style.display = 'block';
        }, 2500);
    })
    card[i].addEventListener('mouseleave', function () {
        bodyCard[i].style.display = 'none';
        setTimeout(function () {
            play[i].style.display = 'none';
        }, 1000);
    })
}

const links = document.querySelectorAll(".dropdown-menu a");
const titulo = document.getElementById('titulo');
const secaoMovies = document.querySelector('.secaoMovies');
const imagem = document.querySelectorAll('.card .imagem-filme');
const controlPrev = document.querySelector('.carousel-control-prev');
const controlNext = document.querySelector('.carousel-control-next');
const imgOverlay = document.querySelectorAll('.card-img-overlay');

for (let i = 0; i < links.length; i++) {
    const id = (links[i].href).split('#')[1];
    const valor = links[i].getAttribute('value');

    links[i].addEventListener('click', function () {
        secaoMovies.setAttribute('id', id);
        titulo.innerHTML = valor;
        controlPrev.classList.remove('d-none');
        controlNext.classList.remove('d-none');
        for (let j = 0; j < imagem.length; j++) {
            const src = imagem[j].setAttribute('src', `Imagens/${id}${j}.jpg`);
            imgOverlay[j].classList.remove('d-none');
        }
    })
}