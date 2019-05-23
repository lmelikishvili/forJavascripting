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
/*
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
*/




/***********************
boolean logic
*/
/*
var firstName = 'john';
var age = 25;

if(age < 13){
    console.log(firstName + ' is boy!');
}else if(age > 13 && age < 20){
    console.log(firstName + ' is teenager!');         
}else if(age >= 20 || age < 30){
    console.log(firstName + ' is yong man!')
}
*/



/***********************
Ternary Operator and Switch Statemant
*/

/*
var firstName = 'John';
var age = 25;

//Ternary Operator
age >= 18 ? console.log(firstName + ' drinks beer') : console.log(firstName + ' drinks juice');

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);
*/

/*if(age >= 18){
    drink = 'beer';
}else{
    drink = 'juice';
}*/




//Switch Statements

/*
var job = 'instructor';
switch(job){
    case 'teacher' :
    case 'instructor' :
        console.log(firstName + ' teachs kids coding');
        break;
    case 'driver' :
        console.log(firstName + ' drives blue bus');
        break;
    case 'designer' :
        console.log(firstName + ' desinging beatiful websites');
        break;
        default :
        console.log('doing something');
}

age = 30
switch(true){
    case age < 13:
        console.log(firstName + ' is a boy');
        break;
    case age > 13 && age < 20:
        console.log(firstName + ' is teenager');
        break;
    case age >= 20 && age < 30:
        console.log(firstName + ' is yong man');
        break;
    default:
        console.log(firstName + ' is a man');
}
*/


/***********************
Truthy and Falsy Values and Equality Operators
*/

// falsy values: undefined, null, 0, '', NaN
// trutly values: NOT falsy values

var height;

height = 23;

if (height || height === 0){
    console.log('Variable is defined');
}else{
    console.log('Variable has been NOT defined');
}

// Equality operators

if(height == '23'){
    console.log('The == operator does type coercion!!!!@@@@@');
}
































