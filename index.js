const num = 266219;

const numToString = num.toString().split("");

const res = numToString.reduce((acc, num) => acc * num, 1) ** 3;

console.log(res.toString().slice(0, 2));

