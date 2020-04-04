// https://dog.ceo/api/breeds/image/random Fetc
// https://viacep.com.br/ws/01001000/json/
const buttonImg = document.querySelector('button');
const img = document.querySelector('img');
const load = document.querySelector('.load');
const inputCep = document.getElementById('cep');
const inputs = document.querySelectorAll('input');

if(buttonImg && img && load && inputCep && inputs) {

async function puxarDados() {
  try {
    const dogFetch = await fetch('https://dog.ceo/api/breeds/image/random');
    const dog = await dogFetch.json();
    load.classList.add('ativo');
    img.classList.add('ativo');
    setTimeout(() => {
      load.classList.remove('ativo');
      img.classList.remove('ativo');
      img.src = dog.message;
    }, 1500);
  }
  catch(erro) {
    console.log(Error(erro));
  }
}
puxarDados();


inputCep.addEventListener('change', handleClick);

buttonImg.addEventListener('click',puxarDados );

function handleClick(event) {
  event.preventDefault();
  const cep = inputCep.value;
  buscaCep(cep);
}
async function buscaCep(cep) {
 try{
  const pegaURL = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
  const cepUrl = await pegaURL.json();
      inputs[1].value =  cepUrl.logradouro;
      inputs[3].value =  cepUrl.bairro;
      inputs[4].value = cepUrl.localidade;
      inputs[5].value = cepUrl.uf;
    }
    catch(erro) {
       console.log(Error(erro));
     alert('Cep Invalido');
    
    }
 
}
}