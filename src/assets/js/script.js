/*
//string
var firstName = 'John';
console.log(firstName);
var lastName = 'Smith';

//number
var age = 28;

//boolean
var fullAge = true;
console.log(fullAge);

// undefined var w/o assignment 
var job;
console.log(job);

//assign job a value
job = 'Teacher';
console.log(job);
*/

/*

**** TYPE COERCION ****

var firstName = 'John';
var age = 28;
var job = 'teacher';
var isMarried 
  isMarried = false;

//console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

 */

/* 
**** TYPE Mutation **** 
age = 'twenty eight';
job = 'driver';

alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

prompt('What is his last name?');
// You can also store the users input from the prompt function into a variable.

var lastName = prompt('What is his last name?');
console.log(firstName + ' ' + lastName);
*/

/* 
**** Basic Operators ****  
//Determine John's age by subtracting his age from the current year.

var now, yearJohn, yearMark;
now = 2020;
ageJohn = 32;
ageMark = 33;
yearJohn = now - ageJohn;
yearMark = now - ageMark;
console.log(yearJohn);

//Math Operators
console.log(now + 2);
console.log(now * 2);
console.log(now / 10);

// Logical operator
var johnOlder = ageJohn < ageMark;
console.log(johnOlder);

// Typeof Operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Mark is older than John');
var x;
console.log(typeof x);
*/

/*
**** Operators Precidence ****
var now = 2020 ;
var yearJohn = 1979;
var fullAge = 18;

//Multiple Operators
var isFullAge = now - yearJohn >= fullAge;
console.log(isFullAge);

//The average age of John and his friend
var ageJohn = now - yearJohn;
var ageMark = 35;
//calulate the sum and divide by 2
var average = (ageJohn + ageMark) / 2;
console.log(average);

//Multiple assignments (works from right-to-left)
var x, y;
x = (3 + 5) * 4 -6;// 8 * 4 - 6 // 32 -6 // =26
x = y = (3 + 5) * 4 - 6;// 8 * 4 - 6 // 32 -6 // =26
console.log(x);
console.log(x,y);

//More Operators
x *= 2; // is the same as x = x*2;
console.log(x);
x += 10; // same as x = x + 10
console.log(x);

x++; // same as x = x + 1; x+= 1;
x--;
x++;
console.log(x);
  */

/*
**** Code  Challenge ****  

//store mass and height in variables
var marksMass, marksHeight, johnsMass, johnsHeight;
marksMass = 81.6466;
marksHeight = 1.524;
johnsMass = 90.7185;
johnsHeight = 1.8288;

johnsBMI = johnsMass / (johnsHeight *= 2);
console.log('John\'s BMI is ' + johnsBMI);
marksBMI = marksMass / (marksHeight *= 2);
console.log('Mark\'s BMI is ' + marksBMI);

var highestBMI = marksBMI < johnsBMI;
console.log('Is Mark\'s BMI higher than John\'s? ' + highestBMI);
*/

/* 
**** If / else ****


var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married'){
  console.log(firstName + ' is married');
} else{
  console.log(firstName + ' will marry soon');
}

//Solve the code challenge above with if/else statement by logging to the console who has the highest BMI.

var marksMass, marksHeight, johnsMass, johnsHeight;
marksMass = 81.6466;
marksHeight = 1.524;
johnsMass = 190.7185;
johnsHeight = 1.8288;

johnsBMI = johnsMass / (johnsHeight *= 2);
console.log('John\'s BMI is ' + johnsBMI);
marksBMI = marksMass / (marksHeight *= 2);
console.log('Mark\'s BMI is ' + marksBMI);

if(marksBMI > johnsBMI){
  console.log('Mark\'s BMI is higher than John\'s'); 
} else{
  console.log('John has the higher BMI.');
}
*/

/**** Boolean Statements ***
var firstName = 'John';
var age = 16;

if (age < 13){
  console.log(firstName + ' is a boy.');
}else if(age >=13 && age < 20){
  console.log(firstName + ' is a teenager.')
}
else{
  console.log(firstName + ' is a man.')
}
*/

const firstName = 'William';
const lastName = 'Johnson';
const person = {
  name: 'Bob',
  age: '30'
}
const keywords = 'marketing,web design,animation'
const str = 'This is interesting isn\'t it?'

//const value has to remain the same, but can mutate



let val;
//Concatenation

val = firstName + ' ' + lastName;


//Get the last character of a string
val = firstName.charAt(firstName.length -1);

//Get the 3rd character, should be 'n'
val = lastName.charAt('3');

//Get keywords and add spaces at commas using split()

val = keywords.split(',');

//Changing values in the object 'person'
val = person.name;

val = person.name = 'Gale';

// Includes boolean. Results should equal false, the string 'Hello' is not in str
val = str.includes('Hello');

console.log(val);

// Create an object and display with HTML using template strings
const pet = {
  Name: 'Cyrus',
  Animal: 'Dog',
  Breed: 'Bullterrier',
  Personality:'fun',
  Greeting: function hello(){
     
      return 'chirp chirp';
    }
    
  
}

let html;

// html = `
//   <ul>
//    <li>Animal: ${pet.Animal}</li>
//    <li>Animal: ${pet.Animal = 'Cat'}</li>
//    <li>Animal: ${pet.Name}</li>
//    <li>Animal: ${pet.Name = 'Boris'}</li> 
//    <!--Call a function-->
//    <li>Say Hello: ${pet.Greeting()}</li>  
//    <li>Say Hello: ${pet.Greeting()}</li>  
//   </ul>
// `;
// document.body.innerHTML = html;