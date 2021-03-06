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
/*
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

function isFullAge(limit, el){
    return el >= limit;
}


var ages = calcArray(years, calcAges);
console.log(ages);
var japanFull = calcArray(ages, isFullAge.bind(this, 20));
console.log(japanFull);
*/


//Coding Chalange 7

(function(){
    var Question = function(quest, answers, correct){
    this.quest = quest;
    this.answers = answers;
    this.correct = correct;
    }

    var question1 = new Question('აზრზე არა ვარ სადა ვარ?', ['ტყეში', 'მინდორში', 'სტადიონზე'], 0);

    var question2 = new Question('რომელია საქართველოს დედაქალაქი', ['ბათუმი', 'თბილისი', 'ქუთაისი'], 1);

    var question3 = new Question('რომელია მეცხრე პლანეტა?', ['მარსი', 'იუპიტერი', 'სატურნი'], 2);

    var quests = [question1, question2, question3];

    Question.prototype.questDisplay = function(){
        console.log(this.quest);
        for(var i = 0; i < this.answers.length; i++){
            console.log(i + ': ' + this.answers[i]);
        }
    }

    Question.prototype.checkAnswer = function(ans, callBack){
        var sc;
        if(ans === this.correct){
            console.log('პასუხი სწორია!');
            sc = callBack(true);
        }else{
            console.log('პასუხი არასწორია, კიდევ სცადეთ :)');
            sc = callBack(false);
        }
        this.displayScore(sc);
    }

    Question.prototype.displayScore = function(score){
        console.log('თქვენ დააგროვეთ ' + score + ' ქულა!');
        console.log('------------------------------------');
    }

    function score(){
        var sc = 0;
        return function(correct){
            if(correct){
                sc++;
            }
            return sc;
        }
    }

    var keepScore = score();

    function nexQuestion(){

        var n = Math.floor(Math.random() * quests.length);

        var activeQuest = quests[n];
        activeQuest.questDisplay();

        var answer = prompt('ჩაწერეთ სწორი პასუხი');

        if(answer !== 'exit'){
            activeQuest.checkAnswer(parseInt(answer), keepScore);
            nexQuestion();
        }
    }
    nexQuestion()

})();




/* Chemi kodi
var questselector = function(arr){
    var random = Math.round(Math.random() * 2);
    var answerNum = 0;
    console.log(arr[random].quest);
    for(var i = 0; i < arr[random].answers.length; i++ ){
        answerNum = arr[random].answers[i];
        console.log(i + ': ' + answerNum);
    }

    var userAnswer = prompt('ჩაწერეთ სწორი პასუხი:\n Cancel არ მუშაობს :D');
    ckeckAnswer();
    function ckeckAnswer(){
        if(random == 0 && userAnswer == 0){
            console.log('პასუხი სწორია!!!');
            userScore++;
            console.log('თქვენ დააგროვეთ: ' + userScore + ' ქულა!!!');

        }else if(random == 1 && userAnswer == 1){
            console.log('პასუხი სწორია!!!');
            userScore++;
            console.log('თქვენ დააგროვეთ: ' + userScore + ' ქულა!!!');

        }else if(random == 2 && userAnswer == 2){
            console.log('პასუხი სწორია!!!');
            userScore++;
            console.log('თქვენ დააგროვეთ: ' + userScore + ' ქულა!!!');

        }else if(userAnswer == 'exit'){
            return;
            userScore = 0;

        }else{
            console.log('სცადეთ თავიდან!!!');
        }
        console.log('-----------------------------')
        questselector(quests);
    }
}
*/












