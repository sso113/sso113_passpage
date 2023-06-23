// 합격자 이름 데이터
const dataFile = [
  { name: "권지민", phone: "010-2260-0952", pass: 1 },
  { name: "홍민우", phone: "010-8947-0574", pass: 1 },
  { name: "박주희", phone: "010-2371-0240", pass: 1 },
  { name: "김소영", phone: "010-9150-5193", pass: 1 },
  { name: "이세민", phone: "010-3666-9401", pass: 1 },
  { name: "김서진", phone: "010-8406-8995", pass: 1 },
  { name: "오승연", phone: "010-5824-9132", pass: 1 },
  { name: "박소정", phone: "010-5616-7839", pass: 1 },
];

const nameElement = document.getElementById("subtextbox");

for (let i = 0; i < dataFile.length; i++) {
  const name = dataFile[i].name;

  nameElement.innerText = name;
}
