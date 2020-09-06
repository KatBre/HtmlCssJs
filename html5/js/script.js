var number = 10;
let number2 = number; //kopiujemy wartość

console.log(number, number2);
number2 = 20;
console.log(number, number2);

// typy referencyjne - {} obiekt, [] tablica, () funkcja => {}
let person = {
    firstName: 'John',
    lastName: 'Smith'
};

let newPerson = person; //kopiujemy adres
console.log(person, newPerson);

newPerson.firstName = 'Mark';
console.log(person, newPerson);

// var, let, const
// const myNumber = 10;
// myData = 11;

const numbersArray = [1, 2, 3, 4, 5, 6];
console.log(numbersArray[numbersArray.length + 5]);

let myData = null;
console.log(myData);

// Hoisting
console.log(myName);
var myName = 'Anna'; // var działa w całym programie

// Temporary Dead Zone
let myOtherName = 'Kate'; // let działa od momentu jego użycia
console.log(myOtherName);

myFunction();

function myFunction() {
    console.log('Hello world!')
}

const myNumber = 10;

const peopleArray = [];
peopleArray.push('Eva');
console.log(peopleArray);

console.log(typeof peopleArray);
console.log(typeof {});
console.log(Array.isArray([]));
console.log(1 === 1);
console.log(1 === '1');
console.log(1 == 1);
console.log(1 == '1');

// zmienne referencyjne
console.log({} === {}); // porównujemy referencje
console.log({} == {});
console.log(_.isEqual({}, {}));

// sprzwdzenie instancji
console.log([] instanceof Object);
console.log([]);
console.log(!!0); // rzutowanie number na boolean
console.log(Boolean(1));
console.log(typeof + '1'); // rzutowanie stringa na number
console.log(0.1 + 0.2 === 0.3);
console.log(0.1 + 0.2 === 0.3.toFixed(1));
const loremIpsum = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur praesentium mollitia in id corporis facilis voluptas recusandae? Et maiores deleniti nemo culpa. Iste ipsa at quia totam vitae molestiae culpa.';
console.log(loremIpsum.match(/[A-Za-z]+/g).join(' '));
console.log();
console.log(parseInt('FFFF', 16));
// 1111 => F
// 1110 => E
// 1100 => D
// 1100 => C
// .
// .
// 0000 => 0

class Cyclist {

    constructor(bicycle, helmet, vMAx) {
        this.bicycle = bicycle;
        this.helmet = helmet;
        this.vMAx = vMAx;
    }

    doCyclistWearHelmet() {
        console.log(
            // Elvis operator
            this.helmet === true
                ? 'Cyclist wear helmet (:'
                : 'Cyclist does not wear helmet :c');
    }

    isCyclistFast() {
        console.log(this.vMAx > 40 ? 'Yes, this is fast cyclist' : 'No, the cyclist is slow');
    }
}

const cyclist1 = new Cyclist('Giant', true, 35);

cyclist1.doCyclistWearHelmet();
cyclist1.isCyclistFast();

const cyclists = [];

cyclists.push(new Cyclist('Giant1', false, 35));
cyclists.push(new Cyclist('Giant2', true, 45));
cyclists.push(new Cyclist('Giant3', true, 25));
cyclists.push(new Cyclist('Giant4', true, 15));
cyclists.push(new Cyclist('Giant5', false, 55));
cyclists.push(new Cyclist('Giant6', true, 20));
cyclists.push(new Cyclist('Giant7', true, 28));
cyclists.push(new Cyclist('Giant8', true, 10));

console.log(cyclists);

// function test() {} => test = () => {}

console.log(cyclists.filter((el, index) => el.helmet === true));

const cyclistsOnTour = cyclists.map((el, index) => {
    const cyclist = el;
    cyclist.startNumber = index + 1;
    return cyclist;
});
console.log(cyclistsOnTour);

const data = new Promise((resolve, reject) => {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => resolve(response.json()))
        .catch(error => reject(error))        
});

data
    .then(dataFromAPI => {
        const userTask = dataFromAPI.filter((el) => el.userId === 2);
        const documentContainer = document.querySelector('#todoList');
        userTask.forEach((el) => {
            const htmlEl = document.createElement('p');
            htmlEl.innerText = el.title;
            documentContainer.appendChild(htmlEl);
        })
    })
    .catch(err => console.log(err));




