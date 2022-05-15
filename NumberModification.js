function numberModification(number) {

    function avgValueOfDigitsOfNumber(number) {
        let numberAsArr = String(number).split('').map(Number);
        let sumOfAllDigits = 0;
        for (let digit of numberAsArr) {
            sumOfAllDigits += digit;
        }
        let avg = sumOfAllDigits / numberAsArr.length;
        return avg;
    }
    if (avgValueOfDigitsOfNumber(number) > 5) {
        return number;
    } else {

        function modifying(number) {
            let currNum = number;
            while (avgValueOfDigitsOfNumber(currNum) <= 5) {
                currNum = currNum + '9';
                currNum = Number(currNum);

            }

            return currNum;
        }
        return modifying(number);
    }
}
console.log(numberModification(5835));