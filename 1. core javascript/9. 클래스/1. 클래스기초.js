
const userInput = {
  username: '홍길동',
  age: 30,
  phone: '010-1234-4321'
};

for (const key in userInput) {
  console.log(key);
  console.log(userInput[key]);
}