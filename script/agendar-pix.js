function validarPeloMenosUm(event) {
    var campos = ['cpf', 'chave', 'email', 'celular'];
    var preenchido = false;

    for (var i = 0; i < campos.length; i++) {
        var campo = document.getElementById(campos[i]);
        if (campo.value.trim() !== '') {
            preenchido = true;
            break;
        }
    }

    if (!preenchido) {
        alert("Pelo menos um dos campos deve ser preenchido.");
        event.preventDefault();
    } else {
        window.location.href = "transferencia-valor.html";
    }
}