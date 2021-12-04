let car = {
    name:"saiful",
    fname:"islam",
    lname:"ripon"

}

console.log(car)

//
const person = {
    firstName:"sakhawat",
    lastName:"Hossain",
    serName:"Razi",
    age:49,
    madrasha:"lalbag"
}
person.firstName ="mamun";
console.log(person.firstName+" "+person.lastName);


const people = {
    cName:"konok",
    dName:"sorwar",
    age:40,
    fName:function (){
        return this.cName+ " " + this.dName+ " " +this.age;

    }
}

document.getElementById('demo').innerHTML = people.fName();

// events js

function time(){
    document.getElementById('demo1').innerHTML = Date();
    console.log("date is clicked")
}

const string = "this is md saiful islam ripon ";
console.log(string)
console.log(string.length);

//
const text = "abcdefghijklmnopqrstuvwxyz"
console.log(text.length)

//
let texts = "We are the so-called \"Vikings\" from \"the\"  north.";
console.log(texts);


//
let writen = 'it\'s allright';
console.log(writen)//
let wroten = "this is \\ identified"
console.log(wroten)
//
let laide = "Hey whats'up bro"
console.log(laide);

//js string method

let str = "Apple, Banana, Kiwi";
str.slice(7,13)
console.log(str.slice(7,14))

const sTringS = document.getElementById('demo3').innerHTML = str.slice(4,13);
console.log(sTringS)

let khiwi = "this, named, saiful";

console.log(khiwi.slice(7,18));

//
let strs = "Apple, Banana, Kiwi"
console.log(strs.substr(7));
console.log(strs.substr(-4))

// 


function replaced(){
    let textse = Document.getElementById('demo4').innerHTML;
    document.getElementById('demo4').innerHTML = 
    // console.log("replaceText is clicked")
    textse.replace("microsoft","W3School");
}


//
// toUpppercase

function upperFunction(){
    let upperFunctions = document.getElementById("demo5").innerHTML;
    document.getElementById("demo5").innerHTML = 
    upperFunctions.toUpperCase();
    console.log('button is already clicked');
    // document.write('you have clicked button')
}

//tolowercase

function lowerCs(){
    document.getElementById("demo6").innerHTML = toUpperCase;


}


function lowerFunction(){
    let lower = document.getElementById("demo6").innerHTML;
    document.getElementById("demo6").innerHTML = 
    lower.toLowerCase();
}

let concat1 = "this is";
let concat2 = "our country";
let concat3 = concat1.concat(" "+ concat2);
console.log(concat3);
let concat4 = "our country name is bangladesh";
let concat5 = concat3.concat(" " + concat4)
console.log(concat5)


//
// trim() method

let textTrim = "                     this is saiful islam ripon               ";
console.log(textTrim)
let textTrim2 = textTrim.trim();
console.log(textTrim2)


// padStart() method
let padStart1 = "6";
let padStart2 = padStart1.padStart(10,5);
console.log(padStart2)

//

//padEnd()
let padStart3 = "7";
let padStart4 = padStart3.padEnd(10,2);
console.log(padStart4);
//
// charAt() method

let charAt1 = "Hello world";
let charAt2 = charAt1.charAt(10);
console.log(charAt2)

//charCodeAt() method

let charCodeAt1 = "hello world";
let charCodeAt2 = charCodeAt1.charCodeAt(2);
console.log(charCodeAt2)

// property access

let property1 ="hello world";
let property2 = property1[8];
console.log(property2);

// string to convert array 

let split1 = "saiful,islam,ripon,konok"
console.log(split1)
let split2 = split1.split(",")
console.log(split2)
console.log(split2[1])


//indexOf()
const index = "this is a saiful islam ripon";
const indexof = index.indexOf("sla");
console.log(indexof);

//lastIndexOf()
const lastIndex = "hey everyone whatsup man this is my first project";
const lastof = lastIndex.lastIndexOf("m");
console.log(lastof);

//string.match()
const match = "the rain is SPAIN stays mainly in the pain";
const matchs = match.match(/ain/g);
console.log(matchs);
const matchd = match.match(/ain/gi);
console.log(matchd);

