console.log('Mike Hunter using typescript nice😏')

let sales: number = 123_456_789;
console.log(sales);

let user: [number, string, number, boolean] = [1, "Hunter", 4, true];
console.log(user[1].length)
user.push('Josh')
console.log(user);

// using enum
// PascalCase

enum Size {
    Small = 1,
    Medium = 2,
    Large = 3
}

// console.log(Size);

// function
function calculateTax(income: number, taxYear = 2022): number {
    if ( taxYear < 2022)
        return income * 1.2;
    return income * 1.3;    
}


const calcTax = calculateTax(10_000, 2026)
console.log(calcTax);

function multiplyNum(num_1: number, num_2: number ): number {
    return num_1 * num_2;
}

console.log(multiplyNum(4, 5))

// objects

type Properties = {
    readonly id: number,
    name: string,
    retire: (date: Date) => void
    age?: number
}

let employee: Properties = {
    id: 2,
    name: "Mike",
    retire: (date: Date) => console.log(date)
}

let animal: Properties = {
    id: 1,
    name: "Cat",
    retire: (date: Date) => console.log(date),
    age: 31
}

let employee_2 = new Object(employee)
console.log(employee_2);

//union
function kgToLbs(weight: number | string): number {
    //narrowing
    if (typeof weight === "number") 
        return weight * 2.2
    else {
        return parseInt(weight) * 2.2
    }    
}

kgToLbs(10)
kgToLbs("kg")

//intersection 
let weight: number & string

type Draggable = {
    drag: () => void
}

type Resizeable = {
    resize: () => void
}

type UIWidget = Draggable & Resizeable

let textBox: UIWidget = {
    drag: () => {},
    resize: () => {}
}

 //literal types (exact, specific)
 type Quantity = 50 | "age";
 type Metric = "kg" | 20;

 let quantity: Metric = "kg";
 let quantity2: Quantity = 50;

// nullable type
function greet(name: string | null | undefined) {
    if (name)
        console.log(name.toUpperCase());
    else 
        console.log('Hola');
}

greet(undefined) 
greet(null)

type Customer = {
    birthday?: Date
}

function getCustomer(id: number): Customer | null | undefined {
    return id === 0 ? null : { birthday: new Date() }
}

let customer = getCustomer(1);
if (customer !== null && customer !== undefined)
// Optional property access operator
    console.log(customer?.birthday?.getFullYear());

// Optional element access operator
// customers?.[0]

// Optional call operator
let log: any = null
log('a')

interface Person {
    id: number,
    first_name: string,
    last_name: string,
    age: number,
    is_cool?: boolean
}

class Person {
    id: number
    first_name: string
    last_name: string
    age: number

    constructor(id: number, first_name: string, last_name: string, age: number) {
        this.id = id
        this.first_name = first_name
        this.last_name = last_name
        this.age = age
    }

    getFullName() {
        return `${this.first_name} ${this.last_name}`
    }
}

const mike = new Person(1, 'TypeScript', 'God', 42)
// console.log(mike.last_name);
console.log(mike.getFullName());


class Peasant extends Person {
    is_rich: boolean
  
    constructor(id: number, first_name: string, last_name: string, age: number, is_rich: boolean) {
        super(id, first_name, last_name, age)
        this.is_rich =  is_rich
    }
}

const peasant1 = new Peasant(2, 'Tom', 'Miller', 67, false)
console.log(peasant1.is_rich);


//using generics
function greetPerson<T>(first_name: T, last_name: T) {
    return `Hello ${first_name} ${last_name} how was did your python experience go?`
}

console.log(greetPerson<string>('Alex', 'Hunter'))
console.log(greetPerson<number>(20 , 40))

enum DirectionalStr {
    Up = "Up",
    Down = "Down",
    Left = "Left",
    Right = "Right"
}

enum DirectionalNum {
    Up = 2,
    Down = 4,
    Left = 6,
    Right = 8
}

console.log(DirectionalStr.Up);
console.log(DirectionalNum.Left);
