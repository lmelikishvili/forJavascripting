/***********************
Variables and Date Types
*/

/*
var firstName = 'Levani';
console.log(firstName);

var lastName = 'Melikishvili';
var age = 28;
var fullAge = true;
console.log(fullAge, lastName, age);

var job;
console.log(job);

job = 'Teacher';
console.log(job);
*/




/***********************
Varaible mutation and type coercion
*/
/*
//Type coersion
var firstName = 'Levani';
var age = 31;

console.log(firstName + ' ' + age);

var job, isMarried;
job = 'teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried);

// Variable mutation
age = 'twenti eight';
job = 'Driver';

alert(firstName + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried);

var lastName = prompt('What is his last Name?');
console.log(firstName + ' ' + lastName);
*/



/***********************
Basic operators
*/

/*
var year, yearJohn, yearMark;
year = 2018;
ageJohn = 28;
ageMark = 33;

//Math Operators

yearJohn = year - ageJohn;
yearMark = year - ageMark;

console.log(yearJohn);

console.log(year + 2);
console.log(year * 2);
console.log(year / 10);


//logical Operators

var johnOlder = ageJohn < ageMark;
console.log(johnOlder);


//typeof Operators

console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Mark is older Than jhon');
*/

/***********************
Operator precedence
*/
/*
var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

//Multiple Operators
var isFullAge = now - yearJohn >= fullAge; // true
console.log(isFullAge);


//Grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);


//Multiple assignments
var x, y;
x = y = (3 + 5) * 4 - 6;
console.log(x, y);

//More Operators
x *= 2;
console.log(x);
x += 10;
console.log(x);
x--;
console.log(x);
*/



/***********************
CODING CHALANGE
*/
/*
var massJohn, massMark;
massJohn = 80.4;
massMark = 90.5;

var heightJohn, heightMark;
heightJohn = 1.60;
heightMark = 1.80;


var bmiJohn = massJohn / (heightJohn * heightJohn);
var bmiMark = massMark / (heightMark * heightMark);

var bmiMarkIsHignt = bmiMark > bmiJohn;
console.log("Is Mark's BMI higer than John's? " + bmiMarkIsHignt);
*/



/***********************
if/else statement
*/

var firstName = 'John';
var civilStatus = 'single';

if(civilStatus === 'married') {
    console.log(firstName + ' is married!');    
} else {
    console.log(firstName + ' not married');
}


var isMaarried = true;

if(isMaarried){
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' not married!');
}


var massJohn, massMark;
massJohn = 80.4;
massMark = 190.5;

var heightJohn, heightMark;
heightJohn = 1.60;
heightMark = 1.80;


var bmiJohn = massJohn / (heightJohn * heightJohn);
var bmiMark = massMark / (heightMark * heightMark);
console.log(bmiJohn, bmiMark);

if(bmiJohn > bmiMark) {
    console.log('John\'s BMI is higher than Mark\'s!');
} else {
    console.log('Mark\'s BMI is higher than John\'s');
}
















