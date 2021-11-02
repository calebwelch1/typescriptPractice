const hellowWorld: string = "hello world"
console.log(hellowWorld);

interface User {
    name: string;
    daysPracticing: number;
}

const me: User = {
    name: "caleb",
    daysPracticing: 2,
}

console.log(me);

// you can just run tsc in terminal to compile all ts files

// also grab something from our index.html

console.log('ME: ', me);

// other types

let x: any = "hello"
// any type can be anything 0.0

let ids: number[] = [1, 2, 3, 4];
// how we set an array

let arr: any[] = ['hi', 1, true];
// any array can have anything

let person: [number, string, boolean] = [1, 'hi', false];
// a tuple very strange

let employee: [number, string][]

employee = [
    [1, 'bob'],
    [2, 'jill'],
    [3, 'dandy'],
]
// tuple arr

let productID: string | number = 22;
// union, allows either of what you put after pipe

enum Direction1 {
    Up,
    Down,
    Left,
    Right,
}
// enum allows constants
console.log(Direction1.Up);

type Game = {
    id: number;
    name: string,
}
// very similar to an Interface

const Diablo: Game = {
    id: 0,
    name: "Diabl0",
}

//TYPE ASSERTION

let cid: any = 1;
let customerId = <string>cid;
console.log('customerId:', customerId);

// cid is an any type, 
// but if we want to set customerID to the cid 
// we can assert it as the type we want it to be

let customerID2 = cid as number;

// second way to assert a type;

function addNum(x: number, y: number): number {
    return x + y;
}
// notice how we can assert each argument, then after the function
// before the brackets we can assert what we want returned;
console.log(addNum(10, 11));

// void.. for when you do nothing

function log(message: string | number): void {
    console.log(message);
}

// type can use unions
// interfaces cannot use unions

interface UserInterface {
    name: string;
    age: number;
    videogamesPlayed?: number;
}

// interface enforces each param like a class
// if you add ? after a variable name
// it becomes optional

// can also interface functions

interface mathFunc {
    (x: number, y: number): number
}

const add: mathFunc = (x: number, y: number): number => x + y;
const subtract: mathFunc = (x: number, y: number): number => x - y;

// Classes
// classes can have variables and functions,
// a constructor will run everytime a class is instatiated
interface PersonInterface {
    id: number
    name: string
    register(): string;
}
// we make a class and also show how to extend it from an interface
class Person implements PersonInterface {
    id: number
    name: string
    attack: number
    hp: number
    protected isMarried: boolean
    private isCool: boolean;

    constructor(id: number, name: string, attack: number, hp: number, isMarried: boolean, isCool: boolean) {
        this.id = id;
        this.name = name;
        this.attack = attack;
        this.hp = hp;
        this.isMarried = isMarried;
        this.isCool = isCool;
        console.log(id, name);
    }

    register() {
        return `${this.name} is now registered`
    }
}

const caleb = new Person(1, 'caleb', 8, 20, false, true)
const brad = new Person(2, 'brad', 9, 15, true, true)
// so constructor will run since we made a new Person object

//private vars in classes can't be accessed anywhere
// protected can be accessed from class or anything extended from class

console.log(caleb.register());

function fight(Person1: Person, Person2: Person):string {
    while (Person1.hp > 0 || Person2.hp > 0) {
        Person2.hp = Person2.hp - Person1.attack;
        console.log(`${Person1.name} attacked ${Person2.name} for ${Person1.attack} damage! ${Person2.name} has ${Person2.hp} hp left!`);
        Person1.hp = Person1.hp - Person2.attack;
        console.log(`${Person2.name} attacked ${Person1.name} for ${Person2.attack} damage! ${Person1.name} has ${Person1.hp} hp left!`);
        if (Person1.hp <= 0 || Person2.hp <=0 ) break;
    }
    return `${Person1.name} has ${Person1.hp} and ${Person2.name} has ${Person2.hp}`;
}

fight(caleb, brad);
// subclass
class Employee extends Person {
    position: string

    constructor(id: number, name: string, attack: number, hp: number, isMarried: boolean, isCool: boolean, position: string){
        super(id, name, attack, hp, isMarried, isCool);
        this.position= position;
        // super lets us not have to reinstantiate all the stuff
        // from the original class just the new stuff
    }
}

const clerk = new Employee(3, 'Sean', 1, 1, false, false, 'Clerk');

//Generics

function getArray<T>(items: T[]): T[] {
    return new Array().concat(items);  
}

let numArray = getArray<number>([1,2,3,4])
let strArray = getArray<string>(['joe', 'bob', 'sally'])

// numArray.push('hello');
// we can push anything on cause we said we want type any

// but with placeholder we can assign type when we make variable!!!



