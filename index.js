
//variables

let nameofperson = "nir";
console.log(nameofperson);

//constant
const interestrate =0.4;
console.log(interestrate);

//primitives
let name ="niranjan" // string literal
let age = "18"  //number literal
let isaccepted = "true" //boolean literal
let hisname = undefined;  //undefined literal
let chosingcolor = null;  //null literal

//reference types
//object 
let person = {
    name2 : 'Nirajan',
    age2 : 18,
    zodiac : 'scorpio'
};
//if we have to change name or anything inside a object
//dot notation
person.name2 = "xyz";

//braket notation
person['name2']= "abc";
console.log(person);

//arrays
let selectedteam = ["chelsea ", "liverpool", "man u"];
console.log(selectedteam);

//function
function greet(firstname , lastname){
    console.log("niranjan" , " ", "kumar")
}
greet("firstname");

//types of function
//calculating a value
function square(number){
    return number*number ;
}
console.log(square(5));


//operators
//arthmetic operators
let x=10 , y =3;
console.log(x + y); //addition
console.log(x - y); //subtraction
console.log(x * y);  //multiplication
console.log(x / y);  // division
console.log(x ** y); //x to the power y

//increment (++)
console.log(++x); //it increases the value of x by 1
console.log(x++); //increases the value of x by 1 but shows it in the output if we call x value again

//decrement (--)
console.log(--y);
console.log(y--);

//assignment operator
x = x +5;
x +=5;    //these 2 r same.. line 68 n 69

x = x -5 ;
x -= 5 ; //these 2 r same.. line 71 n 72 

//comparison operator
//relational operator
console.log(x > 0);
console.log(x < 0);
console.log(x >= 1);
console.log(x <= 1);

//equality 
console.log(x === 10);
console.log(x !== 10);

//strict equality ( type and value should be same)
console.log(1 === 1);  //both the operands r of same type n value 
console.log("1" === 1);  //first operand is string and 2nd one is value , result is gonna be false

//lose equality  (value )this converts the type of operand on left side to right side and checks only if value is equal
console.log(1 == 1 ); 
console.log("1" == 1);

//ternary operator
//if a customer has more than 100 points 
//he/she has gold membership or 
//he/she has silver membership
let points = 120;
let type = points > 100 ? "gold" : "silver ";
console.log(type);

//logical operator with boolean 
//AND operator - symbol &&
// Returns true if both the operands are true 
let highincome = true;
let goodcreditscore = true ;
let eligibleforloan = highincome && goodcreditscore ;
console.log(eligibleforloan); 

//logical OR - symbol ||
//returns true if any one of the operator is true
let highincome1 = true ;
let goodcreditscore1 = false ;
let eligibleforloan1 = highincome || goodcreditscore ;
console.log(eligibleforloan1);

//NOT operator - symbol !
let highincome2 = false;
let goodcreditscore2 = false ;
let eligibleforloan2 = highincome2 || goodcreditscore2 ;
console.log(eligibleforloan2);

let applicationrefused = !eligibleforloan2;
console.log(applicationrefused);

//logical operators with non boolean
//falsy (false)
//undefined
//null
//0
//"" - string
//false
//NaN - not a number
// anything which is not falsy is truthy

let usercolor = "red";
let defaultcolor = "blue ";
let selectedcolor = usercolor || defaultcolor ;
console.log(selectedcolor);
//in this case user has selected red , that's the reason selected color shows red . if user has not selected any color then it would be deafault color

//swapping operator
let a = "red";
let b ='blue';
 let c =a;
 a=b;
 b=c;
 console.log(a);
 console.log(b);

 //if else 
 let hour = 10
 if (hour >= 6 && hour <12) 
console.log("good moring");
else if (hour >= 12 && hour < 18)
    console.log("good afternoon");
else 
    console.log("good evening");

