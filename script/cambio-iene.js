document.getElementById("simular-button").addEventListener("click", function () {
    const valorEmReaisInput = document.getElementById("valor").value;       
    const valorEmReais = parseFloat(valorEmReaisInput.replace("R$", ""));    
    const taxaDeCambio = 0.035;    
    const valorEmDolar = valorEmReais / taxaDeCambio;

    document.getElementById("resultado").textContent = `Você receberá aproximadamente ¥${valorEmDolar.toFixed(2)} Ienes.`;
    
    document.getElementById("contratar-button").style.display = "block";
});