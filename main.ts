import inquirer from "inquirer";

class Student{
  name:string
  constructor(n:string){
    this.name=n
  }
}

class Person{
  students:Student[]=[]
  addStudent(obj:Student){
    this.students.push(obj)
  }
}

const person=new Person()
const progStart=async (person:Person)=>{
 do{ console.log("welcome Guest");
  
 const ans= await inquirer.prompt({
   type:"list",
   message:"What do you like to talk with...",
   name:"select",
   choices:["self","student"]
 })

 if(ans.select==="self"){
   console.log("Hello me talk with my self");
   console.log("I am fine");
   }
 if(ans.select==="student"){
   const ans=await inquirer.prompt({
     type:"input",
     message:"What do you like to talk with ...",
     name:"student"
   })
   const student=person.students.find((val) =>val.name===ans.student)

   if(!student){
     const name=new Student(ans.student)
     person.addStudent(name)
   console.log(`Hello i am ${name.name} I am fine`);
   console.log(person.students)
   }
   if(student){
     console.log(`Hello i am ${student.name} I am fine..........Student are present in this statement`);
     console.log(person.students)
   }
 }}
 while(true)
}
progStart(person)