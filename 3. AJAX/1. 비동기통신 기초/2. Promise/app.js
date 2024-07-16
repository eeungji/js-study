

// 서버 URL
const URL = 'https://jsonplaceholder.typicode.com/posts';
const URL2 = 'http://localhost:8383/api/vi/replies/30';

// ul태그 가져오기
const $postUl = document.querySelector('.posts');

// 화면에 게시물을 렌더링하는 함수
const renderPosts = postList => {
  // postList => json 받아오기
  // $postUl.innerHTML = postList;

  postList.forEach(post => {
    // 게시물 하나를 li태그로 만들어서 ul에 집어넣기
    // 템플릿 태그 가져오기
    const $template = document.getElementById('single-post');
    // 템플릿 태그에서 li태그 추출
    const $li = document.importNode($template.content, true)
    // console.log($li);
    $li.querySelector('h2').textContent = post.title;
    $li.querySelector('p').textContent = post.body;
    // => li에 죄다 집어넣고 => ul로 뽑음.
    $postUl.appendChild($li);
  });
};

// 서버에서 게시물 정보 가져오기
fetch(URL) //url에서 데이터 가져와
.then(res => res.json()) //response에서 json을 추출할거예요
.then(json => {
  console.log(json);
  //게시물 정보 화면에 그리기
  renderPosts(json);
})