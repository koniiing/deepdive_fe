const number=[30,25,12,3,8];
const fruits=["banana","lemon","apple mango","lime","melon"];

const banana=fruits.filter((fruit)=>{fruit==="banana"
});
console.log(banana);

const numbers=[1,2,3,4,5];
const doubleNumbers=numbers.map((num) => num**2);
console.log(doubleNumbers)
const letters=fruits.map((letter)=>letter.length);
console.log(letters);
