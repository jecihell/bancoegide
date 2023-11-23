document.getElementById("simular-button").addEventListener("click", function () {
    const valorEmReaisInput = document.getElementById("valor").value;        
    const valorEmReais = parseFloat(valorEmReaisInput.replace("R$", ""));    
    const taxaDeCambio = 5.25;    
    const valorEmDolar = valorEmReais / taxaDeCambio;

    document.getElementById("resultado").textContent = `Você receberá aproximadamente €${valorEmDolar.toFixed(2)} Euros.`;
    
    document.getElementById("contratar-button").style.display = "block";
});