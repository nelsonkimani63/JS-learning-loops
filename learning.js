//function declaration:  a function, declared as a separate statement, in the main code flow.

function learnJS1() {
    console.log("I am learning JS");
}
learnJavascript()


function learnJavascript () {
    console.log("I am learning Javascript today ");
};
learnJavascript()

//function expression: created inside an expression or inside another syntax construct

let learnJavascript = function(){
    console.log("I am learning Javascript today ");
};
learnJavascript()

//Return keyword

let learnJS3 = function (){
    return 'I am learning JS';
  }
  console.log(learnJS3())

//Arrow function


//variables




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