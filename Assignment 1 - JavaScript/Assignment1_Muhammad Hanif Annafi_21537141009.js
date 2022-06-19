/*********************************************************************************
* WEB222 – Assignment 01
* I declare that this assignment is my own work in accordance with Seneca Academic Policy. No part of
* this assignment has been copied manually or electronically from any other source (including web sites)
* or distributed to other students.
*
* Name          : Muhammad Hanif Annafi'
* Student ID    : 21537141009
* Date          : 19 Februari 2022
*
********************************************************************************/

/*****************************
* Task 1
*****************************/

// a) Store the following information in variables.
var studentname = "Muhammad Hanif Annafi'"
var numberOfCourses = 11;
var program = "S1 - Teknologi Informasi"
var have_partTimeJob = false;

// b) Output your student info to the browser console.
console.log ("My name is " + studentname + " and I'm in " + program + " program. I'm taking " + numberOfCourses + " course in this semester.")
window.alert ("My name is " + studentname + " and I'm in " + program + " program. I'm taking " + numberOfCourses + " course in this semester.")

// c) Store the string "have" or "don't have" into a variable.
if (have_partTimeJob){
    H_DH = "have";
  } else {
    H_DH = "don't have";
  }

// d) Output your updated student into to the console.
console.log ("My name is " + studentname + " and I'm in " + program + " program. I'm taking " + numberOfCourses + " course in this semester. And I " + H_DH + " a part-time job now.")
window.alert ("My name is " + studentname + " and I'm in " + program + " program. I'm taking " + numberOfCourses + " course in this semester. And I " + H_DH + " a part-time job now.")

/*****************************
* Task 2
*****************************/

// a) Store the current year  in a variable.
var current_date = new Date();
var current_year = current_date.getFullYear();

// b) Prompt to user “Please enter your age:” and store the input value in a variable.
var age = prompt ("Please enter your age");

// c) Output the birth year to the console like so: "I was born in the year of ???."
var birth_year = current_year - age - 1;
console.log ("I was born in the year of " + birth_year + ".");
window.alert ("I was born in the year of " + birth_year + ".");

// d) Prompt to user “Enter the number of year you expect to study in the college:” and store the input value in a variable.
var study_year = prompt ("Enter the number of years you expect to study in the collage : ");
var when_to_graduate = parseInt(study_year) + current_year - 1;

// e) Output the graduate year to the console like so: "You will graduate from Seneca college in the year of ???."
console.log ("You will graduate from Yogyakarta State University in the year of " + when_to_graduate + ".");
window.alert ("You will graduate from Yogyakarta State University in the year of " + when_to_graduate + ".");

/*****************************
* Task 3
*****************************/

// a. Store a Celsius temperature into a variable.
var celcius = prompt("Insert Celcius");

// b. Convert it to Fahrenheit and output "??°C is ??°F".
var converted_fahrenheit = celcius * 1.8 + 32;

// c. Store a Fahrenheit temperature into a variable.
var fahrenheit = prompt("Insert Fahrenheit");

// d. Convert it to Celsius and output "??°F is ??°C."
var converted_celcius = (fahrenheit - 32) * 0.5556;

// Output
console.log(celcius + "°C is " + converted_fahrenheit + "°F");
window.alert(celcius + "°C is " + converted_fahrenheit + "°F");
console.log(fahrenheit + "°F is " + converted_celcius + "°C");
window.alert(fahrenheit + "°F is " + converted_celcius + "°C");

/*****************************
* Task 4
*****************************/

// a) Write a for loop that will iterate from 0 to 10.
for (var num = 0; num <= 10; num++) {
    if (num % 2 === 0) {
        console.log (num + " is even.");
        window.alert (num + " is even.");
    } else {
        console.log (num + " is odd.");
        window.alert (num + " is odd.");
    }
}

/*****************************
* Task 5
*****************************/

// a) Write a function named largerNum using the declaration approach.
function largerNum (num1, num2) {
    if (num1 >= num2)
        return num1;
    else {
        return num2;
    }
}

// b) Write a function named greaterNum using the expression approach.
var greaterNum = function (num1, num2) {
    if (num1 >= num2)
        return num1;
    else
        return num2;
};

// c) (New, optional) Write a function named largestNum using any approach.
// d) Call these functions twice with different number parameters.
var a = prompt("Insert first number : ");
var b = prompt("Insert second number : ");
console.log ("The larger number of " + a + " and " + b + " is " + largerNum (a, b) + ".");
alert ("The larger number of " + a + " and " + b + " is " + largerNum (a, b) + ".");

var x = prompt("Insert first number : ");
var y = prompt("Insert second number : ");
console.log ("The larger number of " + x + " and " + y + " is " + greaterNum (x, y) + ".");
alert ("The larger number of " + x + " and " + y + " is " + greaterNum (x, y) + ".");

/*****************************
* Task 6
*****************************/

// a) Write a function named evaluator.
function evaluator () {
    var sum = 0; avg = 0;
    for (var i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    var avg = sum / arguments.length;
    if (avg >= 50) {
        return true;
    } else {
        return false;
    }
}

// b) Call these functions 3 times with different number parameters.
function T_F (value) {
    if (value) {
        console.log ("Average greater than or equal to 50 : " + true);
        alert ("Average greater than or equal to 50 : " + true);
    } else {
        console.log ("Average greater than or equal to 50 : " + false);
        alert ("Average greater than or equal to 50 : " + false);
    }
}

T_F (evaluator(10, 20, 30));
T_F (evaluator(40, 50, 60));
T_F (evaluator(70, 80, 90));

/*****************************
* Task 7
*****************************/
// a) Write a function named grader.
var grade = function Grader (score){
    if (0.8 <= score && score <= 1) {
        return "A";
    } else if (0.7 <= score && score < 0.8){
        return "B";
    } else if (0.6 <= score && score < .7){
        return "C";
    } else if (0.5<= score && score < .6){
        return "D";
    } else {
        return "F";
    }
};

// b) Call these function 3 timse with different number score.
for (var i = 0 ; i < 3 ; i++){
    var temp = prompt ("What is your score?");
    console.log("The grade given for " + temp + "% is " + grade (temp/100));
    alert ("The grade given for " + temp + "% is " + grade (temp/100));
}

/*****************************
* Task 8
*****************************/

// a) Write a function called showMultiples using the declaration approach.
// - Takes 2 numeric arguments (num, numMultiples) – assume the user is entering valid (positive) whole numbers.
// - Outputs all of the multiples of the num argument from 1 to numMultiples: for example, if num = 5 and numMultiples = 4.

function showMultiples (num, numMultiples){
    for(var i = 1; i <= numMultiples ; i++){
        console.log(num + " * " + i +" = " + num*i);
    }
}

for (var i = 0 ; i < 2 ; i ++){
    var tempNum = prompt("Put a number :");
    var tempMultiples = prompt("How many times of multiples do you want to calculate? ");
    showMultiples (tempNum, tempMultiples);
}