import validator from 'validator';

const campoDeTexto = document.querySelector('#text');
const button = document.querySelector('#validation');
const saida = document.querySelector('#result');
const selecionar = document.querySelector('#options');

button.addEventListener('click', (event) => {

  event.preventDefault();

  const campos = {
    cpf: validator.isTaxID(campoDeTexto.value, 'pt-BR'),
    hexColor: validator.isHexColor(campoDeTexto.value),
    email: validator.isEmail(campoDeTexto.value),
    uuid: validator.isUUID(campoDeTexto.value, 4),
    url: validator.isURL(campoDeTexto.value),
  };

  saida.innerHTML = `A validaçao retornou ${campos[selecionar.value]}`
})
