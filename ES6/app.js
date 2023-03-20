
// --------------TEMPLATE LITERALS-------------------------

// let word1 = 'Dylan';
// let word2 = 'Israel';
// let num1 = 2;
// let num2 = 3;

// // const fullName = `${num1 + num2} ${word2}`;
// let example = `${word1}
// ${word2}
// `;
// // console.log(fullName);
// console.log(example)
// document.getElementById('example').innerText = example;


// let firstName = "Amir";
// let LastName = "Sayab";
//  var fullname=`${firstName} 
//  ${LastName}`
//  ;
// //  console.log(fullname);
// function change(){
//     document.getElementById("msg").innerText=  fullname;

// }


// ---------------------DECONSTRUCTING OBJECTS----------------------

// const player = {
//     name: 'Lebron James',
//     club: 'LA Lakers',
//     address: {
//       city: 'Los Angeles'
//     }
//   };

//   // console.log( player.address.city );

//   const { name, club, address: { city } } = player;

//   // console.log(`${name} plays for ${club}`);

//   console.log(`${name} lives in ${city}`);

// var student={
//     names:'amir',
//     class:'5A',
//     address:{
//         city:'karachi'
//     }
// };
// // console.log(student.address.city);

// // var {name, club }=student;
// // same as student.name or student .club

// var {names, club, address:{city} }=student;


// console.log(`${names} lives in ${city}`);

// --------------deconstructing array----------
// let arr=['amir','sayab','khattak']
// let [firstname, middlename ,lastname]=arr;

// console.log(firstname);
// console.log(lastname);
// middlename='khan';
// console.log(middlename);
// console.log(arr);


// ----------------object literals---------------------

// function addressMaker(city,state){
// const newaddress={city,state}; //instead of city:city and state:state
// console.log(newaddress);
// }

// addressMaker('karachi' , 'pakistan')

// challenge)()()()

// function addressMaker(address) {
//     const {city, state}=address;
//     const newAddress = {
//         city,
//         state,
//         country: 'United States'
//     };
//     console.log(`${city}
// ${state}
// ${newAddress.country}`)
// }

// addressMaker({city: 'Austin', state: 'Texas'});

// ------------------For of Loop------------------------

// let incomes=[120,340,567]
// let total=0;

// for(var income of incomes){
//     console.log(income)
//     total+=income;
// }

// console.log(total);

// let fullname="amir sayab khattak";

// for(var char of fullname){
// console.log(char);
// }

// const students = [ 
//     { names: "John", city: "New York" },
//     { names: "Peter", city: "Paris"},
//     { names: "Kate", city: "Sidney" }
// ]

// const {names, city}=students;
// for(const msg of students){
//     console.log();
//     console.log(`${msg.names} lives in ${msg.city}`);
// }

// ---------------spread operators-----------------------

// let contacts=['amir','sami','jawad','sufi','urk','rizo','anees','umer','faizi','etc'];

// let favouriteContacts=['noor',...contacts]

// console.log(favouriteContacts);

// let address={
//     city:'karachi',
//     state: 'Pakistan'
// }

// let student={
//     name:'amir',
//     ...address
// }
// console.log(student);

// const shoppingList = ["eggs", "milk", "butter"];

// const shoppingBasket=[...shoppingList,'yogurt']

// console.log(shoppingBasket);


// -------------rest operator---------------
// function add(...nums) {

//     console.log(nums);
// }

// add(4, 5, 7, 8, 12)

// =---------------------- Arrow Function ------------------------

// //function declaration
// function breakfastMenu() {
//     return "I'm going to scrambled eggs for breakfast";
// }

// //anonymous function
// const lunchMenu = function() {
//     return "I'm going to eat pizza for lunch";
// }

// const breakfastMenu= ()=> "i m going to scrambled eggs for breakfast.";
// console.log(breakfastMenu());

// const breakfastMenu= (food)=> `i m going to scrambled ${food} for breakfast.`;
// console.log(breakfastMenu('eggs'));

// ------default param----- 
//  const breakfastMenu= (food='somefood')=> `i m going to scrambled ${food} for breakfast.`;
// console.log(breakfastMenu());



// ------------includes() instead of  index of()-------------------

// let arr=[1,2,3,4,5]

// console.log(arr.indexOf(0)); // -1 
// console.log(arr.includes(0)); // false

// const listIngredients =  [ "flour", "sugar", "eggs", "butter" ];

// if(listIngredients.includes('chocolate')){
//     console.log('We are going to make a chocolate cake');
// }
// else
// {
//     console.log("We can't make a chocolate cake because we are missing the ingredient chocolate")
// }


// ------------import & Export --------------------
// export const data = [1,2,3]; //example.js

// import { data } from './example.js';  // index.js
// let updatedData = data;

// updatedData.push(5)
// console.log(updatedData);


// **Challenge**

// Inside of the file data.js, create a function add, that will receive 2 numbers and return the sum of them.
// Make sure to export this function.

// - Import the function add, into the index.js file
// - Create a variable result, that will hold the result of the function add when you call it and pass 2 numbers into it.
// - print into the console the value of the variable result;

// export var add = (a,b) => {
//     return a+b;
// }

//  import { add } from './data.js';

//  var result=add(5,6);
//  console.log(result);



// -------------padStart() padEnd()-----------------

// let example="amir";

// console.log(example.padStart(10,'a'));

// console.log(example.padEnd(10,'a'));

// let example = 'YouTube.com/CodingTutorials360';

// console.log(example.padStart(100).length);
// console.log(example.padEnd(1));

// ---------------------class------------------------------

