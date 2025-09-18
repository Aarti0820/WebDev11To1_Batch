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
let a = 50; 
let b = 20;

  // a = a + b ; // a*=b;

//console.log(a+=b);
   
   //Comparision Operators (== , === , !=)

console.log(a > b); //true
console.log(a < b); //false
console.log(a >= b); //true
console.log(a <= b); //true


//Logical Operator (AND , OR , NOT)

console.log( !(( a > b)  ||  (a<= b)) );
             // true        false                --> false


// Unary Operator
// 1. Increment  --> 1.a pre-Increment(++a)     1.b post-Increment (a++) --> a+1
// 2. Decrement  --> 1.a pre-Decrement(--a)     1.b post-Decrement  (a--)  --> a-1 


console.log(a++); //--> 51 
console.log(a);   // --> 52

console.log(++a); //--> 52 
//console.log(a); 

console.log(a--); //52
console.log(--a); //50


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

let age = 4869794675;

if((age <= 18) && (age >=1))
{
    console.log("Not adult"); 
}
else if ((age > 18) && (age <= 60) ) {
    console.log("Adult"); 
} 
else if ((age > 60) && (age <= 100) ) {
    console.log("Older");     
} 
else {
    console.log("Invalid age"); 
}


let number = 76878;

if(number % 2 == 0){
    console.log("these is even number"); 
}
else{
    console.log("these is odd number ");
}








// 1- 18 -- 60 -100
// not adult  adult  older