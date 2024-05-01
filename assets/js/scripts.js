document.addEventListener('DOMContentLoaded', function () {
    let count = 0;
    const currentNumber = document.getElementById('currentNumber');
    const incrementButton = document.getElementById('increment');
    const decrementButton = document.getElementById('decrement');

    function increment() {
        count++;
        currentNumber.innerHTML = count;
    }

    function decrement() {
        count--;
        currentNumber.innerHTML = count;
    }

    incrementButton.addEventListener('click', increment);
    decrementButton.addEventListener('click', decrement);
});