//string includes()
let includes = "Hello world, welcome to the universe";
let includesStr = includes.includes("welcome");
console.log(includesStr)

//
let startsWith = "hello world ,this is my first website";
let startsWiths = startsWith.startsWith("hello");
console.log(startsWiths);
let stws = startsWith.startsWith("world");
console.log(stws);

//endsWits();
let endsWith = "hello world this is saiful";
let endsW = endsWith.endsWith("this",16);//true
// let endsW = endsWith.endsWith("world",11)//true;
// let endsW = endsWith.endsWith("world",10)//false;

console.log(endsW);

//back-ticks

let backtics = `Bangladesh is an agriculturals country`;
console.log(backtics);

let insides = `hi this is mr kashem uncle.'i wanted to go him' but i dont like him "kashem" uncle`;
console.log(insides);


//multiline strings

let multilineStrings = 
`{hey 
  whats'up
     where are you Bro
 next Day
     i will come your                       
   ok broh }`;

console.log(multilineStrings);  

// interpolation

let firstName = "saiful";
let lastName = "islam";
let fullName = `Hey ${firstName} ${lastName} Ripon`;
console.log(fullName);


//expressions substitutions

let price = 10;
let vat = 0.25;
// let totalRate = `total price : ${price*(1+vat)}`; //thats system is enough for calculation 
let totalRate = `total price : ${(price*(1+vat)).toFixed(2)}`;
console.log(totalRate)

//
let xxxx = 123e5;
console.log(xxxx)

//
let p = 0.2+0.1;
console.log(p);

//tostring method

// let tostring = 123;
// let toStrings = tostring.toString();
// console.log(toStrings);


let tostring = 124;
let xxxxx = (124+24).toString();
console.log(xxxxx);




//toExponential() method

var toex = 9.656;
var toesd = toex.toExponential(2);
console.log(toesd);
var toesd = toex.toExponential(6);
console.log(toesd)
var toesd = toex.toExponential(19);
console.log(toesd)

//toFixesd

var tofix  = 9.656;
var tofixe = tofix.toFixed(5);
console.log(tofixe);
var tofixe = tofix.toFixed(0);
console.log(tofixe);

//toPrecision() method
var toPrecision = 6.956;
var topre = toPrecision.toPrecision(7)
console.log(topre);


//tomax method()
let x = Number.MAX_VALUE;
console.log(x)
let xs = Number.MIN_VALUE;
console.log(xs)

let xz = Number.NaN;
console.log(xz);

// let nan = 100;
// console.log(nan);

let nan = 100 /"Apple";
console.log(nan);

//array method

const array =  ["saiful","islam","ripon","mannan"];
console.log(array[3]);

const arrays =  ["saiful","islam","ripon","mannan"];
arrays[0] = "kamal";
console.log(arrays);

const arra =  ["jamal","uddin",100,50];
console.log(arra);


//object method

const biodeta = {
    fName:"saiful",
    lName:"islam",
    age:40,
    roll:7018
}

console.log(biodeta.roll);


//length

const lengt = ["kalam","balam","salam","alam",60,"",""];
console.log(lengt.length)

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const fruit = fruits[fruits.length-1];
// console.log(fruit);

const fruits = ["Banana", "Orange", "Apple", "Mango"];
const fruit = fruits[fruits.length-2];
console.log(fruit);

//looping array elements

/**
 this code is not working..........................
  const fruitsItem =  ["mango","orange","jackfruit","watermillon","apple"];

let flen = fruitsItem.length;
let tests = "<ul>";

for (let i = 0; i < flen; i++) {
    tests += "<li">+ fruitsItem[i] + "</li>";
    
}
tests += "</ul>";
console.log(tests)

document.getElementById("demo7").innerHTML = tests;
 */


// adding array elements push method

const fall = ["mango","apple","banana","watermillon"]
const falls = fall.push("malta");
console.log(falls);//output 5 
console.log(fall);
const fallse = fall.push("chicken","cow","monkey");
console.log(fall);

var fuit = ["apple","mango",50,"50"]
 fuit[1] = "manhs";
 console.log(fuit)


 var tostringss = ["apple","banana","mango","orange","watermillon"];
 console.log(tostringss);
