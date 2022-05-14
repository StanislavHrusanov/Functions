function perfectNumber(n) {
    function sumOfPositiveDivisors(n) {
        let sum = 0;

        for (let i = 0; i < n; i++) {
            if (n % i == 0) {
                sum += i;
            }
        }
        return (sum);
    }

    function isNumberPerfect(n) {
        return n == sumOfPositiveDivisors(n) ? 'We have a perfect number!' : `It's not so perfect.`;
    }

    return isNumberPerfect(n);
}
console.log(perfectNumber(1236498));