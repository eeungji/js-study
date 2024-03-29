
const userNames = ['김철수', '강감찬', '박영희'];

// userNames에서 각각의 요소들을 다시 변수에 집어넣고 싶다.
// const kim = userNames[0];
// const kang = userNames[1];
// const park = userNames[2];

const [kim, kang, park] = userNames;

console.log(`a: ${kim}, b: ${kang}, c: ${park}`);


const [kk, , pp] = userNames;
console.log(`kk: ${kk}, pp: ${pp}`);


const example = ['', [], ()=>{}];

const [ , arr, myFunc] = example;
myFunc();


let first = 10, second = 20;
[first, second] = [second, first];

console.log(`first: ${first}, second: ${second}`);

// 배열 안에서 맨 앞에 2개만 각각의 변수에 저장하고
// 나머지는 다시 배열로 묶고싶다.
const numbers = [1, 3, 5, 7, 9, 11, 13];

// const numsCopy = numbers.slice();

// const one = numsCopy.shift();
// const three = numsCopy.shift();

const [one, three, ...numsCopy] = numbers;

console.log(`one: ${one}`);
console.log(`three: ${three}`);
console.log(`numbers: ${numsCopy}`);

console.log('==========================');

// 스프레드를 통한 배열 간편 복사
const foods = ['감튀', '햄버거', '콜라'];
// const copyFoods = foods.slice();
// const copyFoods = foods.map(f => f);

const copyFoods = [...foods];


foods[0] = '치킨너겟';
copyFoods.push('밀크쉐이크');

console.log('foods:', foods);
console.log('copyFoods:', copyFoods);


console.log('==============');

// a.concat(b)  ==>   [...a, ...b]
const newFoods = ['육포', ...foods, '닭다리', ...userNames];
console.log(newFoods);