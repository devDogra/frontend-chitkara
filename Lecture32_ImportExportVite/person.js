export default function Person(name, age) {
    this.name = name; 
    this.age = age; 
}

export function introduce(person) {
    console.log(`I am ${person.name}, ${person.age} yrs old`);
}
export function speak(person) {
    console.log(`${person.name}: Hello`);
}