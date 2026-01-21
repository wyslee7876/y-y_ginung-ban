const a1 = [1,2,3];
const a2 = [4,5,6];
// concat = 원본 변환 없이 배열 N 개를 합친다.
// every = 모두
// some = 일부

// const r1 = a3.every((value) => {
//     console.log(`${value}<10`);
//     if(value < 10){
//         return true
//     }else{
//         return false
//     }
// });
//console.log(a.___(M) => M === "abc");

// push(뒤에 추가)
// pop(뒤에 제거)
// 배열에 영향을 준다!
// FILO: First In Last Out

// filter = 조건에 맞는 값만 빼낸다.
// forEach = 그냥 for문 (반환 값 x)
// map = 값을 원하는 형태로 반환

// includes = 포함하는가?
// join = 특정 단어를 인덱스마다 합친다

// find = 값이 있으면 해당하는 값을 반환
// findIndex = 값이 있으면 해당하는 인덱스를 반환

// reverse = 배열을 뒤집는다.(원본 변경 O)
// toReversed = 배열을 뒤집는다.(원본 변경 X)
// 원본이 변경되면 오염되었다 판단하기 때문에 원본을 되도록이면 바꾸지 않은 것이 좋다.

// sort = 오름차순 정렬 (원본 변경 O)
// toSorted = ``원본 변경 X

// slice = 특정 인덱스를 자른다 (원본 변경 X)
// splice = ``원본 변경 O

// reduce

// function getMaxNumber(arr){
//     let a = arr[0];
//     arr.forEach(element => {
//         if(element > a){
//             a = element
//         }
//     });
//     return a;
// }
// console.log(getMaxNumber([1,7,3,5,10,4]));

//음수일때 a가 b보다 앞에 있어라
//양수일때 a가 b보다 뒤에 있어라
function getMaxNumber(arr){
    return arr.toSorted((a, b)=> b - a)[0];//반대로 정렬한 이후 첫번째 값 출력
}//서로 뺐을때 -가 되느냐 +가 되느냐에 따라서 계속 바뀌면서 결국 정렬된다
//이렇게 하는 이유는 기존 sort함수는 10같은 자리숫자를 1과 0으로 나누어 보기 때문

console.log(Array.prototype);
function countOccurrences(arr, element){
    const result = arr.filter((a) => a === element);
    return result.length;
}
console.log(countOccurrences([1,2,3,2,4,2,5],2));

function areAllEven(arr){
    return arr.every((a) => a%2 === 0);
}
console.log(areAllEven([2,4,6,8]))

//10번
function commonElements(arr1, arr2){
    const newArr = [];
    for (let i = 0;i<arr1.length; i++){
        if (newArr.includes(arr1[i])){
            continue;
        }
        for (let j = 0;j<arr2.length;j++){
            if (arr1[i] === arr1)//요기까지
        }
    }
}
