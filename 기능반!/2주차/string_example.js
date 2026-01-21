//자바스크립트 변수 선언 방법
//var, let, const
// var : 변수선언, 옜날거
// let: 변수선언, 요즘거
// const: 상수선언, 요즘꺼

//var 로 선언한 변수들은 window에 등록된다. 오염시킨다(적역 오염)
//만약 전역 객체에 등록되어 있는 프로퍼티로 변수를 지으면
//모든 같은 이름의 전역 객체가 오염된다

// var : 변수가 최상단으로 끌어올려진다(호이스팅), 변수 선언 전에 호출할 수 있다, 값은 undefined지만 호출은 된다
        // a=10이라는 변수를 보면 최상단에 a가 선언되고 undefined로 초기화 된다. 이후 값에 10이 할당된다.
// let : 변수가 최상단으로 끌어올려지긴 한다, 변수에 선언 전에 접근이 불가능한 상태다.
        // let a 가 최상단에 선언은 되지만 할당되기 전까지 출력할수는 없다.

// 데이터 타입
// numder, string, boolean, undefined, null, (두개 더 있음 써놓기)
//undefined, null: undefined는 할당이 안된 것이고, null은 인위적으로 할당을 한거다. 그래서 프로그래머들은 되도록 undefined를 안보이게 하려고 한다.

// numder, string, boolean 과 undefined, null 의 차이
//프로토타입, 계산

//함수 선언 방법도 3개인데 차이점이 존재한다.(알아보기)

//==과 ===이 있는데 ==은 양쪽이 문자는 달라도 의미가 같으면 참이고 ===은 양쪽이 완전히 똑같아야 참이다. (mdn 참고)
//비슷하게 !=과 !==도 있다. (연산자/불일치 연산자)

function hello(){
    console.log("안녕하세요")
}
hello();

function hello1(name){
    console.log(`안녕하세요 ${name} 님!`)
}
hello1("이우진")

function add(a, b){
    console.log(a+b)
}
add(3,4);

function isEven(num){
    if(num%2 == 0){
        return true;
    }
    else{
        return false;
    }
}
console.log(isEven(2));
console.log(isEven(3));

for (let i = 0; i < 10; i++){}
// switch(){}
const arr = [];//배열
const obj = {};//객체

arr.push(1);
console.log(arr)

const num = 3.141592;
console.log(num.toFixed(1))
console.log(String.prototype)
// string.prototype
// 대부분의 함수는 변수 자체에는 영향을 주지 않는다 = 바꾸었을때만 그렇게 표시되는 것
// length = 길이를 알아냄
// includes = 표함하고 있는지 확인
// indexOF = 해당하는 문자가 몇번째에 있는지 확인
// repeat = 문자를 반복 시킨다.
// replace = 특정 단어를 원하는 단어로 바꾼다.(맨 앞에 있는것만)
// replaceAll = 특정 단어에 해당하는 모든 단어를 바꾼다.
// split = 특정 단어를 모두 삭제하고 그 단어를 기준으로 문자가 나누어진다.
// slice, substring = 특정 인덱스를 제외한 부분을 자른다.
// toLowerCase, toUpperCase = 소문자로, 대문자로
// trim = 공백을 없앤다.
const a = "김수한무"

console.log(a.length);
console.log(a.includes(""))
