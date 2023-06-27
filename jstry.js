// // // // function math(x,y) {   //functon to add and multiply two numbers
// // // //     return x*y,x+y; 

// const { Button } = require("bootstrap");

// // // // }
// // // // //calling the math function
// // // // let result = math.call(this,2,4)
// // // // console.log(result);

// // const student = {
// //     FirstName : "Ram",
// //     Address : "Anamnagar",
// //     Age : 23,
// // };

// // function info() {
// //     const string= " He is ${this.First_name}. from ${this.Address}. and is ${this.Age} years old.";
// //     console.log(string);
// //     }


info.call(student) ;

// object definition
const human = {
    firstName: "Judah",
    lastName: "Parker",
    age: 26,
  };
  
  // function definition
  function greet() {
    const string = "My name is ${this.firstName} ${this.lastName}. I am ${this.age} years old.";
    console.log(string);
  }
  
// //   // passing object as this value in call() method
// //   greet.call(human);

// // object definition
// const human = {
//     firstName: "Judah",
//     lastName: "Parker",
//     age: 26,
//   };
  
//   // function definition
//   function greet() {
//     const string = `My name is ${this.firstName} ${this.lastName}. I am ${this.age} years old.`;
//     console.log(string);
//   }
  
//   // passing object as this value in call() method
//   greet.call(human);

// let text = "The temperature is " + toCelsius(87) + " Celsius.";
// console.log(text);

// function toCelsius(fahrenheit) {
//   return (5/9) * (fahrenheit-32);
// }

<Button onclick="myFunction()">Click Me</Button>

function myFunction(){
  let text= "Hello World";
  console.log(text.toUpperCase);
}


