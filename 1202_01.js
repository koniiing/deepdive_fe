const price=[1000,2000,3000];
const newPrice=price.map((data)=>data*2);
console.log(newPrice);

const age=[15,,22,19,30,12];
const adult=age.filter((data)=>data>=20);
console.log(adult);

const str=["a","b","c","d","e","c"];
console.log(str.indexOf("c"));
console.log(str.lastIndexOf("c"));
console.log(str.indexOf("f"));//없을땐 -1
console.log(str.includes('c'));
console.log(str.includes('C'));

str.reverse();
console.log(str);

const numbers=[1,5,3,8,2,13,32];

numbers.sort((a,b)=>a-b);
console.log(numbers);
numbers.sort((a,b)=>b-a);
console.log(numbers);

const myfruits="apple,banana,mango";
myArray=myfruits.split(",");//데이터를 나눠서 배열을 만들어줌
console.log(myArray);

console.log(myArray.join("-"));




