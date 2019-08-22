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
/*
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
*/


/***********************
CODING CHALANGE 2
*/

/*
var teamJohnM1 = 89;
var teamJohnM2 = 120;
var teamJohnM3 = 103;

var teamJohnAve = (teamJohnM1 + teamJohnM2 + teamJohnM3) / 3;
console.log(teamJohnAve);

var teamMarkM1 = 116;
var teamMarkM2 = 94;
var teamMarkM3 = 123;

var teamMarkAve = (teamMarkM1 + teamMarkM2 + teamMarkM3) / 3;
console.log(teamMarkAve);


var teamMaryM1 = 97;
var teamMaryM2 = 134;
var teamMaryM3 = 105;

var teamMaryAve = (teamMaryM1 + teamMaryM2 + teamMaryM3) / 3;
console.log(teamMaryAve);


if(teamJohnAve > teamMarkAve && teamJohnAve > teamMaryAve){
    console.log('Winner is John\'s Team!!!');
}else if(teamMarkAve > teamJohnAve && teamMarkAve > teamMaryAve){
    console.log('Winner is Mark\'s Team!!!');
}else if(teamMaryAve > teamJohnAve && teamMaryAve > teamMarkAve){
    console.log('Winner is Marys\'s Team!!!');
}else{
    console.log('Martch is Draw!!!');
}
*/



/***********************
Functions
*/

/*
function calculateAge(birthYear){
    return 2018 - birthYear;
}

function yearsUntilRetirement(year, firstName){
    var age = calculateAge(year);
    var retirement = 65 - age;
    if(retirement > 0){
        console.log(firstName + ' Retires in ' + retirement + ' years.');
    }else{
        console.log(firstName + ' is already retired.')
    }
}

yearsUntilRetirement(1991, 'goka');
*/





/***********************
Function Statements and Expressions
*/

//Function declaaration
//function wharDoYouDo(job, firstName){}

//Function expression
/*
var whatDoYouDo = function(job, firstName){
    switch(job){
        case 'teacher':
            return firstName + ' teaches kids coding.';
        case 'driver':
            return firstName + ' drives blu bus.';
        case 'designer':
            return firstName + ' desing beautiful websites.';
        default:
            return firstName + ' doing somethings.';
    }
}

console.log(whatDoYouDo('teacher', 'John'));
console.log(whatDoYouDo('driver', 'Jane'));
console.log(whatDoYouDo('designer', 'Mark'));
console.log(whatDoYouDo('cop', 'Joe'));
*/



/***********************
Arrays
*/
/*
//initialize Array
var names = ['John', 'Mark', 'Jane'];
var years = new Array(1992, 1969, 1948);

console.log(names.length);

//Mutated Array data
names[2] = 'jonsy';
console.log(names[2]);

//Different data types
var john = ['John', 'Smith', 1990, 'designer', false];

console.log(john);
john.push('blue');
john.unshift('Mr.');
console.log(john);

john.pop();
john.shift();
console.log(john);

console.log(john.indexOf(23));
console.log(john.indexOf('designer'));

var isDesigner = john.indexOf('designer') === -1 ? 'Jhon is not Designer' : 'john is a Designer';
console.log(isDesigner);
*/



/***********************
CODE CHALANGE 3
*/
/*
var bill1 = 124;
var bill2 = 48;
var bill3 = 268;


function billsCalculator(billAmount){
    var cash;
    if(billAmount < 50){
        cash = billAmount * 0.2;
        return cash;
    }else if(billAmount > 50 && billAmount < 200){
        cash = billAmount * 0.15;
        return cash;
    }else if(billAmount > 200){
        cash = billAmount * 0.1;
        return cash;
    }else{
        console.log('Somthing is Wrong!!!');
    }
}


var bills = [bill1, bill2, bill3,];
var tips = [billsCalculator(bills[0]), billsCalculator(bills[1]), billsCalculator(bills[2])];
console.log(tips);
var finalCash = [bills[0] + billsCalculator(bills[0]), bills[1] + billsCalculator(bills[1]), bills[2] + billsCalculator(bills[2])];
console.log(finalCash);
*/



/***********************
Objects and properties
*/
/*
//Object literal
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    Job: 'teacher',
    isMarried: 'false'
};

console.log(john.firstName);
console.log(john['lastName']);
var x = 'birthYear';
console.log(john[x]);

john.Job = 'designer';
//john['isMarried'] = true;
//console.log(john);
//
////new object syntax
//var jane = new Object();
//jane.firstName = 'Jane';
//jane.birthYear = 1969;
//jane['lastName'] = 'Smith';
//console.log(jane);
//*/



/***********************
Objects and methods
*/

/*
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    Job: 'teacher',
    isMarried: 'false',
    calcage: function(){
        this.age = 2018 - this.birthYear;
    }
};

john.calcage();
console.log(john);
*/


/***********************
CODING CHALANGE 4
*/

/*
var john = {
    name: 'John',
    mass: 80,
    height: 1.60,
//    calcBMI: function(){
//        this.bmi = this.mass / (this.height * this.height);
////    }
//}
//
//var mark = {
//    name: 'Mark',
//    mass: 80,
//    height: 1.80,
//    calcBMI: function(){
//        this.bmi = this.mass / (this.height * this.height);
//    }
//}
//john.calcBMI();
//mark.calcBMI();
//
//if(john.bmi > mark.bmi){
//    console.log('John\'s BMI is Higher than Mark\'s with: ' + john.bmi );
//}else if(mark.bmi > john.bmi){
    console.log('Mark\'s BMI is Higher than John\'s with: ' + mark.bmi );
}else{
    console.log('John and Mark have equal BMI');
}
*/



/***********************
loops and iteration
*/

//for (var i = 1; i <= 20; i +=2) {
//    i === 5 ? console.log('im fcking equal 5') : i < 5 ?console.log('im ' + i + ' not yet equal 5') : console.log('im ' + i + ' greather than 5');
//}



/***********************
030 Coding Challenge 5
*/


var johnsFamily = {

    bills: [124, 48, 268, 180, 200],
    tips : [],
    total: [],
    tipCalc: function(){

        for(i = 0; i < this.bills.length; i++) {

            if(this.bills[i] <= 50){
                t = this.bills[i] * 0.2;
            }
            else if(this.bills[i] > 50 && this.bills[i] < 200){
                t = this.bills[i] * 0.15;
            }
            else if(this.bills[i] >= 200){
                t = this.bills[i] * 0.1;
            }
            this.tips.push(t);
            this.total.push(this.bills[i] + t);
        }
    }
}


var marksFamily = {
    bills: [77, 375, 110, 45],
    tips: [],
    total: [],
    billCalc: function(){
        for(i = 0; i < this.bills.length; i++){
            if(this.bills[i] <= 100){
                t = this.bills[i] * 0.2;
            }
            else if(this.bills[i] > 100 && this.bills[i] < 300){
                t = this.bills[i] * 0.1;
            }
            else if(this.bills[i] >= 300){
                t = this.bills[i] * 0.25;
            }
            this.tips.push(t);
            this.total.push(this.bills[i] + t);
        }
    }
}

marksFamily.billCalc();
console.log(marksFamily.tips);

johnsFamily.tipCalc()
console.log(johnsFamily.total)




function calcAve(arr){
    t = 0;
    for(i = 0; i < arr.length; i++){
        t = t + arr[i];
    }
    ave = t / arr.length;
    return ave;
}

var ave = calcAve(johnsFamily.tips);
console.log(ave);














