// dynamic string

const first = 'Tanjila';
const last = 'Eti';
// const name = first + ' ' + last;
const name = `${first} Akter ${last}`;
console.log(name);

const songName = `Oi kire Oi kire \n modhu modhu rosmalai `;
console.log(songName);

const numbers = [20, 22, 34, 25];
const student = { name: 'Tanjila', age: 20 };
const math = `The sum of ${numbers[2]} and ${student.age} is ${numbers[2] + student.age}`;
console.log(math);


function add(a, b) {
    return a + b;
}
console.log(add(2, 3));

// function expretion
const add1 = function (a, b) {
    return a + b;
}
console.log(add1(4, 3));

// arrow function
const add2 = (a, b) => a + b;
console.log(add2(4, 5));

const add3 = (num1, num2, num3, num4) => num1 + num2 + num3 + num4;
console.log(add3(2, 4, 7, 9));

const difference = (x, y) => x - y;
console.log(difference(7, 3));

const getThird = number => number[3];
const third = getThird([5, 7, 9, 12, 15]);
console.log(third);

const dubbleIt = number => number * 2;
console.log(dubbleIt(115));

const doMath = (x = 0, y = 0, z = 0) => {
    const sum = x + y + z;
    const multply = x * y * z;
    const result = sum + multply;
    return result;
}
console.log(doMath(4, 9));

// get array value without third bracket
const number = [3, 4, 5, 7, 9];
const arrayMax = Math.max(...number);
console.log(arrayMax);

const arrayMin = Math.min(...number);
console.log(arrayMin);

// array copy
const friends = [3, 5, 7, 9, 12, 15,];
const bondu = [...friends];
bondu.push(20);
console.log(bondu);
console.log(friends);

// object destructure
const actor = {
    name: 'aj',
    age: 30,
    phone: '01747474747',
    money: 5757575383838
}
const { phone, age: boyos, money: tk } = actor;
console.log(phone);
console.log(boyos);
console.log(tk);

// array destructure
const num = [45, 55];
const [fst, sec] = num;

function dubble(a, b) {
    return [a * 2, b * 2];
}
const [prothom, ditiyo] = dubble(6, 7);
console.log(prothom, ditiyo);

const glass = {
    name: 'glass',
    color: 'blue',
    price: 500,
    isClean: true
}
// do freeze
// Object.freeze(glass);
Object.seal(glass);
// do add
glass.source = 'bd';
// delete glass.isClean;
// do delete
const { isClean, ...shortglass } = glass;
console.log(shortglass);
console.log(glass);
const keys = Object.keys(glass);
const values = Object.values(glass);
const pair = Object.entries(glass);
console.log(keys);
console.log(values);
console.log(pair);

// default parameter
function ad(a = 0, b = 90) {
    return a + b;
}
console.log(ad(1, 5));

// template string
const a = 56;
const b = 65;
console.log(`The sum of ${a} and ${b} is ${a + b}`);

const square = x => x ** 2;
console.log(square(7));

const number1 = {
    nam: 'numeric',
    roll: 67
}
const { nam, roll } = number1;
console.log(nam);
console.log(roll);

// access value
const product = [{ price: 500 }];
console.log(product[0].price);

const user = {
    id: 5002,
    name: 'shariful raj',
    address: {
        first: 'nalcity',
        second: 'jhalakathi',
        third: 'barisal',
        city: 'dhaka'
    }
}
console.log(user.address.street?.third);

const products = {
    count: 5000,
    data: [
        { id: 1, name: 'samsung', price: 65000 },
        { id: 2, name: 'iphone', price: 150000 }
    ]
}
console.log(products.data[1].id);

const numbers1 = [4, 3, 9, 6, 23, 64, 5];
// const dodubble = [];
// for (const num of numbers1) {
//     const dubble = num * 2;
//     dodubble.push(dubble);
// }
// console.log(dodubble);

// function dodubble(numbers1) {
//     console.log('num now', numbers1);
//     return numbers1 * 2;
// }
// const output = numbers1.map(dodubble);
// console.log(output);

const dodubble = numbers1.map(numbers1 => numbers1 * 2);
console.log(dodubble);

const number2 = [5, 4, 78, 45, 12, 54];
const sum = number2.map(number2 => number2 + 5);
console.log(sum);

const friend = ['tim', 'jhon', 'michel', 'oliver'];
const lenghths = friend.map(frnd => frnd[1]);
console.log(lenghths);

const number3 = [4, 5, 23, 65, 70, 58];
const result = number3.forEach(n => {

})
console.log(result);

const players = [75, 67, 40, 36, 10, 99];
const seclected = players.filter(p => p % 3 === 0);
console.log(seclected);

const frnds = ['tom', 'jhon', 'michel', 'oliver'];
const myFrnds = frnds.filter(f => f.length < 4);
console.log(myFrnds);

const product1 = [
    { id: 1, name: 'lenovo', price: 65000 },
    { id: 2, name: 'dell', price: 45000 },
    { id: 3, name: 'hp', price: 65000 },
    { id: 4, name: 'mac', price: 125000 }
];
const names = product1.map(p => p.name);
console.log(names);
const expensive = product1.filter(p => p.price > 50000);
console.log(expensive);
const affordable = product1.find(p => p.price > 50000);
console.log(affordable);
const mot = product1.reduce((prev, curr) => prev + curr.price, 0);
console.log(mot);

product1.forEach(p => console.log(p.id));

const number4 = [2, 4, 8, 55, 34, 45];
const total = number4.reduce((prev, curr) => prev + curr, 0);
console.log(total);

class Product {
    country = 'Bangladesh';
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    speak(talk) {
        console.log(`saradin pok pok kori r ${talk}`)
    }
}
const lemon = new Product('Tanjila', 20);
console.log(lemon);
lemon.speak('hasahasi kori');

class Vehicle {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    move(carName) {
        console.log(`${carName} chole na chole na re`);
    }
}
const vehicle = new Vehicle('audi', 250);
console.log(vehicle);
vehicle.move('thelaghari');

class Bus extends Vehicle {
    constructor(name, price, seat, ticketPrice) {
        super(name, price);
        this.seat = seat;
        this.ticketPrice = ticketPrice;
    }
}
const bus = new Bus('audi', 250, 5, 1200);
console.log(bus);

