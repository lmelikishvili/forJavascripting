//Function constructor

/*
var Person = function(name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
};

Person.prototype.calcAge = function(){
    console.log(2019 - this.yearOfBirth);
};


Person.prototype.LastName = "Melikishvili";

var meliqa = new Person("meliqa", 1987, "netadmin");

meliqa.calcAge();
console.log(meliqa.LastName);
*/

//Object.create

/*
var personProto = {
    calcAge: function(){
        console.log(2019 - this.yearOfBirth);
    }
}

var meliqa = Object.create(personProto);
meliqa.name = "Levani";
meliqa.age = 31;
meliqa.job = "Netadmin";
meliqa.yearOfBirth = 1987;

var jane = Object.create(personProto, {
    name: { value: "jane"},
    yearOfBirth: { value: 1995},
    job: { value: "designer"}
});
*/


//Primitives vs Objects
/*
//Primitives
var a = 23;
var b = a;
a = 46;
console.log(a);
console.log(b);


//Objects
var obj1 = {
    name: 'Meliqa',
    age: 31,
}

var obj2 = obj1;
obj1.age = 40;
console.log(obj1.age);
console.log(obj2.age);


//Functions
var age = 30;

var obj = {
    name: 'Meliqa'
};

function change(a, b){
    a = 60;
    b.name = 'gozola';
}

change(age, obj);

console.log(age);
console.log(obj.name);
*/




// Lecture: passing Functions as argument
/*
var years = [1990, 1965, 1937, 2005, 1998];

function calcArray (arr, fn){
    var arrRes = [];
    for (var i = 0; i < arr.length; i++){
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calcAges(el){
    return 2019 - el;
}

function isFullAge(el){
    return el >= 18;
}

function maxHeartRate(el){
    if(el >= 18 && el <= 83){
       return Math.round(206.9 - (0.67 * el));
    }
    return -1;
}

var ages = calcArray(years, calcAges);
var fullAges = calcArray(ages, isFullAge);
var heartRates = calcArray(ages, maxHeartRate);

console.log(ages);
console.log(fullAges);
console.log(heartRates);
*/


// Lecture: Functions returning functions
/*
function interviuQuestion(job){
    return function(name){
        if(job === ('Teacher')){
            console.log('Wat kind of subject dou u teach ' + name + '?');
        }else if(job === 'Netadmin'){
            console.log('Wat is an Global network ' + name + '?');
        }else if(job === 'Designer'){
            console.log('Wat kind of designe do u making ' + name + '?');
        }
    }
}

var netadminQuestion = interviuQuestion('Netadmin');
netadminQuestion('meliqa');

interviuQuestion('Designer')('Kate');
*/


// Lecture: IIFE

/*
var game = function(){
    var score = Math.random() * 10;
    console.log(score >= 5);
}

game();

//IIFE

(function(goodluck){
    var score = Math.floor(Math.random() * 10);
    console.log(score + 5 + goodluck);
})(5);
*/


//Lecture: Closures
/*
function retirement(retirementAge){
    var a = ' years left before retirement'
    return function(yearOfBirth){
        var age = 2019 - yearOfBirth;
        console.log(retirementAge - age + a);
    }
}

retirement(66)(1987);

//with Closures
function interviuQuestion(job){
    var t = 'Wat kind of subject do u teach ';
    var n = 'Wat is an Global network ';
    var d = 'Wat kind of designe do u making ';
    return function(name){
        if(job === ('Teacher')){
            console.log(t + name + '?');
        }else if(job === 'Netadmin'){
            console.log(n + name + '?');
        }else if(job === 'Designer'){
            console.log(d + name + '?');
        }
    }
}

interviuQuestion('Netadmin')('Meliqa');
interviuQuestion('Designer')('Kate');
interviuQuestion('Teacher')('John');
*/


// Lecture: Bind, call and apply

var john = {
    name: 'John',
    age: 26,
    job: 'teacher',
    presentation: function(style, timeOfDay){
        if(style === 'formal'){
            console.log('Good ' + timeOfDay + ', Ladies and gentlemens! I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.');
        }else if(style === 'friendly'){
            console.log('Hey! What\'s up? I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '.')
        }
    }
};

var emily = {
    name: 'Emili',
    age: 35,
    job: 'designer'
};


john.presentation('formal', 'evening');
john.presentation('friendly', 'morning');

//john.presentation.call(emily, ['friendly', 'night']);

//CALL
john.presentation.call(emily, 'friendly', 'morning');

//BIND
var johnFriendly = john.presentation.bind(john, 'friendly');
johnFriendly('evening');
johnFriendly('night');

var emilyFormal = john.presentation.bind(emily, 'formal');
emilyFormal('morning');
