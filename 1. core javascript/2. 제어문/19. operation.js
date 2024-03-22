/*
    시스템은 1~20사이의 무작위의 정수 2개를 생성하여 
    덧셈 문제를 출제해야 한다.

    사용자는 출제된 문제의 정답을 입력할 수 있어야 한다.

    시스템은 사용자의 입력값을 확인해서 정답인지 오답인지를
    알려줘야 한다.

    시스템은 지속적으로 다른 문제를 출제하여 사용자가 0을 입력할 때까지
    답을 계속 입력받고 검증해줘야 한다.
*/
const DIFFICULT = 1,
  MIDDLE = 2,
  EASY = 3;

var levelMessage = `~~~~~~~ 난이도를 설정합니다 ~~~~~~~~~~
[ 1. 상  || 2. 중  || 3. 하 ]`;

var level = +prompt(levelMessage);

var maxNumber;

switch (level) {
  case DIFFICULT:
    maxNumber = 100;
    break;
  case MIDDLE:
    maxNumber = 50;
    break;
  case EASY:
    maxNumber = 20;
    break;
  default:
    maxNumber = 99999;
}

var qNum = 1; // 문제 번호

var correctCount = 0,
  wrongCount = 0;

while (true) {
  var firstNumber = Math.floor(Math.random() * maxNumber) + 1;
  var secondNumber = Math.floor(Math.random() * maxNumber) + 1;

  // 앞의 숫자가 더 크게 설정
  if (firstNumber < secondNumber) {
    var temp = firstNumber;
    firstNumber = secondNumber;
    secondNumber = temp;
  } else if (firstNumber === secondNumber) {
    continue;
  }

  // 0, 1, 2 중에 하나가 생성되는 난수
  var markNum = Math.floor(Math.random() * 3);

  var mark = '+'; // 연산 기호를 문자열로 저장

  // 실제 정답
  var realAnswer;

  switch (markNum) {
    case 0:
      mark = '+';
      realAnswer = firstNumber + secondNumber;
      break;
    case 1:
      mark = '-';
      realAnswer = firstNumber - secondNumber;
      break;
    case 2:
      mark = 'x';
      realAnswer = firstNumber * secondNumber;
      break;
  }

  // 사용자의 입력답
  var userAnswer = +prompt(
    `Q${qNum++}. ${firstNumber} ${mark} ${secondNumber} = ??`
  );

  if (userAnswer === 0) {
    alert('게임을 종료합니다.');
    break;
  }

  // 정답 검증
  if (userAnswer === realAnswer) {
    alert('정답입니다!!');
    correctCount++;
  } else {
    alert('틀렸습니다!!');
    wrongCount++;
  }
} // end each game loop

alert(`# 정답횟수: ${correctCount}회, 틀린횟수: ${wrongCount}회`);
