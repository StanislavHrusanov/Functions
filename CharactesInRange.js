function charactersInRange(charOne, charTwo) {
    let sequence = [];
    let firstCharNumber = Math.min(charOne.charCodeAt(), charTwo.charCodeAt());
    let secondCharNumber = Math.max(charOne.charCodeAt(), charTwo.charCodeAt());

    for (let i = firstCharNumber + 1; i < secondCharNumber; i++) {
        sequence.push(String.fromCharCode(i));
    }

    console.log(sequence.join(' '));
}
charactersInRange('C',
    '#'
);