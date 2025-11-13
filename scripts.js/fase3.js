function verificarResposta() {
  const resposta = document.getElementById("resposta").value.trim().toLowerCase();
  const respostaCorreta = "gosto muito de voce";
  const mensagem = document.getElementById("mensagem");
  const btnNext = document.getElementById("btnNext");

  if (resposta === respostaCorreta) {
    mensagem.style.color = "limegreen";
    mensagem.innerHTML = "✅ Resposta correta! Pode prosseguir.";
    btnNext.style.display = "inline-block";
  } else {
    mensagem.style.color = "red";
    mensagem.innerHTML = "❌ Resposta incorreta.";
  }
}

function mostrarDica() {
  const mensagem = document.getElementById("mensagem");
  mensagem.style.color = "gray";
  mensagem.innerHTML =
    "💡 Dica: ignore acentos. Escreva o alfabeto (A=1, B=2...) e use a sequência numérica.";
}

function proximoEnigma(event) {
  if (event) event.preventDefault();
  window.location.href = "../paginas/fase4.html";
}

