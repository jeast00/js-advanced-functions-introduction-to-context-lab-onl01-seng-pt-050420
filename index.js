// Your code here


const createEmployeeRecord = function(row) {
  return {
    firstName: row[0],
    familyName: row[1],
    title: row[2],
    payPerHour: row[3],
    timeInEvents: [],
    timeOutEvents: []
  }
}

const createEmployeeRecords = function(rowData) {
  return rowData.map(function(row) {
    return createEmployeeRecord(row)
  })
}

const createTimeInEvent = function(empRecord, dateStamp) {
  let [date, hour] = dateStamp.split(" ")
  
  empRecord.timeInEvents.push(
    {
      type: "TimeIn",
      hour: parseInt(hour, 10),
      date,
    })
  return empRecord
}

const createTimeOutEvent = function(empRecord, dateStamp) {
  let [date, hour] = dateStamp.split(" ")
  
  empRecord.timeOutEvents.push(
    {
      type: "TimeOut",
      hour: parseInt(hour, 10),
      date,
    })
    return empRecord
}

const hoursWorkedOnDate = function(empRecord, foundDate) {
  let inEvent = empRecord.timeInEvents.find(function(event) {
    return event.date === foundDate
  })
  
  
  return empRecord
}








