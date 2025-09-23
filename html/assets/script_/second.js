//alert("Variables In JS");

// let  x = 10;
// console.log("old value of x : "+  x); 
// x = 20;
// console.log("latest value of x : " + x); 

// let age = 22;
// console.log("age is: " + age);
// age = 25;
// console.log("age is: " + age);


// var value;
// console.log(value);


// value = "Java Script";
// console.log(value);


// const pi = 3.141;
// console.log(pi);


// let x1 = 10; 


// let abc = 20;


         

// let age = 15;


// number(467 , 7.647) ,String("javascript") ,boolean(true , false) , undefined (let age;)
// Null  let age = Null , symbol , BigInt 


//object Array


// let score = -746; //number
// console.log("type of score is: "+ typeof(score));

// let name = "John";  //String
// console.log("type of name is: "+ typeof(name));


// let isIdCard = true;
// console.log("type of isIdCard is: "+ typeof(isIdCard));


// let value;
// console.log("type of value is: "+ typeof(value));
 

// let num = null;
// console.log(typeof(num));

// let value2 = 67478373446n;
// console.log("type of value is: "+ typeof(value2));
// // let a = symbol("id");

// // [id] = 634763;

// let pi = 22/7;
// console.log(pi);


//Opertors --> 

//Arithmatic Operators 

// + , - , * , / , %
// let num1 = 22;
// let num2 = 7;

// let add = num1+num2;
// let sub = num1-num2;
// let multi = num1*num2; 
// let div = num1/num2;
// let mode = num1%num2;

// console.log( "Addition of " +  num1 + " & " + num2 + " is: " + add);
// console.log( "Substraction of " +  num1 + " & " + num2 + " is: " + sub);
// console.log( "Multiplication of " +  num1 + " & " + num2 + " is: " + multi);
// console.log( "Division of " +  num1 + " & " + num2 + " is: " + div);
// console.log( "Reminder of " +  num1 + " & " + num2 + " is: " + mode);



//Assignment Operator (= , += , -= , *=  , )
// let a = 50; 
// let b = 20;

  // a = a + b ; // a*=b;

//console.log(a+=b);
   
   //Comparision Operators (== , === , !=)

// console.log(a > b); //true
// console.log(a < b); //false
// console.log(a >= b); //true
// console.log(a <= b); //true


//Logical Operator (AND , OR , NOT)

// console.log( !(( a > b)  ||  (a<= b)) );
             // true        false                --> false


// Unary Operator
// 1. Increment  --> 1.a pre-Increment(++a)     1.b post-Increment (a++) --> a+1
// 2. Decrement  --> 1.a pre-Decrement(--a)     1.b post-Decrement  (a--)  --> a-1 


// console.log(a++); //--> 51 
// console.log(a);   // --> 52

// console.log(++a); //--> 52 
// //console.log(a); 

// console.log(a--); //52
// console.log(--a); //50


//Ternary Operator

 
// let criteria = (age >= 18) ? "Valid for Voting" : "Invalid age";
// console.log(criteria);


// //console.log("age is " + age);

// console.log("My am learnign JS , age is :" , age , "......");


//Conditional Statements 
//if

// if(age >=18)
// {
//     console.log("Eligible for voting ");  

// }

// else {
//     console.log("Not Eligible");   
// }

// let age = 4869794675;

// if((age <= 18) && (age >=1))
// {
//     console.log("Not adult"); 
// }
// else if ((age > 18) && (age <= 60) ) {
//     console.log("Adult"); 
// } 
// else if ((age > 60) && (age <= 100) ) {
//     console.log("Older");     
// } 
// else {
//     console.log("Invalid age"); 
// }


// let number = 76878;

// if(number % 2 == 0){
//     console.log("these is even number"); 
// }
// else{
//     console.log("these is odd number ");
// }


// let day = 1;

// switch(day){

//     case 1 : console.log("Monday");
//     break;
//     case 2 : console.log("Tuesday");
//     break;
//     case 3 : console.log("Wednesday");
//     break;
//     case 4 : console.log("Thursday");
//     break;
//     case 5 : console.log("Friday");
//     break;
//     case 6 : console.log("Saturday");
//     default : console.log("Invalid number");
    
// }


//loops 
//for 
// let table = 5;
// for(let i = 1; i <= 10 ; i++)
// {
//     console.log(i*table);
// }


// for(let i = 10; i >= 1 ; i--)
// {
//     console.log(i);
// }

//while loop

//let j = 1;
// while(j<=10){
//            console.log(j);
//            j++;        
// }

// let j = 11;
// do{
//  console.log(j);
//  j++;
// }
// while(j<=10);



// // 1- 18 -- 60 -100
// // not adult  adult  older

// let calculation  = 15;
// switch(calculation){

