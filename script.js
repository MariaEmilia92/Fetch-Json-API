// criando um botao de pesquisa de endereço com o cep
const inputCep = document.getElementById("cep");
const btnCep = document.getElementById("btnCep");
const resultadoCep = document.querySelector(".resultadoCep");

btnCep.addEventListener("click", handleClick);

function handleClick(event) {
  event.preventDefault();
  const cep = inputCep.value;
  buscaCep(cep);
}

function buscaCep(cep) {
  fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then((response) => response.text())
    .then((body) => {
      resultadoCep.innerText = body;
    });
}

//buscando bitcoin em reais e atualizando a cada 30s

const btcDisplay = document.querySelector(".btc");

function fetchBtc() {
  fetch("https://blockchain.info/ticker")
    .then((response) => response.json())
    .then((btcJson) => {
      btcDisplay.innerText = ("R$ " + btcJson.BRL.buy).replace(".", ",");
    });
}

// setInterval(fetchBtc, 1000 * 30);

fetchBtc();

// retornando uma piada randomica do chucknorris com o botao proxima

const btnProxima = document.querySelector(".proxima");
const paragrafoPiada = document.querySelector(".piada");

function puxarPiada() {
  fetch("https://api.chucknorris.io/jokes/random")
    .then((r) => r.json())
    .then((piada) => {
      paragrafoPiada.innerText = piada.value;
    });
}

btnProxima.addEventListener("click", puxarPiada);

puxarPiada();

function puxarPost() {
  fetch("https://jsonplaceholder.typicode.com/posts/")
    .then((r) => r.json())
    .then((r) => {
      console.log(r);
    });
}

puxarPost();
