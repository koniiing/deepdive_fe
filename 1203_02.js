const person={name:'Ghost',age:20,mbti:null};
console.log(Object.keys(person).length);
const values=Object.values(person);
console.log(values.includes(null));


const tasks=[
    {id:1, text:"walk"},
    {id:2, text:"running"},
];

const newTask={id:3, text:"programming"};
const finalTasks=[...tasks,newTask];
console.log(finalTasks);
