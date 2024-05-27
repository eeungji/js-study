function shuffle(array) {
  let currentIndex = array.length, randomIndex;

  // 남은 요소가 없을 때까지 반복
  while (currentIndex != 0) {
    // 남은 요소 중에서 하나를 무작위로 선택
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // 그 요소를 배열 마지막 요소와 교환
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

class Student {
  constructor(name, teamHistory) {
    this.name = name;
    this.teamHistory = teamHistory;
    this.assignedCount = 0; // 학생이 배정된 팀의 횟수
  }

  // 특정 팀에 배정 가능한지 확인
  canJoinTeam(teamNo) {
    return !this.teamHistory.includes(teamNo);
  }

  // 학생을 특정 팀에 배정
  assignToTeam(teamNo) {
    this.assignedCount++;
    if (!this.teamHistory.includes(teamNo)) {
      this.teamHistory.push(teamNo); // 팀 이력에 추가
    }
  }
}

function start() {
  const students = [
    new Student('강지혜', [4, 6]),
    new Student('김병모', [4, 1]),
    new Student('김수빈', [7, 3]),
    new Student('김예진', [3, 4]),
    new Student('김요한', [7, 5]),
    new Student('김은지', [3, 3]),
    new Student('김주성', [1, 5]),
    new Student('김한솔', [4, 3]),
    new Student('문지은', [5, 7]),
    new Student('박성진', [2, 6]),
    new Student('박진우', [7, 4]),
    new Student('배윤정', [4, 4]),
    new Student('서정인', [3, 7]),
    new Student('송나래', [6, 8]),
    new Student('송지훈', [8, 4]),
    new Student('송호성', [1, 8]),
    new Student('신윤종', [1, 1]),
    // new Student('이동혁', [5, 8]),
    new Student('이승연', [8, 7]),
    new Student('이예진', [1, 6]),
    new Student('이지효', [2, 5]),
    new Student('이찬희', [6, 2]),
    new Student('임제훈', [6, 6]),
    new Student('전혜린', [5, 2]),
    new Student('정재한', [8, 2]),
    new Student('조경곤', [6, 5]),
    new Student('주우빈', [2, 2]),
    new Student('진상훈', [5, 3]),
    new Student('한기범', [3, 1]),
    new Student('황준원', [2, 1]),
  ];

  console.log(students.length);

  const teams = [];
  const teamNumbers = [4,4,4,4,4,4,5];
  let teamNo = 1;

  teamNumbers.forEach((teamSize) => {

    shuffle(students);

    const currentTeam = [];

    while (currentTeam.length < teamSize) {
      // 가능한 모든 학생 중에서 아직 해당 팀에 배정되지 않은 학생을 선택
      const availableStudents = students.filter((s) => s.canJoinTeam(teamNo));
      let selectedStudent;

      if (availableStudents.length > 0) {
        // 아직 이 팀 번호에 배정되지 않은 학생 중에서 선택
        selectedStudent = availableStudents.reduce((prev, curr) =>
          prev.assignedCount < curr.assignedCount ? prev : curr
        );
      } else {
        // 모든 학생이 이미 이 팀 번호에 배정된 경우, 가장 적게 배정된 학생 선택
        selectedStudent = students.reduce((prev, curr) =>
          prev.assignedCount < curr.assignedCount ? prev : curr
        );
      }

      if (selectedStudent) {
        selectedStudent.assignToTeam(teamNo);
        currentTeam.push(selectedStudent.name);
      }
    }

    teams.push({
      teamNo: teamNo,
      teamList: currentTeam,
    });
    teamNo++;
  });

  // 팀 정보 출력
  teams.forEach((team) =>
    console.log(`Team ${team.teamNo}: [${team.teamList.join(', ')}]`)
  );
}

start();
