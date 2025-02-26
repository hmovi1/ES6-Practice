const students = [
    {id: 21, name: 'David lynch'},
    {id: 31, name: 'David Ryans'},
    {id: 42, name: 'Brown Mason'},
    {id: 62, name: 'Ian Mackellen'}
];

const names = students.map(s => s.name);
const ids = students.map(s=> s.id);
const greater = students.filter( s=> s.id > 40);
const greater1 = students.find( s=> s.id >40);
console.log(names);
console.log(ids);
console.log(greater);
console.log(greater1);