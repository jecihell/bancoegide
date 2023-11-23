let cardIsFront = true; 
function toggleCard() {
    const cardImage = document.getElementById('cartao');
    
    if (cardIsFront) {
        cardImage.src = "images/cartao-verso.png";
    } else {
        cardImage.src = "images/cartao-frente.png";
    }

    cardIsFront = !cardIsFront; 
}    
document.getElementById('cartao').addEventListener('click', toggleCard);