function voltarParaLogin() {
    window.location.href = "login.html";
}
document.getElementById("cadastroForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var nomeCompleto = document.getElementById("nomeCompleto").value;
    var cpf = document.getElementById("cpf").value;
    var email = document.getElementById("email").value;
    var endereco = document.getElementById("endereco").value;
    var usuario = document.getElementById("usuario").value;
    var senha = document.getElementById("senha").value;
    var email = document.getElementById("email").value;
    var confirmEmail = document.getElementById("confirmEmail").value;
    var senha = document.getElementById("senha").value;
    var confirmSenha = document.getElementById("confirmSenha").value;
    var dataNascimento = document.getElementById("dataNascimento").value;
    var cep = document.getElementById("cep").value;
    
if (email !== confirmEmail) {
    document.getElementById("error-message").textContent = "Os campos de email não correspondem.";
    return;
}

if (senha !== confirmSenha) {
    document.getElementById("error-message").textContent = "Os campos de senha não correspondem.";
    return; 
}            
});