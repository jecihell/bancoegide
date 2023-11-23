function verificarSenha() {
    var senha = document.getElementById("senha").value.trim();

    if (senha === "") {
        window.alert("Por favor, preencha a senha.");
    } else {
        window.location.href = "transferencia-finalizada.html";
    }
}