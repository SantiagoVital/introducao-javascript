document.addEventListener('DOMContentLoaded', function () {
    let count = 0;
    const currentNumber = document.getElementById('currentNumber');
    const incrementButton = document.getElementById('increment');
    const decrementButton = document.getElementById('decrement');

    function updateDisplay() {
        currentNumber.innerHTML = count;
        if (count < 0) {
            currentNumber.style.color = 'red';
        } else {
            currentNumber.style.color = 'black'; // Ou qualquer cor padrão que você deseja
        }
    }

    function updateButtonState() {
        decrementButton.disabled = count <= 0; // Desabilita o botão se count for menor ou igual a 0
        incrementButton.disabled = count >= 10; // Desabilita o botão se count for maior ou igual a 10
    }

    function increment() {
        if (count < 10) {
            count++;
            updateDisplay();
            updateButtonState();
        }
    }

    function decrement() {
        if (count > 0) {
            count--;
            updateDisplay();
            updateButtonState();
        } else if (count <= 0) { // Permita decrementar abaixo de 0
            count--;
            updateDisplay();
            updateButtonState();
        }
    }

    incrementButton.addEventListener('click', increment);
    decrementButton.addEventListener('click', decrement);

    // Inicializa o estado dos botões e a cor do texto com base no valor inicial de count
    updateDisplay();
    updateButtonState();
});
