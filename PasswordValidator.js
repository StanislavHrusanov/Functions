function passwordValidator(password) {

    function isRightLength(password) {
        if (password.length >= 6 && password.length <= 10) {
            return true;
        } else {
            return 'Password must be between 6 and 10 characters';
        }
    }

    function isRightConsist(password) {
        let isRightSymbol = false;
        for (let i = 0; i < password.length; i++) {
            let symbol = password[i];
            if (symbol.charCodeAt() >= 48 && symbol.charCodeAt() <= 57 ||
                symbol.charCodeAt() >= 65 && symbol.charCodeAt() <= 90 ||
                symbol.charCodeAt() >= 97 && symbol.charCodeAt() <= 122) {
                isRightSymbol = true;
            } else {
                isRightSymbol = false;
                break;
            }

        }
        if (isRightSymbol) {
            return true;
        } else {
            return 'Password must consist only of letters and digits';
        }
    }

    function isRightNumberOfDigits(password) {
        let indexOfNumbers = 0;
        for (let i = 0; i < password.length; i++) {
            let symbol = password[i];
            if (symbol.charCodeAt() >= 48 && symbol.charCodeAt() <= 57) {
                indexOfNumbers++;
            }
        }
        if (indexOfNumbers >= 2) {
            return true;
        } else {
            return 'Password must have at least 2 digits';
        }
    }
    let isValid = [];

    if (isRightLength(password) === true && isRightConsist(password) === true && isRightNumberOfDigits(password) === true) {
        isValid.push('Password is valid');
    }
    if (isRightLength(password) !== true) {
        isValid.push(isRightLength(password));
    }
    if (isRightConsist(password) !== true) {
        isValid.push(isRightConsist(password));
    }
    if (isRightNumberOfDigits(password) !== true) {
        isValid.push(isRightNumberOfDigits(password));
    }
    return isValid.join('\n');
}

console.log(passwordValidator('Pa$s$s'));