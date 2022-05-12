function loadingBar(number) {

    function emptyLoadingBar(length) {
        let loadingB = [];
        for (i = 0; i < length; i++) {
            loadingB.push('.');
        }
        return loadingB;
    }

    function percentOfLoaded(number) {
        let bar = emptyLoadingBar(10);
        for (let i = 0; i < number / bar.length; i++) {
            bar[i] = '%';
        }

        return number != 100 ? `${number}% [${bar.join('')}]\nStill loading...` : `100% Complete!\n[%%%%%%%%%%]`
    }
    return percentOfLoaded(number);
}
console.log(loadingBar(70));