"use strict";
var _a;
console.log('Mike Hunter using typescript nice😏');
let sales = 123456789;
console.log(sales);
let user = [1, "Hunter", 4, true];
console.log(user[1].length);
user.push('Josh');
console.log(user);
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
function calculateTax(income, taxYear = 2022) {
    if (taxYear < 2022)
        return income * 1.2;
    return income * 1.3;
}
const calcTax = calculateTax(10000, 2026);
console.log(calcTax);
function multiplyNum(num_1, num_2) {
    return num_1 * num_2;
}
console.log(multiplyNum(4, 5));
let employee = {
    id: 2,
    name: "Mike",
    retire: (date) => console.log(date)
};
let animal = {
    id: 1,
    name: "Cat",
    retire: (date) => console.log(date),
    age: 31
};
let employee_2 = new Object(employee);
console.log(employee_2);
function kgToLbs(weight) {
    if (typeof weight === "number")
        return weight * 2.2;
    else {
        return parseInt(weight) * 2.2;
    }
}
kgToLbs(10);
kgToLbs("kg");
let weight;
let textBox = {
    drag: () => { },
    resize: () => { }
};
let quantity = "kg";
let quantity2 = 50;
function greet(name) {
    if (name)
        console.log(name.toUpperCase());
    else
        console.log('Hola');
}
greet(undefined);
greet(null);
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(1);
if (customer !== null && customer !== undefined)
    console.log((_a = customer === null || customer === void 0 ? void 0 : customer.birthday) === null || _a === void 0 ? void 0 : _a.getFullYear());
let log = null;
log('a');
class Person {
    constructor(id, first_name, last_name, age) {
        this.id = id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.age = age;
    }
    getFullName() {
        return `${this.first_name} ${this.last_name}`;
    }
}
const mike = new Person(1, 'TypeScript', 'God', 42);
console.log(mike.getFullName());
class Peasant extends Person {
    constructor(id, first_name, last_name, age, is_rich) {
        super(id, first_name, last_name, age);
        this.is_rich = is_rich;
    }
}
const peasant1 = new Peasant(2, 'Tom', 'Miller', 67, false);
console.log(peasant1.is_rich);
function greetPerson(first_name, last_name) {
    return `Hello ${first_name} ${last_name} how was did your python experience go?`;
}
console.log(greetPerson('Alex', 'Hunter'));
console.log(greetPerson(20, 40));
var DirectionalStr;
(function (DirectionalStr) {
    DirectionalStr["Up"] = "Up";
    DirectionalStr["Down"] = "Down";
    DirectionalStr["Left"] = "Left";
    DirectionalStr["Right"] = "Right";
})(DirectionalStr || (DirectionalStr = {}));
var DirectionalNum;
(function (DirectionalNum) {
    DirectionalNum[DirectionalNum["Up"] = 2] = "Up";
    DirectionalNum[DirectionalNum["Down"] = 4] = "Down";
    DirectionalNum[DirectionalNum["Left"] = 6] = "Left";
    DirectionalNum[DirectionalNum["Right"] = 8] = "Right";
})(DirectionalNum || (DirectionalNum = {}));
console.log(DirectionalStr.Up);
console.log(DirectionalNum.Left);
//# sourceMappingURL=index.js.map