document.getElementById("demo8").innerHTML = tostringss.toString();




var join = ["apple","banana","mango","orange","watermillon","litchi","jackfruit"];
console.log(join);
document.getElementById("demo9").innerHTML = join.join(" * ");

//pop() method ,this method working to remove in array last key 

var popping = ["pepsi","mirinda","mountaindew","aquafina"];
console.log(popping)
var poppings = popping.pop();
console.log(popping);

const fruitsss = ["Banana", "Orange", "Apple", "Mango"];
let x6 = fruitsss.pop();  // x = "Mango"
console.log(x6)

//pushing() method ,the push method add a new element to an array(at the end)

var pushing = ["kalam","balam","salam","akbor"];
var pushings = pushing.push("kallu","sallu");
console.log(pushing);
var pushs = pushing.push("khalek","raju","konok");
console.log(pushing)
var popsing = pushing.pop();
console.log(pushing)

//shift() method //this is equivalent in pop() method ,its working only removed in first key in array

var shift = ["kalams","jamals","alamas","balamas"];
console.log(shift);
var shifts = shift.shift();
console.log(shift);

//inshift() method equivalent in push() method ,its working add a new element(at the begining);
var unshift = ["raju","surajit","sohel"];
console.log(unshift)
var unshifts = unshift.unshift("shawon","saiful","rubel");
console.log(unshift);

// changing elements

const celement = ["titas","orange","banani","gulshan"];
console.log(celement);
celement[0] = "dhaka";
console.log(celement);
celement[2] = "cantonment";
console.log(celement);

//delete method used remove in array elements
var deleteMethod = ["saiful","islam","ripon"];
var deleteMethods = delete deleteMethod[0];
console.log(deleteMethod);


//splice method

var splice = ["khalek","mallek","falek","kamal"];
console.log(splice)
var splices = splice.splice(2,0,"anonna","bithi","kashem");
console.log(splice);

//splice use remove in element
var spli = ["anowar","janowar","monowar","kallu","sallu"];
console.log(spli)
var spils = spli.splice(0, 3);
console.log(spli);

// concat() method
const myBoy = ["abir","appan","saiful","faruk","ripon"];
const myGirl = ["jannnat","tanha","lubaba","fatema"];
const myAllBG = ["all Boys","all Girls"];
const totalArrayConcat = myBoy.concat(myGirl);
console.log(totalArrayConcat);
const totalArrayConcats = myBoy.concat(myGirl,myAllBG);
console.log(totalArrayConcats);

//slice() method

const sliceFood = ["apple","malta","kalam","salam","falam","lalam"];
console.log(sliceFood)
const sliceFoods = sliceFood.slice(0)
console.log(sliceFoods);


let fruitsx = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango',"komola","jackfruit"];
console.log(fruitsx);
let fruitsxs = fruitsx.slice(1,6)
console.log(fruitsxs);

//sort() method 
const sort = ["banana","apple","mango","jackfruit","lemon"];
console.log(sort);
const sorts = sort.sort();
console.log(sort);

//.reverse() method
const revese = ["banana","apple","mango","orange","jackfruit"]
console.log(revese);
const revesrse = revese.reverse();
console.log(revesrse);

// numeric sort ....number gulake serial kore sajanor method



const numericSort = [100,78,50,1,5,3,89,40,52];
const numericSorts = numericSort.sort(function(a,b){return a-b});
console.log(numericSort);

//


const numerAlpha = [40,10,5,15,1,20,30,48,90,8,100,18,70];
document.getElementById("demo10").innerHTML = "Default Serial (100-1) = "+numerAlpha;

function functionAlphabet() {
    document.getElementById("demo10");
    numerAlpha.sort();
    document.getElementById("demo10").innerHTML = "Serial Count Automatically = "+ numerAlpha;
}

function functionNumeric(){
    document.getElementById("demo10");
    // console.log("numeric is clicked");
    numerAlpha.sort(function(a,b){return a-b});
    document.getElementById("demo10").innerHTML = "Serial Count (1-100) = "+ numerAlpha;
}

