const person = {
    found: 2,
    message: "Found 2 persons",
    result: [
    {
    name: {
    common: "John",
    fullName: ["John", "Doe"]
    },
    age: 32,
    isMale: false,
    address: {
    street: "13/A St Joseph",
    house: 10,
    },
    },
    {
    name: {
    common: "Humayoun",
    fullName: ["Humayoun", "Kabir"]
    },
    age: 33,
    isMale: false,
    address: {
    street: "13/A St Lucia",
    house: 11,
    },
    },
    ]
    };

// ------------------------------------------------------------------------

const numberOfperson = person.message;

const numPerson = document.getElementById('total-person').innerText = numberOfperson;


const person1 = person.result[0];
const name1 = person1.name.common;
const age1 = person1.age;
const street1 = person1.address.street;
const house1 = person1.address.house;

const person2 = person.result[1];
const name2 = person2.name.common;
const age2 = person2.age;
const street2 = person2.address.street;
const house2 = person2.address.house;

// console.log(name1, age1, house1, street1)


document.getElementById('p1name').innerText = name1
document.getElementById('p1age').innerText = age1
document.getElementById('p1street').innerText =  street1
document.getElementById('p1house').innerText =  house1

document.getElementById('p2name').innerText = name2
document.getElementById('p2age').innerText = age2
document.getElementById('p2street').innerText =  street2
document.getElementById('p2house').innerText =  house2
