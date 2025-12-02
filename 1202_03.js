//object
const puppy={
    name:'bobby',
    age:3,
    breed:"sichu",
};
console.log(puppy.name);
const type="breed";
console.log(puppy.breed);
console.log(puppy[type]);



//추가
puppy.age=5;
console.log(puppy.age);

//객체에 키값 추가
puppy.color="white and black";
console.log(puppy);

//삭제
delete puppy.color;
console.log(puppy);
