

var n1 = 10;
var n2 = '20';

console.log(n1 + n2);

var n3 = n1 + '';
console.log(typeof n3);

var n4 = n2 - n1 - 5 - '3';
console.log(n4);

var n5 = n1 * n2;
console.log(n5);

var n6 = 'hello' * 3;
console.log(n6);

console.log('====================');

var n7 = +'99';
console.log(true + true);
console.log(true + false);
console.log(false + false);

console.log('=====================');

// falsy : 0, '', null, undefined, NaN

// falsy
if (0) console.log('hello-1');
if ('') console.log('hello-2');
if (null) console.log('hello-3');
if (undefined) console.log('hello-4');
if (NaN) console.log('hello-5');


// truthy
if (99) console.log('hello-6');
if (-87.876) console.log('hello-7');
if (`알룡?`) console.log('hello-8');
if (' ') console.log('hello-9');
if ([10, 20, 30]) console.log('hello-10');
if ([]) console.log('hello-11');
if ({ kind : '개' }) console.log('hello-12');
if (function() {}) console.log('hello-13');


for (var i = 1; i <= 10; i++) {
  if (i % 2) {
    console.log(`${i}는 홀수입니다.`);
  } else {
    console.log(`${i}는 짝수입니다.`);
  }
}

console.log('====================');

var apple = 0;
if (apple) {
  console.log('사과가 있습니다.');
} else {
  console.log('사과가 없습니다.');
}

var n = 20;
var flag = n > 10;

if (!flag) {}
