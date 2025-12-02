const students=[
    {name:"Alice",score:75},
    {name:"Bob",score:90},
    {name:"Charlie",score:85},
]
const passedusers=students.filter(student=>student.score>=80).map(student=>student.name);
console.log(passedusers);
