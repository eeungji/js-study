class Student {
  constructor(name, teamHistory) {
    this.name = name;
    this.teamHistory = teamHistory;
  }
}

function start() {
  const nameList = [
    new Student('강지혜', [4, 6, 3]),
    new Student('김병모', [4, 1, 5]),
    new Student('김수빈', [7, 3, 4]),
    new Student('김예진', [3, 4, 5]),
    new Student('김요한', [7, 5, 6]),
    new Student('김은지', [3, 3, 7]),
    new Student('김주성', [1, 5, 4]),
    new Student('김한솔', [4, 3, 7]),
    new Student('문지은', [5, 7, 1]),
    new Student('박성진', [2, 6, 4]),
    new Student('박진우', [7, 4, 7]),
    new Student('배윤정', [4, 4, 1]),
    new Student('서정인', [3, 7, 2]),
    new Student('송나래', [6, 8, 2]),
    new Student('송지훈', [8, 4, 6]),
    new Student('송호성', [1, 8, 1]),
    new Student('신윤종', [1, 1, 7]),
    // new Student('이동혁', [5, 8]),
    new Student('이승연', [8, 7, 3]),
    new Student('이예진', [1, 6, 2]),
    new Student('이지효', [2, 5, 2]),
    new Student('이찬희', [6, 2, 6]),
    new Student('임제훈', [6, 6, 7]),
    new Student('전혜린', [5, 2, 5]),
    new Student('정재한', [8, 2, 4]),
    new Student('조경곤', [6, 5, 5]),
    new Student('주우빈', [2, 2, 1]),
    new Student('진상훈', [5, 3, 3]),
    new Student('한기범', [3, 1, 3]),
    new Student('황준원', [2, 1, 6]),
  ];

  let teamNo = 1;

  // 팀원 정보 배열
  const teams = [];

  // 팀원 수 배열
  const teamNumbers = [4, 4, 4, 4, 4, 4, 5];

  // 하나의 팀정보
  const teamList = [];

  let checkCount = 0;

  const checkHistory = (select) => {
    // 이전 히스토리와 겹치는 팀원이 있으면 스킵
    for (const person of teamList) {
      if (person === select) continue;

      for (let i = 0; i < person.teamHistory.length; i++) {
        if (person.teamHistory[i] === select.teamHistory[i]) {
          checkCount++;
          return false;
        }
      }
    }
    console.log(`${select.name}체크중: ${checkCount}회`);

    return true;
  };

  // 팀원 랜덤 생성 함수
  const makeTeam = (numOfPerson) => {
    while (teamList.length < numOfPerson) {
      const randomIndex = Math.floor(Math.random() * nameList.length);
      const select = nameList[randomIndex];

      if (checkHistory(select) || checkCount > 100) {
        checkCount = 0;
        teamList.push(select);
        nameList.splice(randomIndex, 1);
      }
    }

    teams.push({
      teamNo: teamNo++,
      teamList: teamList.map((t) => t.name),
    });

    teamList.splice(0);
  };

  // 팀원 정보 출력함수
  const printTeamInfo = () => {
    teams.forEach(({ teamNo, teamList }) => {
      console.log(`${teamNo}조 : [${teamList}]`);
    });
  };

  teamNumbers.forEach((n) => {
    makeTeam(n);
  });

  printTeamInfo();
}

//============[ execute ]=============//
(() => {
  start();
})();
