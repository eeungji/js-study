
// 화살표함수와 this
const dog = {
  name: '뽀삐',
  regularFn: function() {
    console.log('regular: ', this); // 자기 자신 객체
  },
  arrowFn: () => {
    console.log('arrow: ', this); // window 객체
  }
};

dog.regularFn();
dog.arrowFn();


console.log('===================');

function foo() {
  console.log(this); // window
}

const cat = {
  name: '나비',
  introduce: function() {
    console.log(`introduce this: `, this);

    // 화살표 함수의 this는 scope체인 안의 this
    setTimeout(() => {
      console.log('setTimeout this: ', this);
    }, 2000);
  }
};

cat.introduce();


// 실제 사용 예시
$modal.addEventListener('click', function(e) {
  console.log(this); // $modal

  $ok.addEventListener('click', function(e) {
    console.log(this); // $ok
  });

  $cancel.addEventListener('click', (e) => {
    console.log(this); // $modal
  });
});