//switch case
    let role = 'guest' ;
    switch (role )
    {
        case 'guest' :
            console.log("guest user");
            break;

        case 'mod':
            console.log("moderator user");
            break;

        default:
            console.log("user");     

            
    }

//for loop
for (let i =0 ; i <5 ; i++){       //when i=0 it checks if its below 5 then prints hello world. i++ is the one which increments, which means it increases the value of i to 1,2,3 and 4. That's the reason hello world is printed 5 times
    console.log("hello world");
}

//display of odd numbers using for loop
for(let i =0; i <= 5 ; i++){
    if(i%2 !== 0) 
    console.log(i);
}


//while loop
//display of odd numbers
let i =0 ;
while(i<=5 ){
    if (i%2 !==0 )
    console.log(i);
    i++;                           //do not forget to increment because if we don't then we might crash the program
}

//do-while loop
let i = 0;                             //do not run this code as it will giv error because i has already been decleared in line 191 
do {
    if (i % 2 !== 0) console.log(i);
    i++
}while(i <= 5)

//break
let i =0 ;                           // //do not run this code as it will give error because 'i' has already been decleared in line 199
while (i <= 10 ){
    if ( i ===5) break ;
    console.log(i);
    i++;
}

//continue
let i =0;
while ( i <= 10 ){
    if (i % 2 === 0){
        i++;
        continue;
    }
console.log(i);
i++;
}    

//objects in detail
//basic example of object oriented programming

const circle = {
    radius : 1,
    location : {
        x : 1,
        y : 2 
    },
    isvisible : true,
    draw : function(){
        console.log("draw");

    }
};

circle.draw();   //method of calling something from object

//factory function
function createcircle(radius){
    return {
        radius,
        draw(){                   //creating a function inside function
            console.log("draw");   
        }
    };
}

const circle1 = createcircle(1);  //here 1 is the radius of the circle
console.log(circle1);

//constructor function
function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log("draw");
    }
}
 const circle = new Circle(1);     //new is keyword, create empty js object . 'this' is pointed towards the new . 

 //dynamic nature of objects
 //we can always add other properties in the object
 //we can even add new function in the object 
 //can delete or edit existing properties or methods or function in a object
//we cannot reset 'circle ' to new object in this case because circle is a constant 
 const circle = {
     radius = 1;
 };

 circle.color = "yellow";
 circle.draw = function(){
     console.log("drawing");
 }

 delete circle.color;              //"delete " is a keyword which can be used to delete 
 delete circle.draw; 
 

 //constructer 
function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log("draw");
    }
}
 const circle = new Circle(1);     //new is keyword, create empty js object . 'this' is pointed towards the new . 

 //dynamic nature of objects
 //we can always add other properties in the object
 //we can even add new function in the object 
 //can delete or edit existing properties or methods or function in a object
//we cannot reset 'circle ' to new object in this case because circle is a constant 
 const circle = {
     radius = 1;
 };

 circle.color = "yellow";
 circle.draw = function(){
     console.log("drawing");
 }

 delete circle.color;              //"delete " is a keyword which can be used to delete 
 delete circle.draw; 
 

 //Arrays
 //adding elements
 //add elements in the beginning

 const numbers = [3, 4];
 //add elements in the beginning
 numbers.unshift(1 ,2 );

 //add elements in the ending
 numbers.push(5,6);

 //add elements in the middle
 numbers.splice( 2 , 0 , "a" , "b"); //2 is the position where we can add elements , 0 is the number of data which we can delete and "a " and "b" are the ones added

console.log(numbers);


//finding elements
const numbers = [1,2,3,1,4,5];

console.log(numbers.indexOf(1));   //finding the number 1 from the start of the array. the index is 0 
console.log(numbers.lastIndexOf(1));  //finds the number 1 from the last and gives its index. index of 1 from last is  3

console.log(numbers.includes(1));   //to check if the number exists in the array. output will be true if it exists , false if it does'nt exist


