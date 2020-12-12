// Your code here


const createEmployeeRecord = function(row) {
  return {
    firstName: row[0],
    familyName: row[1],
    title: row[2],
    payPerHour: [3],
    timeInEvents: [],
    timeOutEvents: []
  }
}