'use strict'

const fs = require('fs');
const path = require('path');

// Class to instantiate new objects of type "Employee"
class Employee {
  constructor(data) {
    this.name = data.name
    this.title = data.title
    this.salary = data.salary
  }

  // Method to "promote" this Employee, using newTitle and newSalary parameters.
  promote(newTitle, newSalary) {
    this.title = newTitle
    this.salary = newSalary
  }

  // Method to parse Employee object from designated .json file.
  static parseFromFilePath(file) {
    return new Employee(JSON.parse(fs.readFileSync(file)))
  }
}

module.exports = {
  Employee
}
