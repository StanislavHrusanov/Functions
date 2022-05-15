function carWash(commandsArr) {

    function percentageOfCleaned(commandsArr) {
        let resultOfCleaning = 0;
        for (let command of commandsArr) {
            if (command == 'soap') {
                resultOfCleaning += 10;
            } else if (command == 'water') {
                resultOfCleaning *= 1.20;
            } else if (command == 'vacuum cleaner') {
                resultOfCleaning *= 1.25;
            } else if (command == 'mud') {
                resultOfCleaning *= 0.90;
            }
        }
        return resultOfCleaning.toFixed(2);
    }
    return `The car is ${percentageOfCleaned(commandsArr)}% clean.`
}
console.log(carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']));