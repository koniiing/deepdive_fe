const a="hello";
const b=3;
const c=b>5;

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);

console.log(Boolean(0)); //false
console.log(Boolean(1));//truthy
console.log(Boolean(undefined));//falsy
console.log(Boolean(null));//falsy
console.log(Boolean(" "));//truthy
console.log(Boolean(""));//falsy
