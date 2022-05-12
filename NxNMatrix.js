function nXnMatrix(n) {
    function rowOfMatrix(n) {
        let row = [];
        for (let i = 0; i < n; i++) {
            row.push(n);
        }
        return row.join(' ');
    }

    function numberOfRows(n) {
        let rows = [];
        for (let i = 0; i < n; i++) {
            rows.push(rowOfMatrix(n));
        }
        return rows.join('\n');
    }
    return numberOfRows(n);
}
console.log(nXnMatrix(7));