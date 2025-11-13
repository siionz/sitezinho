function verificarResposta() {
  const resposta = document.getElementById("resposta").value.trim().toLowerCase();
  const respostaCorreta = "amei o site";
  const mensagem = document.getElementById("mensagem");
  const btnNext = document.getElementById("btnNext");

  if (resposta === respostaCorreta) {
    mensagem.style.color = 'darkgreen';
    mensagem.innerHTML = 'Correto! Você decifrou o código!';
    btnNext.style.display = 'inline-block';
  } else {
    mensagem.style.color = 'red';
    mensagem.innerHTML = 'Resposta incorreta. Tente novamente.';
  }
}

function mostrarDica() {
  const mensagem = document.getElementById("mensagem");
  mensagem.style.color = 'gray';
  mensagem.innerHTML = ' Pense em código Morse — os sinais escondem palavras.';
}

function proximaFase() {
  window.location.href = "../paginas/fase5.html";
}
