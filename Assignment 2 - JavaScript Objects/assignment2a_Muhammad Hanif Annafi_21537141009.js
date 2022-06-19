/*******************************************************************************
* WEB222 – Assignment 2
* I declare that this assignment is my own work in accordance with Seneca
* Academic Policy. No part of this assignment has been copied manually or
* electronically from any other source (including web sites) or distributed to
* other students.
*
* Name          : Muhammad Hanif Annafi'
* Student ID    : 21537141009
* Date          : 27 Februari 2022
* Task          : Assignment 2 Part A 
*
******************************************************************************/

/*****************************
* Step 1
*****************************/
// Declare the following global variables without any value assigned.
var e1, e2, e3, e4, e5, e6, e7, str;

/*****************************
* Step 2
*****************************/
// a. Create a function named capFirstLetter using the function declaration syntax.
function capFirstLetter(str) {
    var updatedStr = str.toLowerCase();
    updatedStr = updatedStr.replace(updatedStr[0], updatedStr[0].toUpperCase());
    return updatedStr;
}

// b. Write code to prompt the user to enter first name, and use your first name as default value.
e1 = prompt("Enter your first name : ");

// c. Update / change the first letter in e1 to upper case and other letters to lower case by invoking the function.
e1 = capFirstLetter(e1);

/*****************************
* Step 3
*****************************/
// a. Create a function named getAge using the function expression syntax.
function getAge (num) { // 1993
    var currentYear = (new Date()).getFullYear(); //2018
    num = currentYear - num;
    return  num;
  }

// b. Prompt the user to enter the year of the user’s birthday.
e2 = prompt ("Enter the year of your birthday : ");

// c. Calculate the age
e2 = getAge (Number(e2));

/*****************************
* Step 4
*****************************/
// a. Prompt the user to enter the college name the user is attending and assign the input.
e3 = prompt ("Enter the college name you are attending : ");

// b. Change the first letter of each word of the string in variable.
e3 = e3.split(' ');
for ( var i = 0 ; i < e3.length ; i ++){
  e3[i] = capFirstLetter(e3[i]);
}

/*****************************
* Step 5
*****************************/
// a. Prompt the user to enter 5 favorite sports (in lower case separated by comma).
e4 = prompt ("Enter 5 favorite sports : ");
e4 = e4.split(',');

// b. If the string in e4 contains “football”, replace it with the string “soccer”.
for (var i = 0 ; i < e4.length; i ++){
  if (e4[i] == "football"){
    
    // c. Split the sports in e4 into an array and store the array back in e4.
    e4[i] = e4[i].replace("football", "soccer");
  }
}

// d. Prompt the user to enter an extra favorite sport with the default value.
e5 = prompt ( "Enter an extra favorite sports : ");
e4.push(e5);

/*****************************
* Step 6
*****************************/
// a. For the courses stored in e4, do the following operations.
//    - Update / change each sport string in the array to upper case.
//    - Sort the courses in the array in alphabetical order.
for ( var i = 0 ; i < e4.length ; i ++){
    e4[i] = e4[i].replace(e4[i], e4[i].toUpperCase());
  }
  e4.sort();

/*****************************
* Step 7
*****************************/
// a. Create a function named getDateString().
function getDateString (date){

// b. Create a date object with current date and time, and store it to e6.
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

// c. Get current date string with the format of yyyy-mm-dd.    
    return yyyy + "-" + mm + "-" + dd;
}
  
e6 = new Date();
e7 = getDateString( e6 );
  
/*****************************
* Step 8
*****************************/
// a. Concatenate all the variables e1, e2, e3, e4 and e7 with appropriate text in variable str.
var e3_ = '', e4_ = '';
for ( var i = 0 ; i < e3.length ; i ++ ){
    e3_ += e3[i] + " ";
}
for ( var i = 0 ; i < e4.length ; i ++ ){
    e4_ += "\n\t\t" + e4[i];
}
  
str = "User info:\n\n"
    + "name (e1): " + e1 + "\n"
    + "age (e2): " + e2 + "\n"
    + "school (e3): " + e3_ + "\n"
    + "favorite sports (e4): " + e4_ + "\n"
    + "current date (e7): " + e7;

// b. Use one statement console.log(str); to get the following output.
console.log(str);
