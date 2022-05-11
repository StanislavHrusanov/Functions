function factorialDivision(x, y) {

    function factorialOfX(x) {
        let result = 1;
        for (let i = 1; i <= x; i++) {
            result *= i;
        }
        return result;
    }

    function factorialOfY(y) {
        let result = 1;
        for (let i = 1; i <= y; i++) {
            result *= i;
        }
        return result;
    }

    let result = factorialOfX(x) / factorialOfY(y);
    return result.toFixed(2);
}
console.log(factorialDivision(6, 2));