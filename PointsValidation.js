function pointsValidations(coordinatsArr) {

    function isValidX1Y1To00(coordinatsArr) {
        let isValid = '';
        let x1 = coordinatsArr[0];
        let y1 = coordinatsArr[1];
        let distanceBetweenStartAndX1Y1 = Math.sqrt(x1 ** 2 + y1 ** 2);

        distanceBetweenStartAndX1Y1 == Math.round(distanceBetweenStartAndX1Y1) ? isValid = 'is valid' : isValid = 'is invalid';

        return `{${x1}, ${y1}} to {0, 0} ${isValid}`;
    }

    function isValidX2Y2To00(coordinatsArr) {
        let isValid = '';
        let x2 = coordinatsArr[2];
        let y2 = coordinatsArr[3];
        let distanceBetweenStartAndX2Y2 = Math.sqrt(x2 ** 2 + y2 ** 2);

        distanceBetweenStartAndX2Y2 == Math.round(distanceBetweenStartAndX2Y2) ? isValid = 'is valid' : isValid = 'is invalid';

        return `{${x2}, ${y2}} to {0, 0} ${isValid}`;
    }

    function isValidX1Y1toX2Y2(coordinatsArr) {
        let isValid = '';
        let x1 = coordinatsArr[0];
        let y1 = coordinatsArr[1];
        let x2 = coordinatsArr[2];
        let y2 = coordinatsArr[3];
        let distanceBetweenX1Y1AndX2Y2 = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

        distanceBetweenX1Y1AndX2Y2 == Math.round(distanceBetweenX1Y1AndX2Y2) ? isValid = 'is valid' : isValid = 'is invalid';

        return `{${x1}, ${y1}} to {${x2}, ${y2}} ${isValid}`;
    }

    return `${isValidX1Y1To00(coordinatsArr)}\n${isValidX2Y2To00(coordinatsArr)}\n${isValidX1Y1toX2Y2(coordinatsArr)}`;
}
console.log(pointsValidations([2, 1, 1, 1]));