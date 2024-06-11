
import Product from "./components/Product.js";
import ProductItem from "./components/ProductItem.js";

// 상품 데이터
const p1 = new Product('에어팟', 200000, '에어팟으로 노래를 들어요.', 'https://www.apple.com/v/airpods/v/images/overview/airpods_3rd_gen__dhy5bknhvtqq_large.jpg');
const p2 = new Product('족발', 40000, '냠냠쩝쩝 족발은 앞다리야~', 'https://i.namu.wiki/i/I63sEiy-8vUXVhV-I0IZiS9ntT0INuKXgBYAE3QqUvOlToSoEqSgpvEbUmxsFTXtoBRN4WJolyAFEAlDdeZFhQ.webp');

// 서버에서 전송된 JSON
const productList = {
  products: [
    p1, 
    p2, 
    new Product('요구르트', 500, '요거어어어어어어르트', 'https://img-cf.kurly.com/shop/data/goods/1630556476801z0.jpg'),
    new Product('쿼터파운더 치즈버거', 10000, '쿼팥치 먹고싶다', 'https://s7d1.scene7.com/is/image/mcdonalds/202201_3426-005_DoubleQuarterPounderwithCheese_832x472:1-3-product-tile-desktop?wid=765&hei=472&dpr=off'),
  ],

  render() {
    const $prodList = document.createElement('ul');
    $prodList.classList.add('product-list');
    // 반복해서 li태그를 생성
    // console.log('products: ', this.products);
    this.products.forEach((prod) => {
      const product = new ProductItem(prod);
      $prodList.appendChild(product.render());
    });

    // div#app에 ul추가
    document.getElementById('app').appendChild($prodList);
  },
};

productList.render();
