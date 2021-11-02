"use strict";
const hellowWorld = "hello world";
console.log(hellowWorld);
const me = {
    name: "caleb",
    daysPracticing: 2,
};
console.log(me);
console.log('ME: ', me);
let x = "hello";
let ids = [1, 2, 3, 4];
let arr = ['hi', 1, true];
let person = [1, 'hi', false];
let employee;
employee = [
    [1, 'bob'],
    [2, 'jill'],
    [3, 'dandy'],
];
let productID = 22;
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.Up);
const Diablo = {
    id: 0,
    name: "Diabl0",
};
let cid = 1;
let customerId = cid;
console.log('customerId:', customerId);
let customerID2 = cid;
function addNum(x, y) {
    return x + y;
}
console.log(addNum(10, 11));
function log(message) {
    console.log(message);
}
const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
class Person {
    constructor(id, name, attack, hp, isMarried) {
        this.id = id;
        this.name = name;
        this.attack = attack;
        this.hp = hp;
        this.isMarried = isMarried;
        console.log(id, name);
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const caleb = new Person(1, 'caleb', 8, 20, false);
const brad = new Person(2, 'brad', 9, 15, true);
console.log(caleb.register());
function fight(Person1, Person2) {
    while (Person1.hp > 0 || Person2.hp > 0) {
        Person2.hp = Person2.hp - Person1.attack;
        console.log(`${Person1.name} attacked ${Person2.name} for ${Person1.attack} damage! ${Person2.name} has ${Person2.hp} hp left!`);
        Person1.hp = Person1.hp - Person2.attack;
        console.log(`${Person2.name} attacked ${Person1.name} for ${Person2.attack} damage! ${Person1.name} has ${Person1.hp} hp left!`);
        if (Person1.hp <= 0 || Person2.hp <= 0)
            break;
    }
    return `${Person1.name} has ${Person1.hp} and ${Person2.name} has ${Person2.hp}`;
}
fight(caleb, brad);
