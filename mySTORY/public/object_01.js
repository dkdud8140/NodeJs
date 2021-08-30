const arr1 = [100,200,300,400,500];

// 배열의 값들을 변수값으로 추출하고 싶을 때

// 원래 정석적인 방법
const 백_01 = arr1[0];
const 이백_01 = arr1[1];
const 삼백_01 = arr1[2];

//JS에서는 배열의 요소를 각각 변수에 복사할 떄
// 다음과 같은 코드로 작성이 가능하다
const [백, 이백, 삼백, 사백, 오백] = arr1;

// obj JSON 객체에서 각 요소값을 추출하여 사용하고자 할 때
const obj = {name : "Mr.kim", tel:"010000"}

//원래의 정석적인 방법
let 이름 = obj.name;
이름 = obj["name"];
let 전화 = obj.tel;
전화 = obj["tel"];

// obj 객체로부터 각각 navme, tel 값을 추출하여 
// 배열 변수로 사용할 수 있도록 복제하기
const {name, tel } = obj;