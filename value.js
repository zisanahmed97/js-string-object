const person = {
    name: 'sodor uddin',
    age: 25,
    profession: 'developer',
    salary: 25000,
    married: true,
    'fav place':['bandorban','cox-bajar','rangamati'],
}

person.salary= 35000;
person['age']= 26;
console.log(person);

const keyName = 'profession';
console.log(person[keyName]);

person[keyName]='dev-ops';
console.log(person);