function functionNumericHundredsToOne(){
    document.getElementById("demo10");
    numerAlpha.sort(function(a,b){return b-a});
    document.getElementById("demo10").innerHTML ="Serial Count (100-1) = "+ numerAlpha;
}


//Sorting an Array in Random Order
const randomArray = [5,1,8,25,36,40,15,85,70];
document.getElementById("demo11").innerHTML ="Default Value ,But it's Changable = "+ randomArray;

function randomArrayMethod(){
    document.getElementById("demo11");
    randomArray.sort(function(a,b){return 0.2-Math.random()});
    document.getElementById("demo11").innerHTML = randomArray;
}


//highest and lowest value

const highLowValue = [40,1,50,42,30,45,78,95,100,37,48];
document.getElementById("demo12").innerHTML = highLowValue;

function highValue(){
    document.getElementById("demo12");
    highLowValue.sort(function(a,b){return a-b});
    document.getElementById("demo12").innerHTML = highLowValue[0];
}
function lowValue() {
    document.getElementById("demo12");
    highLowValue.sort(function(a,b){return a-b});
    document.getElementById("demo12").innerHTML = highLowValue[highLowValue.length-1];

}

//math.max()

// const mathMax = [5,52,60,2,90,70,60,80];

// function mathMaxArray(mathMax) {
//     document.getElementById("demo13");
//     return Math.max.apply(null, arr);
//     document.getElementById("demo13").innerHTML = mathMaxArray(mathMax);
//     console.log(mathMaxArray(mathMax));
    
// }

/**const cars = [
    {type:"Volvo", year:2016},
    {type:"Saab", year:2001},
    {type:"BMW", year:2010}
  ];

 
  
  function displayCars(){
      document.getElementById("demo14").innerHTML =
      cars[0].type + " "+ cars[0].year + "<br>" +
      cars[1].type + " "+ cars[1].year + "<br>"+
      cars[2].type + " "+ cars[2].year;
      
  }
  displayCars(); */


  //object in array *important*
  const cars = [
    {type:"Volvo", year:2016, model:"TATA"},
    {type:"Saab", year:2001, model:"HERO"},
    {type:"BMW", year:2010, model:"EICHER"}
  ];

 
  
  function displayCars(){
      document.getElementById("demo14").innerHTML =
      cars[0].type + " "+ cars[0].year + " "+ cars[0].model + "<br>" +
      cars[1].type + " "+ cars[1].year + " "+ cars[1].model + "<br>"+
      cars[2].type + " "+ cars[2].year +" "+ cars[2].model;
      
  }
  displayCars();

  //forEach method

/**  const forNumber = [45,10,25,10,40,60,30,10];
  let forText = "";

  forNumber.forEach(myForEachMunction);

  document.getElementById("demo15").innerHTML = forText;

  function myForEachMunction(value, index, array) {
      forText += value +"<br>";
  }
   */

//just replaced index (value er jaigai)

  /**const forNumber = [45,10,25,10,40,60,30,10];
  let forText = "";

  forNumber.forEach(myForEachMunction);

  document.getElementById("demo15").innerHTML = forText;

  function myForEachMunction(value, index, array) {
      forText += index +"<br>";
  }
  */

  const forNumber = [45,10,25,10,40,60,30,10];
  let forText = "";

  forNumber.forEach(myForEachMunction);

  document.getElementById("demo15").innerHTML = forText;

  function myForEachMunction(value, index, array) {
      forText += array +"<br>";
      forText += index +"<br>";
      forText += value +"<br>";
  }

//
 const valueforEach = [5,15,20,4,80,90,60,];
 let valueEach = "";

 valueforEach.forEach(myValueEachFunction);
 document.getElementById("demo16").innerHTML = valueEach;

 function myValueEachFunction(value) {
     valueEach += value +"<br>";
 }


 //array.filter();

/** const valueFilter = [15,7,1,18,25,36,98,78,41];
 const over25 = valueFilter.filter(myValueFunction);

 document.getElementById("demo17").innerHTML = over25;

 function myValueFunction(value) {
     return value > 25;
 }
 //return 36,98,78,41
 */

/** const valueFilter = [15,7,1,18,25,36,98,78,41];
 const over25 = valueFilter.filter(myValueFunction);

 document.getElementById("demo17").innerHTML = over25;

 function myValueFunction(value) {
     return value < 25;
 }
 return 15,7,1,18
  */

