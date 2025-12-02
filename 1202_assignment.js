const numbers = [5, 2, 11, 1, 25, 9, 32, 10];
// 1. numbers 배열에서 짝수만 추출하시오
console.log(numbers.filter((num)=>num%2===0));

// 2. numbers 배열에서 각 요소를 제곱한 새 배열을 만드시오
const newNumbers=numbers.map((num)=>num**2);
console.log(newNumbers);

// 3. numbers 배열을 내림차순으로 정렬하시오
console.log(numbers.sort((a,b)=>a-b).reverse());

// 4. numbers 에 숫자 9가 포함되었는지 확인하시오
console.log(numbers.includes(9));

// 5. numbers 배열에서 10보다 작은 값만 2배로 만든 새 배열을 만드시오
const underTen=numbers.filter(num=>num<10).map(num=>num**2);
console.log(underTen);

// 6. 친구이름중에 'Camel'이 있는지 확인하는 함수 만들기

const friends = ["Irangi", "Camel", "Shoopa"];
function findMyFriend(names) {
    return names.includes("Camel")
}

console.log(findMyFriend(friends)); // true