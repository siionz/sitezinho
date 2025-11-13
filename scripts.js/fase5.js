window.onload = function() {
  const mensagem = document.getElementById("mensagem");
  const btnNext = document.getElementById("btnNext");

  setTimeout(() => {
    mensagem.textContent = "Pode prosseguir";
    btnNext.style.display = "inline-block";
  }, 10000); 
};

function proximaFase() {
  alert("Parabéns, espero que não tenha ficado entediada!");
  window.location.href = "../paginas/final.html";
}
