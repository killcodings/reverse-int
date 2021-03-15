module.exports = function reverse(n) {
    return Math.floor(parseInt(n.toString().split("").reverse().join("")));
};
