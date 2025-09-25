// (function(){
//   console.log("hello");
// })();

// //nested function
// function outer(){
//    function inner(){
//      console.log("inner function");
//    }
//   console.log("outer function");
//   inner();
  
// }

 
// outer();

// let Student = {
//       name : "John",
//       age : 22,
//       city : "pune",
//       marks : 70,
//       greet : function(){
//         console.log("Hello... " + Student.name);
//          }
// };
// Student.greet();

// console.log(`Student Name is ${Student.name}`);


// console.log(`Student age is ${Student.age}`);

// for( let key in Student){
//     console.log(`${key} : ${Student[key]}`);
    
// }

//with constructor // old way....
// function Student(id , name , age , city){
//       this.id = id;
//       this.name = name;
//       this.age = age;
//       this.city= city;
      
//       this.greet = function(){
//        console.log(`Hello ${this.name} id is: ${this.id}`);
// }
// }
//  const std1 = new Student(101 , "john" , 22 , "pune");
//  const std2 = new Student(102 , "mayur" , 21 , "pimpri");
//  const std3 = new Student(103 , "rakesh" , 23 , "nashik");


//  std1.greet();


 class Student{
    constructor(sid , name , age , city){
      this.id = id;
      this.name = name;
      this.age = age;
      this.city= city;
      this.greet = function(){
     console.log(`id is ${this.id} , name is ${this.name}`);  
 }
}
 }

const std1 = new Student(101 , "john" , 22 , "pune");
const std2 = new Student(102 , "mayur" , 21 , "pimpri");
const std3 = new Student(103 , "rakesh" , 23 , "nashik");

std1.greet();