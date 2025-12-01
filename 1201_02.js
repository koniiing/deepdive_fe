const numbers=[1,2,3,4,5,6,7,8,9,10];
//1.짝수 추출
const evenNumbers=numbers.filter((num)=>num%2==0)
console.log(evenNumbers);
//2.짝수의 제곱수
const doubleNumbers=evenNumbers.map((num)=>num**2);
console.log(doubleNumbers);

const array=[13,5,22,10,5,15,82];
console.log(array.slice(3,5));
const count=array.filter((even)=>even%2==0).length;
console.log(count);
const multiples5=array.filter((multiple)=>multiple%5==0);
console.log(multiples5.length);