//   case 1 :  
//   let num1 = 30;
//   let num2 = 50;
//   let add = num1 +num2;
//   console.log(`Addition is ${add}`);
//   break;

//   case 2: 
//    let table = 5;
//   for(let i = 1; i <= 10 ; i++)
//   {
//     console.log(`Table is : ${table} X ${i} = ${table * i}`);
//   }
//   break;
//   default : 
//   console.log("Not Valid");
 
// }

//functions --> function is Block of code to perform a Specific task.
//it runs when it is called / invoked  --> greet();

// use-->
//1. resusability
//2. Avoid repetition of code
//3. break comsex code into smaller parts
//4. easy to test and debug 

// syntax-->
// function function_name(){
// }

//function declaration
// function greet(){
//   console.log("Hello , Good Morning" );
  
// }

// //function call
// greet();
// greet();
// greet();
// greet();

// function addition(){
//   console.log("Hello from addition function");
  
// }

// function addition(){
//   let num1 = 100;
//   let num2 = 200;
//   let add = num1 + num2;
//   console.log(`Addition is : ${add}`);
// }

// //addition() is overriden , always latest function will be considered

// addition(100, 500);

// //function with parameters 
// function hello(username , age){
//   console.log(`Hello ........ ${username} ${age}`);
// }

// hello("" , 20 );

// hello("Sonia" , 25);

// function addition(num1 , num2){
//   let add = num1 + num2;
//   console.log(`Addition is : ${add}`);
// }


// //Even odd` number check using function
// function oddEvenCheck(number){
   
//   if(number%2 == 0){
//     console.log(`${number} is even number`);
//   }
//   else{
//     console.log(`${number} is odd number`);
//   }

//   //return number;
// }

// oddEvenCheck(463);


// //ddEvenCheck(46);


// //function with return type
// function m1(a = 1, b = 1){
 
//   console.log(a);
//   console.log(b);
//   let result = a+b;

//   return result;
// }

// let ret = m1(100 , 200);
// console.log(ret);
// // parametr with default value
// function greet(name = "Ghost"){
//   console.log(`Hello , Good Morning ${name}` );
// }

// greet();


// //Rest Parameters
// function  numbers(...num) {  //num [12 , 4, 3, 6, 7, 8, 9, 10 ]
// console.log(num);
// }

// numbers(12 , 4, 3, 6, 7, 8, 9, 10);


//Calculator using function and switch case


// function sum(num1 , num2){
//   console.log(`Addition of ${num1} & ${num2} is :${num1 + num2} `);
// }

// function sub(num1 , num2){
//   console.log(`Substraction of ${num1} & ${num2} is :${num1 - num2} `);
  
// }

// function multi(num1 , num2){
//   console.log(`Multiplication of ${num1} & ${num2} is :${num1 * num2} `);
// }

// function div(num1 , num2){
//   console.log(`Division of ${num1} & ${num2} is :${num1 / num2} `);
// } 

// function table(num){
//   for(let i = 1; i<= 10; i++){
//     console.log(`${num} X ${i} = ${num * i}`);   
//   }
// }

// function oddEvenCheck(num){
//   if(num % 2 == 0){
//     console.log(`${num} is even number`);
//   }
//   else{
//     console.log(`${num} is odd number`);
//   }
// }

// let choice = 7;
// switch(choice){
//   case 1: sum(100 , 200);
//   break;
//   case 2: sub(500 , 200);
//   break;  
//   case 3: multi(50 , 20);
//   break;
//   case 4: div(400 , 20);
//   break;  
//   case 5: table(7);
//   break;
//   case 6: oddEvenCheck(467);
//   break;  
//   default: console.log("Invalid choice");
// }


//Rest Parameters

// function numbers(...num) // [10 , 20 , 30 , 40 , 50 ]
// {

//   let sum = 0;
//   for(let i = 0 ; i< num.length; i++){
//     console.log(num[i]);
//     sum+=num[i];
//    }
//  console.log(`Total of numbers : ${sum}`);
//  return sum;
// }

// let total = numbers(10,  20 , 30 , 40 , 50);

// console.log(total);

//funtion expression
// let greet = function(num){
// return num;
// }

// console.log(greet(100));


// //Arrow function
// let addition = (num1 , num2)=>{
//    return num1 + num2;
// }
// let result = addition(100 , 200);
// console.log(result);


//  let demo =()=> "hello Arrow function";
 
// console.log("hello");
// let re = demo();
// console.log(re);


//Callback function

function greet(name , callback){
     console.log(`Hello ... ${name}`);
      callback();
}

// function sayBy(){
//   console.log("Good Bye");
  
// }

greet("John" ,function (){ console.log("hello");});


//Anounymous function

 let value = (function (){
 console.log("hello");
})