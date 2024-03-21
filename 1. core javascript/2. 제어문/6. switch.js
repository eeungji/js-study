var season = prompt('선호하는 계절을 입력하세요!');

// 조건을 판별할 변수 (비교식x, 문자값이나 숫자값만 써야 함)
switch (season) {
  case '봄':
  case 'spring':
    alert('봄에는 여의도로 가세요');
    break;
  case '여름':
  case 'summer':
    alert('여름에는 낙산해수욕장으로 가세요');
    break;
  case '가을':
  case 'fall':
    alert('가을에는 설악산에 가세요');
    break;
  case '겨울':
  case 'winter':
    alert('겨울에는 홍천에 가세요');
    break;
  default:
    alert('봄, 여름, 가을, 겨울 중 하나를 입력하세요!');
}
