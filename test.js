

const nums = [333, 66, 777, 1000, 5, 99];

const maxValue = nums.reduce((max, n) => max < n ? n : max);
console.log(`최대값 : ${maxValue}`);