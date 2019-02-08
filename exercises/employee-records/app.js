var employees = [];

function Employee(name, jobTitle, salary, status="Full Time"){
    this.name = name;
    this.jobTitle = jobTitle;
    this.salary = salary;
    this.status = status;
    this.printEmployeeForm = function (){
        console.log("Employee Name: " + this.name + " \nJob Title: " + this.jobTitle + "\nSalary: " + this.salary + "\nStatus: " + this.status);
    }
}

var stephanie = new Employee("Stephanie Lane", "Student at VSchool", "$1200 a month");

var eric = new Employee("Eric Jones", "VSchool Instructor", "$25 an hour");

var madie = new Employee("Madison Porter", "Student at VSchool", "400 a week", "Part Time");

stephanie.printEmployeeForm();
eric.printEmployeeForm();
madie.printEmployeeForm();

employees.push(stephanie);
employees.push(eric);
employees.push(madie);

console.log(employees)
