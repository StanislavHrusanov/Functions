function palindromeIntegers(arrOfNumbers) {
    for (let element of arrOfNumbers) {

        function isPalidrome(number) {
            let numberAsString = number.toString();
            let reversedNumberAsString = '';
            for (let j = numberAsString.length - 1; j >= 0; j--) {
                reversedNumberAsString += numberAsString[j];
            }
            if (numberAsString == reversedNumberAsString) {
                return true;
            } else {
                return false;
            }
        }
        console.log(isPalidrome(element));
    }
}
palindromeIntegers([32, 2, 232, 1010]);