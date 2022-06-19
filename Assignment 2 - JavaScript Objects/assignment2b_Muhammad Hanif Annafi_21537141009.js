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
* Task          : Assignment 2 Part B
*
******************************************************************************/

// an array of course objects
var courses = [
    { code: 'APC100', name: 'Applied Professional Communications', hours: 3, url: 'http://www.senecacollege.ca/' },
    { code: 'IPC144', name: 'Introduction to Programming Using C', hours: 4, url: 'https://scs.senecac.on.ca/~ipc144/' },
    { code: 'ULI101', name: 'Introduction to Unix/Linux and the Internet', hours: 4, url: 'https://cs.senecac.on.ca/~fac/uli101/live/' },
    { code: 'IOS110', name: 'Introduction to Operating Systems Using Windows', hours: 4, url: 'https://cs.senecac.on.ca/~fac/ios110' },
    { code: 'EAC150', name: 'College English', hours: 3, url: null },
];

// prototype object for creating student objects
var student = { 
    name: "", 
    dob: new Date(),
    sid: "",
    program: "", 
    gpa: 4.0,
    toString: function () {
        return 'Student info for ' + this.name + ': born on ' + this.dob.toLocaleDateString() +
               ', student id ' + this.sid + ', progrem ' + this.program + ', current GPA ' + this.gpa; 
    }
};

/************************************************************
 * Start your Part B code here. Do not change the code above.
 ************************************************************/
// task 1
console.log("*** Task 1 ***\n\n");
alert("*** Task 1 ***\n\n");

var lastCourse = courses.pop();

console.log("Course " + lastCourse.code + " was deleted from the array (courses)");
alert("Course " + lastCourse.code + " was deleted from the array (courses)");

var secondCourses = [
    { code: 'IBC233', name: 'iSERIES Business Computing', hours: 4, url: 'http://scs.senecac.on.ca/~ibc233/'},
    { code: 'OOP244', name: 'Introduction to Object Oriented Programming', hours: 4, url: 'http://scs.senecac.on.ca/~oop244/'},
    { code: 'WEB222', name: 'Internet I - Internet Fundamentals', hours: 4, url: 'http://scs.senecac.on.ca/~web222/'},
    { code: 'DBS201', name: 'Introduction to Database Design and SQL', hours: 4, url: 'http://scs.senecac.on.ca/~dbs201/'}
]

for(var i=0; i<secondCourses.length; i++) {
    courses.push(secondCourses[i]);
}

console.log("Adding new course objects into the array (courses)\n\n");
alert("Adding new course objects into the array (courses)\n\n");

console.log("Course objects in the array (courses) : \n");
alert("Course objects in the array (courses) : \n");

for(var i =0; i<courses.length; i++) {
    console.log("\"" + courses[i].code + ", " + courses[i].name + ", " + courses[i].hours + " hours/week, website: " + courses[i].url + "\"");
}

console.log("\n\n");

// task 2
console.log("*** Task 2 ***\n\n");
alert("*** Task 2 ***\n\n");

console.log(" Task 2 ");
alert(" Task 2 ");

console.log("Student objects in the array (students) : ");
alert("Student objects in the array (students) : ");

var HanifAnnafi = Object.create(student)
HanifAnnafi.name = "Hanif Annafi";
HanifAnnafi.dob = new Date(2002,11,26);
HanifAnnafi.sid = "002266112002"
HanifAnnafi.program = "Teknologi Informasi";
HanifAnnafi.gpa = 4.0;

var RamadhaniRizky = Object.create(student)
RamadhaniRizky.name = "Hafizh Annafi";
RamadhaniRizky.dob = new Date(2002,08,25);
RamadhaniRizky.sid = "002255082002"
RamadhaniRizky.program = "Teknik Informatika";
RamadhaniRizky.gpa = 3.5;

var WaritsRiyadi = Object.create(student)
WaritsRiyadi.name = "Cenip Annafi";
WaritsRiyadi.dob = new Date(2003,10,01);
WaritsRiyadi.sid = "002211102003"
WaritsRiyadi.program = "Teknik Komputer";
WaritsRiyadi.gpa = 3.8;

var AhmadMaulana = Object.create(student)
AhmadMaulana.name = "Indri Salsa";
AhmadMaulana.dob = new Date(2003,10,21);
AhmadMaulana.sid = "002221102003"
AhmadMaulana.program = "Agroteknologi";
AhmadMaulana.gpa = 3.7;

var student = [HanifAnnafi, RamadhaniRizky, WaritsRiyadi, AhmadMaulana];

function Loop(item, index) {
    console.log(index + ": " + item.toString())
}

student.forEach(Loop);