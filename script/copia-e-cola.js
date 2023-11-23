function validarFormulario() {
    var nomeCompleto = document.getElementById("nomeCompleto").value;
    if (nomeCompleto === "") {
        alert("Por favor, Cole o código antes de prosseguir");
        return false;
    }
    return true;
}