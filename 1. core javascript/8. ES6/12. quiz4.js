const traders = [
  {
    trader: {
      name: '김철수',
      city: '대전',
    },
    year: 2023,
    value: 500000,
  },
  {
    trader: {
      name: '박영희',
      city: '서울',
    },
    year: 2022,
    value: 600000,
  },
  {
    trader: {
      name: '김철수',
      city: '대전',
    },
    year: 2022,
    value: 1200000,
  },
  {
    trader: {
      name: '박영희',
      city: '서울',
    },
    year: 2023,
    value: 650000,
  },
  {
    trader: {
      name: '뽀로로',
      city: '부산',
    },
    year: 2023,
    value: 800000,
  },
  {
    trader: {
      name: '루피',
      city: '대전',
    },
    year: 2022,
    value: 780000,
  },
  {
    trader: {
      name: '김철수',
      city: '대전',
    },
    year: 2023,
    value: 1500000,
  },
  {
    trader: {
      name: '김철수',
      city: '대전',
    },
    year: 2022,
    value: 2500000,
  },
  {
    trader: {
      name: '김철수',
      city: '대전',
    },
    year: 2022,
    value: 500000,
  },
];

// 1. **2023년에 대전에서 발생한 모든 거래의 총액을 계산해주세요.**
// let totalInDaejeon2023 = 0;
// for (const trs of traders) {
//   if (trs.year === 2023 && trs.trader.city === '대전') {
//     totalInDaejeon2023 += trs.value;
//   }
// }

const totalInDaejeon2023 = traders
  .filter((trs) => trs.year === 2023 && trs.trader.city === '대전')
  .reduce((total, trs) => total + trs.value, 0);

console.log(`2023년 대전 총 거래액: ${totalInDaejeon2023}`);

// 2. **부산에서 거래한 모든 거래자의 이름을 배열에 담아 출력해주세요.**
console.log('======================');

// const nameListInBusan = [];
// for (const trs of traders) {
//   if (trs.trader.city === '부산') {
//     nameListInBusan.push(trs.trader.name);
//   }
// }

const nameListInBusan = traders
  .filter((trs) => trs.trader.city === '부산')
  .map((trs) => trs.trader.name);

console.log('부산 거래자 이름리스트: ', nameListInBusan);

// 3. **모든 거래 중 가장 높은 거래액을 가진 거래의
//   거래자 정보(이름, 도시)와 거래액을 출력해주세요.**
console.log('============================');

// let highestTransaction = traders[0];
// for (const trs of traders) {
//   if (highestTransaction.value < trs.value) {
//     highestTransaction = trs;
//   }
// }

const highestTransaction = traders.reduce((max, trs) =>
  max.value < trs.value ? trs : max
);

console.log(
  `가장 높은 거래액 정보 - 이름: ${highestTransaction.trader.name}, 도시: ${highestTransaction.trader.city}, 거래액: ${highestTransaction.value}`
);

// 4. **각 도시별로 발생한 총 거래액을 객체 형태로 매핑해주세요.
//   예를 들어, `{서울: 총거래액, 부산: 총거래액}`과 같은 형태입니다.**
console.log('=============================');

// const totalByCity = {};  // { 서울: 500000, 대전: 30032030, ... }

// for (const trs of traders) {
//   const city = trs.trader.city;
//   if (totalByCity[city]) { // 이 도시는 한번 누적된 적이 있음
//     totalByCity[city] += trs.value;
//   } else {  // 이 도시는 한번도 나온적이 없던 도시임
//     totalByCity[city] = trs.value;
//   }
// }
// console.log(totalByCity);

// const totalByCity = traders.reduce((totalByCity, trs) => {
//   const city = trs.trader.city;
//   if (totalByCity[city]) {
//     // 이 도시는 한번 누적된 적이 있음
//     totalByCity[city] += trs.value;
//   } else {
//     // 이 도시는 한번도 나온적이 없던 도시임
//     totalByCity[city] = trs.value;
//   }
//   return totalByCity;
// }, {});

const totalByCity = traders.reduce((totalByCity, trs) => {
  const city = trs.trader.city;
  totalByCity[city] = (totalByCity[city] || 0) + trs.value;
  return totalByCity;
}, {});

console.log(totalByCity);

// 5. **거래액이 700000원 이상인 거래를 모두 찾아,
//   해당 거래의 연도별로 분류해주세요. 결과는
//   `{2022: [...거래정보], 2023: [...거래정보]}`와 같은 형태가 되어야 합니다.**

// 6. **각 거래자별로 그들이 진행한 거래의
//   평균 거래액을 계산해주세요.
//   결과는 `{거래자이름: 평균거래액}` 형태의 객체가 되어야 합니다.**

// 7. **2022년과 2023년 각각에서 가장 많은 거래를 한 거래자의
//   이름과 그 거래 횟수를 출력해주세요.**

// 8. **모든 거래 중 거래액이 중간값인
//   거래의 정보(거래자 이름, 도시, 연도, 거래액)를 출력해주세요.**

// 9. **각 도시에서 진행된 거래의 수를 계산해주세요.
//   결과는 `{도시이름: 거래수}` 형태의 객체여야 합니다.**

// 10. **거래액을 기준으로 모든 거래를 오름차순으로 정렬한 후,
//   정렬된 리스트를 출력해주세요.
//   각 거래 정보는 거래자 이름, 도시, 연도, 거래액을 포함해야 합니다.**
