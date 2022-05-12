function oddAndEvenSum(number) {

    function sumOfOdds(number) {
        let sum = 0;
        let numberAsString = String(number);
        for (let i = 0; i < numberAsString.length; i++) {
            if (numberAsString[i] % 2 != 0) {
                sum += Number(numberAsString[i]);
            }
        }
        return sum;
    }
    function sumOfEvens(number) {
        let sum = 0;
        let numberAsString = String(number);
        for (let i = 0; i < numberAsString.length; i++) {
            if (numberAsString[i] % 2 == 0) {
                sum += Number(numberAsString[i]);
            }
        }
        return sum;
    }
    console.log(`Odd sum = ${sumOfOdds(number)}, Even sum = ${sumOfEvens(number)}`);
}
oddAndEvenSum(3495892137259234);