/** const valueFilter = [15,7,1,18,25,36,98,78,41];
 const over25 = valueFilter.filter(myValueFunction);

 document.getElementById("demo17").innerHTML = over25;

 function myValueFunction(value) {
     return value >= 25;
 }
 //return 25,36,98,78,41
  */

 const valueFilter = [15,7,1,18,25,36,98,78,41];
 const over25 = valueFilter.filter(myValueFunction);

 document.getElementById("demo17").innerHTML = over25;

 function myValueFunction(value) {
     return value <= 25;
 }

 //reduce() ...This example finds the sum of all numbers in an array:


 /**const reduceArray = [10,15,20,25,10,60,30,40,80,70];
let reduceSum = reduceArray.reduce(myReduceFunction);
document.getElementById("demo18").innerHTML = reduceSum;

function myReduceFunction(total, value,index, array) {
    return total+index;

}

result 55 hobe 

*/

/**const reduceArray = [10,15,20,25,10,60,30,40,80,70];
let reduceSum = reduceArray.reduce(myReduceFunction);
document.getElementById("demo18").innerHTML = reduceSum;

function myReduceFunction(total, value,index, array) {
    return value;
}
ans 70 hobe karon reduce rightside theke calculate kore 
*/



const reduceArray = [10,15,20,25,10,60,30,40,80,70];
let reduceSum = reduceArray.reduce(myReduceFunction);
document.getElementById("demo18").innerHTML = reduceSum;

function myReduceFunction(total, value,index, array) {
    return total+value;
}


//every() method ,,This example check if all array values are larger than 18:


/**const everyArray = [15,25,40,30,27,18,20,39,70];
let everyArrayTrueOrFalse = everyArray.every(myEveryArray);
document.getElementById("demo19").innerHTML = "every value > 25:ans = "+everyArrayTrueOrFalse;

function myEveryArray(value,index,array){
    return value >= 15;
}
ans:true
*/
/**const everyArray = [15,25,40,30,27,18,20,39,70];
let everyArrayTrueOrFalse = everyArray.every(myEveryArray);
document.getElementById("demo19").innerHTML = "every value > 25:ans = "+everyArrayTrueOrFalse;

function myEveryArray(value,index,array){
    return value > 14;
}
ans:true
*/

const everyArray = [15,25,40,30,27,18,20,39,70];
let everyArrayTrueOrFalse = everyArray.every(myEveryArray);
document.getElementById("demo19").innerHTML = "every value > 25:ans = "+everyArrayTrueOrFalse;

function myEveryArray(value,index,array){
    return value > 25;
}
//

const everyArrays = [15,25,40,30,27,18,20,39,70];
let everyArrayTrueOrFalses = everyArrays.every(myEveryArrays);
document.getElementById("demo20").innerHTML = "every value >= 15:ans = "+everyArrayTrueOrFalses;

function myEveryArrays(value,index,array){
    return value >= 15;
}

//array.includes();
//ECMAScript 2016 introduced Array.includes() to arrays. This allows us to check if an element is present in an array (including NaN, unlike indexOf).

/**const arrayIncludes = ["apple","mango","jackfruit","orange"];
const arrayIncludess = arrayIncludes.includes("mango");
console.log(arrayIncludess);
return:true
*/

const arrayIncludes = ["apple","mango","jackfruit","orange"];
const arrayIncludess = arrayIncludes.includes("watermilon");
console.log(arrayIncludess);

/**Array.find()
The find() method returns the value of the first array element that passes a test function.
This example finds (returns the value of) the first element that is larger than 18:
*/

const arrayFind=  [10,15,20,25,5];
const arrayFinds = arrayFind.find(myFindFunction);
document.getElementById("demo21").innerHTML = "First number over 18 is " + arrayFinds;


function myFindFunction(value, index,array){
    return value < 15;
}

/**array.Form()......The Array.from() method returns an Array object from any object with a length property or any iterable object.

const arrayForm = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
const arrayForms = arrayForm.form();
console.log(arrayForms);
 
it's not working
*/

