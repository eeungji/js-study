
var x = 99; // global scope : 전역 변수
var y = true;

function foo() {
  // var x = '홍길동'; // local scope : 지역 변수
  console.log(`foo x: ${x}`);
  var y = '메롱';
  console.log(`foo y: ${y}`);
  var z = 100;
  return x;
}

var y = foo();
console.log(`x: ${x}`);
console.log(`y: ${y}`);
// console.log(`z: ${z}`);


console.log('===================');

// 중첩 함수 : 함수 안에 함수를 정의
function outer(m) {
  var n = 'outer local n';
  var v = 'outer local v';
  console.log(n);
  console.log(v);
  console.log(m);

  // 헬퍼 함수: 바깥쪽 함수 전용함수
  function inner() {
    console.log(n);
    var m = 'inner local m';
    console.log(m);
  }

  inner();
}

outer('outer param m');



var userName = '홍길동';



function funcA() {
  userName = '박영희';
}
function funcB() {
  userName = '튀김';
}

funcA();
funcB();
funcA();
console.log(userName);
