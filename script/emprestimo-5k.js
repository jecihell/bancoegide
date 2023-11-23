function calcularParcelamento() {
    const parcelas = parseInt(document.getElementById("parcelas").value);
    const juros = 0.05;
    const valorParcela = 5000;

    const valorTotal = valorParcela * Math.pow(1 + juros, parcelas);

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `Valor Total a Pagar: R$${valorTotal.toFixed(2)}`;

    const parcelasResultado = document.getElementById("parcelasResultado");
    parcelasResultado.innerHTML = "Valor de cada parcela: R$";
    
    const valorCadaParcela = valorTotal / parcelas;
    parcelasResultado.innerHTML += `${valorCadaParcela.toFixed(2)}`;
}