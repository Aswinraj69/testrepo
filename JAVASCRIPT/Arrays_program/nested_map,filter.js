//nested array


//    map,   reduce,   find,   filter,  some;

var employees = [
    [1000, "ram", 15000, "hr", 1990, 2000],
    [1001, "ravi", 25000, "hr", 1989, 2005],
    [1002, "akhil", 30000, "developer", 2000, 2010],
    [1003, "nikil", 35000, "developer", 2010, 2015],
    [1004, "ajesh", 35000, "mrkt", 1991, 2010],
    [1005, "tom", 40000, "ba", 1990, 2015],
    [1006, "jack", 32000, "ba", 2001, 2010],
]
// var employee_names=employees.map((emp)=>emp[1])
// console.log(employee_names);
//print number of employees
// console.log("employees=", employees.length);

//print number of developers
// var developer_count = 0;
// for (let employee of employees) {
//     if (employee[3] == "developer") {
//         developer_count++
//     }
// } console.log("developers=", developer_count);

// //experiance of each employee
// for (let employee of employees) {
//     console.log("emp", employee[5] - employee[4]);
// }

// //print highest salary
// //print lowest salary 
// //print name of developer who is taking highest salary
// //print name of highest exp employee
// //print total sum of salary group by developers
// var high_salary = 0;
// for (let employee of employees) {
//     if (high_salary < employee[  2]) {
//         high_salary = employee[2]
//     }
// } console.log("max salary=", high_salary);
var experiance =employees.filter((emp)=>emp[3]=="developer" & (emp[5]-emp[4]>6)).map(emp=>emp[1])
console.log(experiance);

var salary=employees.filter((emp)=>emp[3]=="developer").map(emp=>emp[2]+5000)
console.log(salary);

employees.sort((emp1,emp2)=>emp2[5]-emp2[4]-(emp1[5]-emp1[4]))
console.log(employees);

var res = employees.filter((emp)=>emp[3]=="developer").sort((emp1,emp2)=>emp1[2]-emp2[2])
console.log(res);