'use strict';

console.log('js loaded');

//input individual names
//input desired number of people in teams
//generate team

var totalStudents = [];
var totalTeams = [];

//object literal listing students
var students = [
  'Aaron',
  'Alissa',
  'Andrew',
  'Brian',
  'Carlos',
  'Christina',
  'Danul',
  'Jeff',
  'Jeremy',
  'Jimmy',
  'Kendra',
  'Kris',
  'Neth',
  'Nic',
  'Rebecca',
  'Richard',
  'Suzanne',
  'Tre'
];

function Students(name) {
  this.name = name;
  totalStudents.push(this);
}

function Teams(numOfStudents) {
  this.numberOfStudents = numberOfStudents;
  totalTeams.push(this);
}

//assign students into teams based on number of students desired per team
function assignTeams() {
  var teams = totalStudents / totalTeams;
  if (teams > 0) {
    
  }
}

//render table
//Add table header row that says:
//'[class name] teams for [assignment/lab name]'
//table body will display teams and student names
//table footer will display total number of teams and total number of students
