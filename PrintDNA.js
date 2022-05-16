function printDNA(length) {
    let letters = ['A', 'T', 'C', 'G', 'T', 'T', 'A', 'G', 'G', 'G'];

    for (let i = 0; i < length; i++) {
        let firstLetter = letters.shift();
        let secondLetter = letters.shift();
        if (i % 4 == 0) {
            console.log(`**${firstLetter}${secondLetter}**`);
        } else if (i % 4 == 1 || i % 4 == 3) {
            console.log(`*${firstLetter}--${secondLetter}*`);
        } else if (i % 4 == 2) {
            console.log(`${firstLetter}----${secondLetter}`);
        }
        letters.push(firstLetter);
        letters.push(secondLetter);
    }
}
printDNA(10);