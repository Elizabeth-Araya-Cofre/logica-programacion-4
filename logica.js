function generateFibonacci() {
    const input = document.getElementById('numberInput').value;
    const number = parseInt(input, 10);

    if (isNaN(number) || number <= 0) {
        alert('Por favor, introduce un número válido.');
        return;
    }

    const fibonacciSeries = [];
    let a = 0, b = 1, temp;

    for (let i = 0; i < number; i++) {
        fibonacciSeries.push(a);
        temp = a + b;
        a = b;
        b = temp;
    }

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `Los primeros ${number} números de la serie de Fibonacci son: ${fibonacciSeries.join(', ')}`;
    console.log(`Los primeros ${number} números de la serie de Fibonacci son: ${fibonacciSeries.join(', ')}`);
}
