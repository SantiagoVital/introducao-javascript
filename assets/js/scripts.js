document.addEventListener('DOMContentLoaded', function () {
    let count = 0;
    const currentNumber = document.getElementById('currentNumber');
    const incrementButton = document.getElementById('increment');
    const decrementButton = document.getElementById('decrement');

    function updateButtonState() {
        decrementButton.disabled = count <= 0; // Desabilita o botão se count for menor ou igual a 0
        incrementButton.disabled = count >= 10; // Desabilita o botão se count for maior ou igual a 10
    }

    function increment() {
        if (count < 10) {
            count++;
            currentNumber.innerHTML = count;
            updateButtonState();
        }
    }

    function decrement() {
        if (count > 0) {
            count--;
            currentNumber.innerHTML = count;
            updateButtonState();
        }
    }

    incrementButton.addEventListener('click', increment);
    decrementButton.addEventListener('click', decrement);

    // Inicializa o estado dos botões com base no valor inicial de count
    updateButtonState();
});