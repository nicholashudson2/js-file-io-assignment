'use strict'

const fs = require('fs')

class Employee {
  constructor() {

    const Employee = function (name, title, salary){ //function (name, title, salary) 
      this.name = name
      this.title = title
      this.salary = salary

      this.promote = (newTitle, newSalary) => {
        this.title = newTitle
        this.salary = newSalary
      }
    
    function parseFromFilePath (file, callback) {
      fs.readFileSync(file, (err, data) => {
        const fileData = JSON.parseSync(data)
        this.name = fileData.name
        this.title = fileData.title
        this.salary = fileName.salary
        callback
      }
      )
    }
  }
    // TODO ???
  }

}


// TODO ???

module.exports = {
  Employee
}
