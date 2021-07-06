//function declaration:  a function, declared as a separate statement, in the main code flow.

function learnJS() {
    console.log("I am learning JS");
}
learnJS()

//function expression: created inside an expression or inside another syntax construct

let learnJS = function(){
    console.log("I am learning JS today");
};
learnJS()

//Return keyword

let learnJS = function (){
    return 'I am learning JS';
  }
  console.log(learnJS())

//Arrow function




//for-loops

//loop through an array
let people = ['Kabiru', 'Nelson', 'George', 'Kings', 'Vena', 'Dolly', 'Wairimu', 'Nate']

for (names = 0; names<people.length; names++) {
    console.log(people[names])
}

//another array loop

let favoriteFood = ['Chapati', 'Beans', 'Avocado', 'Pussy']

for (fav = 0; fav<favoriteFood.length; fav++){
  console.log('I love eating ' +favoriteFood[fav])

}

//loop through an object

var data = {
    name: 'Nelson',
    age: 31,
    maritalStatus: false 
}

for (var elem in data) {
    console.log(elem, data[elem])
}

//reverse loops
for(counter=10; counter>=0; counter--) {
    console.log(counter)
}


//while-loops