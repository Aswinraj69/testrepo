var student={
    roll:10,
    name:"aswin",
    course:"bca",
    total:750
}

//print student name
console.log(student.name);

//update total as 600
student.total=600
console.log(student);

//chk for grade key is present or not
console.log("grade" in student);

//add new key value pair(grade,a+)
//console.log("discount" in products);

//chk batch key is present or not if not add batch mearnstak aug
if(!("batch" in student)){

   student.batch="mearnstack aug"
}
console.log(student)


for(let key in student){
console.log(key);
console.log(student[key]);
}