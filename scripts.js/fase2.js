function verificarChave() {
    var resposta = document.getElementById("inputChave").value.trim().toLowerCase();
    if (resposta === "180522") {
        alert("Você é muito inteligente, passando para a próxima fase.");
        window.location.href = "../paginas/fase3.html";
    } else {
        alert("Resposta incorreta. Tente novamente.");
    }
}