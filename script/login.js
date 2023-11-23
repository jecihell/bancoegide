function login() {
            
    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;

    if (username === "usuario" && password === "123456") {
        window.location.href = "home.html";
    } else {
        document.getElementById("message").innerText = "Credenciais inválidas. Tente novamente.";
    }
}