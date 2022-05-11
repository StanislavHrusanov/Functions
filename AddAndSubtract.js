function addAndSubtract(firstNum, secondNum, thirdNum) {
    // let sum = (a, b) => a + b;
    // let subtract = (a, b) => a - b;
    // console.log(subtract(sum(firstNum, secondNum), thirdNum));

    function sum(firstNum, secondNum) {
        let sum = firstNum + secondNum;
        return sum;
    }
    function subtract(sum, thirdNum) {
        let subtract = sum - thirdNum;
        return subtract;
    }
    console.log(subtract(sum(firstNum, secondNum), thirdNum));
}
addAndSubtract(23,
    6,
    10
);