'use strict'

const fs = require('fs');

const path = require('path');

class Employee {
  constructor(data) {
    this.name = data.name
    this.title = data.title
    this.salary = data.salary
  }

  promote(newTitle, newSalary) {
    this.title = newTitle
    this.salary = newSalary
  }

  static parseFromFilePath(file) {
    return new Employee(JSON.parse(fs.readFileSync(file)))
  }
}

module.exports = {
  Employee
}
