// Write your solution in this file!
let employee = {
  streetAddress: "72 Charles Street",
  name: "Harley Simmons",
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
  return {
    ...employee,
    ["name"]: "Sam",
    ["streetAddress"]: "11 Broadway",
  }
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee.streetAddress = "12 Broadway"
  return employee
}

function deleteFromEmployeeByKey(employee, key) {
    const newObject = Object.assign ({}, employee)
    delete newObject[key]
    return newObject
  }


function  destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key]
  return employee
}