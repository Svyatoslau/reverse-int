module.exports = function reverse(n) {
    let string = String(n);
    return Number(string.split("").reverse().join(""));
}
