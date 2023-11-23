var saldoVisible = true;

function toggleSaldo() {
    var saldoElement = document.getElementById("saldo");
    if (saldoVisible) {
        saldoElement.type = "password";
    } else {
        saldoElement.type = "text";
    }
    saldoVisible = !saldoVisible;
}

var saldo = parseInt(localStorage.getItem('valorSaldo')) || 1500;

const valor = document.getElementById("valor");
const senha = document.getElementById("senha");
const btnpix = document.getElementById("fazerPixButton");

btnpix.addEventListener("click", function(event) {
    if (valor.value === "") {
        window.alert("O campo Valor é obrigatório");
    }
    else if (senha.value === "") {
        window.alert("O campo Senha é obrigatório");
    } else {

        const valorTransferencia = parseInt(valor.value);
        
        if (valorTransferencia > saldo) {
            window.alert("Saldo insuficiente");
        } else {
            saldo -= valorTransferencia;
            localStorage.setItem('valorSaldo', saldo);
            window.alert("Transferência Concluída!");
            window.location.href = "home.html";
        }
    }
});


function showErrorModal(message) {
    document.getElementById("errorMessage").textContent = message;
    document.getElementById("errorModal").style.display = "block";
}

// document.getElementById("closeErrorModal").addEventListener("click", function() {
//     document.getElementById("errorModal").style.display = "none";
// });


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



document.getElementById('fazerPixButton').addEventListener('click', function() {
    const valorTransferencia = parseFloat(document.getElementById('valor').value);
    let saldoAtual = 1500;

    if (!isNaN(valorTransferencia) && valorTransferencia <= saldoAtual) {
        saldoAtual -= valorTransferencia;
        document.getElementById('saldo').value = saldoAtual.toFixed(2);
    } else {
        alert('Valor inválido ou saldo insuficiente!');
    }
});






