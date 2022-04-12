const person = {
    name: "kritik", 
    age : 22
}

// console.log(person);

function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}



// const brad = new Person('kritik', 'jain', 22, "brown");
// console.log(brad);
// console.log(person);


let arr = [1, 2, 3, 4, 5];

let ara = arr.filter((element) => {
    return element % 2 !== 0;
})

console.log(ara);