//export class Animal {
//     constructor(type, legs) {
//         this.type = type;
//         this.legs = legs;
//     }

//     makeNoise(sound = 'Loud Noise') {
//         console.log(sound);
//     }
// get metaData() {
//     return `Type: ${this.type}, Legs: ${this.legs}`;
// }

// static return10() {
//     return 10;
// }
// }

// export class Cat extends Animal {
//     constructor(type, legs, tail) {
//         super(type, legs);
//         this.tail = tail;
//     }
// }

// import { Animal } from './animal.js';

// let cat = new Animal('Cat', 4);

// cat.legs = 3;
// cat.makeNoise('Meow');
// console.log(cat.legs)

// console.log(cat.metaData)

// ----challenge classs---------
// **Classes Challenge**:

// Create a class Player with the following:
// - Add a Name and Country properties
// - Add a function that when it runs should print into the console ("Messi was born in Argentina");
// - Make sure to adapt this function to receive dynamic Names and Clubs.

// Create a Subclass called TennisPlayer that extends from the class Player
// - Add a new property Age.
// - Add a function that when it runs should print into the console something similar ("Rafael Nadal is 34 years old and knows how to play Tennis");
// - Make sure the Name and Age are dynamic.

// class Player {
//     constructor(name, country) {
//         this.name = name;
//         this.country = country;
//     }
    
//     introduce() {
//         console.log(`${this.name} was born in ${this.country}`);
//     }
// }

// const messi = new Player("Messi", "Argentina");

// messi.introduce();

// class TennisPlayer extends Player {
//     constructor(name, country, age) {
//         super(name, country);
//         this.age = age;
//     }
    
//     playTennis() {
//         console.log(`${this.name} is ${this.age} years old and knows how to play Tennis`);
//     }
// }

// const roger = new TennisPlayer( "Roger Federer", "Spain", 38);

// roger.playTennis();






// ---------------------Promises-------------------------------

// const buyFlightTicket = () => {
//     return new Promise( (resolve, reject) => {
//         setTimeout( () => {
//             const error = true;
            
//             if( error ) {
//                 reject("Sorry your payment was not successful")
//             } else {
//                 resolve("Thank you, your payment was successful");
//             }
//         }, 3000)
//     })
// }

// buyFlightTicket()
// .then( (success) => console.log(success))
// .catch( (error) => console.log(error) );

// const buyFlightTickets = () => {
//    return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const error = false;
//             if (error) {
//                 reject("Sorry your payment was not successful")
//             } else {
//                 resolve("Thank you, your payment was successful")
//             }
//         }, 3000);
//     })
// }
// // buyFlightTickets()
// // .then( (success) => console.log(success) )
// // .catch( (error) => console.log(error) );

// buyFlightTickets()
// .then((success)=>console.log(success))
// .catch((error)=>console.log(error));


// =---=-=-=-=-=-= challenge-=-=-=-=-======-----

/**
 * Promises - Challenge
 * Create a promise that returns some user data and throws an error when not found.
 * Log the user data when listening to the promise as well as log the error.
 * 
 * Docs - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
*/

// const userData = new Promise((resolve, reject) => {
//     const error = false;
    
//     if(error) {
//         reject('500 Level Error');
//     } else {
//         resolve({
//             firstName: 'Dylan',
//             age: 32,
//             email: 'DylansEmail310@gmail.com'
//         });
//     }
// });

// userData
//     .then((data) => console.log(data))
//     .catch((error) => console.log(error));


// const userData=()=>{
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const error=false;
//             if (error) {
//                 reject("error")
//             } else {
//                 resolve("shubkamnayen")
//             }
//         }, 2000);
//     })
// }

// userData().then(data => console.log(data)).catch(error => console.log(error));

// ---------------fetch-----------------------------------------------------------------------

// fetch("https://jsonplaceholder.typicode.com/comments/1")
// .then(Response => {

//     console.log(Response.status);
//     console.log(Response.ok);
//     console.log(Response.header);
    
//     return   Response.json();})


// .then(data => console.log(data))

// fetch("https://jsonplaceholder.typicode.com/comments", {
//     method: "POST",
//     body: JSON.stringify({
//         postid: 1,
//         name: "amir",
//         email: "amirsayab@gmail.com",
//         body:"good to see u :)"
//     })

// })
// .then(Response =>   Response.json())
// .then(data => console.log(data))


// -----------------Async & Await ---------------------------------

// let photos=[];

// const photoUpload = () =>{
//     let uploadStatus = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             photos.push("profilePic");
//             resolve("photoUploaded");
//         }, 3000);
//     })
//     let result= uploadStatus;
//     console.log(result);
//     console.log(photos.length);
// }

//   const photoUpload = async () =>{
//     let uploadStatus = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             photos.push("profilePic");
//             resolve("photoUploaded");
//         }, 3000);
//     })
//     let result=  await uploadStatus;
//     console.log(result);
//     console.log(photos.length);
// }

// photoUpload();

// async & await challenge 


const apiUrl = "https://api.chucknorris.io/jokes/random";

fetch("https://api.chucknorris.io/jokes/random")
    .then((Response)=>Response.json())
    .then((data)=>console.log(data))




const api='https://api.chucknorris.io/jokes/random';

const randomJokes = async() => {
    const Response= await  fetch(api);
    const data = await Response.json();

    console.log(data.value);

}

randomJokes();


//---------------set in ES6-----------------

// const exampleSet = new Set([1,1,1,1,2,2,2,2]);

// exampleSet.add(5);
// exampleSet.add(5).add(17);

// console.log(exampleSet.has(5));

// exampleSet.clear();

// console.log(exampleSet.size);