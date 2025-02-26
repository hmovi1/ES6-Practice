const person = {name: 'Jack william', age: 17 , Job: 'facebooker', gfName: 'Ema Watson', address: 'Kochzu Khet', friends:['Tom Hanks', 'Tom cruise','Tom Yearn'] }

const {phone, gfName, address , salary} = person
console.log(phone, gfName, address , salary);

const friends = ['Sakib Khan', 'Arman Khan','Salman Khan', 'Shahrukh Khan']
const [a,b,...c] = friends;

console.log(c);