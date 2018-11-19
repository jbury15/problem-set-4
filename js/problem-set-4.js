/*
 * Hello. 2 points.
 */

function hello() { ;
var div = document.getElementById ("output1")
div.innerHTML= ("Hello, AP Computer Science Principles!") ;
  ////////////////// DO NOT MODIFY
  check("hello"); // DO NOT MODIFY
  ////////////////// DO NOT MODIFY
} ;

/*
 * Hello, Again. 3 points.
 */

function helloAgain() {

  //////////// DO NOT MODIFY
  let name; // DO NOT MODIFY
  //////////// DO NOT MODIFY

  // Use the name variable declared above to store the user's response. You
  // do not need to re-declare it, only assign it a value.
var div = document.getElementById("output2")
name = prompt("Enter Name")
div.innerHTML= ("Hello, " + name + "!")

  ///////////////////////////// DO NOT MODIFY
  check("helloAgain", name); // DO NOT MODIFY
  ///////////////////////////// DO NOT MODIFY
}

/*
 * Celsius. 5 points.
 */

function celsius() {

  //////////////////////////////////////////////////////// DO NOT MODIFY
  let cels = ((Math.random() * 1001) - 100).toFixed(2); // DO NOT MODIFY
  //////////////////////////////////////////////////////// DO NOT MODIFY

  // The above code generates a random number between -100 and 1000
  // (inclusive), and rounds this value to 2 decimal places.

  var div = document.getElementById("output3")
  cels = prompt("Enter Celsius value")
  fah = ((cels * 9/5) + 32).toFixed(2)
  div.innerHTML= (cels + " degrees Celsius equals " + fah + " degrees Fahrenheit.")

  ////////////////////////// DO NOT MODIFY
  check("celsius", cels); // DO NOT MODIFY
  ////////////////////////// DO NOT MODIFY
}

/*
 * Fahrenheit. 5 points.
 */

function fahrenheit() {

  //////////////////////////////////////////////////////// DO NOT MODIFY
  let fahr = ((Math.random() * 1001) - 100).toFixed(2); // DO NOT MODIFY
  //////////////////////////////////////////////////////// DO NOT MODIFY

  // The above code generates a random number between -100 and 1000
  // (inclusive), and rounds this value to 2 decimal places.

var div = document.getElementById("output4")
fahr = prompt("Enter Fahrenheit value")
cel = ((fahr - 32) * 5/9).toFixed(2)
div.innerHTML= (fahr + " degrees Fahrenheit equals " + cel + " degrees Celsius.")
  ///////////////////////////// DO NOT MODIFY
  check("fahrenheit", fahr); // DO NOT MODIFY
  ///////////////////////////// DO NOT MODIFY
}

/*
 * Inches. 5 points.
 */

function inches() {

  /////////////////////////////////////////////////////// DO NOT MODIFY
  let input = prompt("Enter a non-negative integer."); // DO NOT MODIFY
  /////////////////////////////////////////////////////// DO NOT MODIFY

  // You are free to modify the value of inches, which you'll likely
  // need to do. Please do not modify the value of input.

  ////////////////////// DO NOT MODIFY
  let inches = input; // DO NOT MODIFY
  ////////////////////// DO NOT MODIFY

var div = document.getElementById("output5")
let miles = (inches / 63360)
miles = (Math.floor(miles))
let yards = (inches % 63360/36)
yards = (Math.floor(yards))
let feet = (inches % 63360 % 36/12)
feet = (Math.floor(feet))
inches = (inches % 63360 % 36 % 12/1)
inches = (Math.floor(inches))
div.innerHTML= ("Miles: " + miles + "<br>Yards: " + yards + "<br>Feet: " + feet + "<br>Inches: " + inches)

  ////////////////////////// DO NOT MODIFY
  check("inches", input); // DO NOT MODIFY
  ////////////////////////// DO NOT MODIFY
}

/*
 * Centimeters. 5 points.
 */

function centimeters() {

  /////////////////////////////////////////////////////// DO NOT MODIFY
  let input = prompt("Enter a non-negative integer."); // DO NOT MODIFY
  /////////////////////////////////////////////////////// DO NOT MODIFY

  // You are free to modify the value of centimeters, which you'll
  // likely need to do. Please do not modify the value of input.

  /////////////////////////// DO NOT MODIFY
  let centimeters = input; // DO NOT MODIFY
  /////////////////////////// DO NOT MODIFY

var div = document.getElementById("output6")
let kilometers = (centimeters / 100000)
kilometers = (Math.floor(kilometers))
let meters = (centimeters % 100000/100)
meters = (Math.floor(meters))
centimeters = (Math.floor(centimeters))
div.innerHTML= ("Kilometers: " + kilometers + "<br>Meters: " + meters + "<br>Centimeters: " + centimeters)
  /////////////////////////////// DO NOT MODIFY
  check("centimeters", input); // DO NOT MODIFY
  /////////////////////////////// DO NOT MODIFY
}

/*
 * Fluid Ounces. 5 points.
 */

function fluidOunces() {

  /////////////////////////////////////////////////////// DO NOT MODIFY
  let input = prompt("Enter a non-negative integer."); // DO NOT MODIFY
  /////////////////////////////////////////////////////// DO NOT MODIFY

  // You are free to modify the value of fluidOunces, which you'll
  // likely need to do. Please do not modify the value of input.

  /////////////////////////// DO NOT MODIFY
  let fluidOunces = input; // DO NOT MODIFY
  /////////////////////////// DO NOT MODIFY

var div = document.getElementById("output7")
let gallons = (fluidOunces / 128)
gallons = (Math.floor(gallons))
let quarts = (fluidOunces % 128/32)
quarts = (Math.floor(quarts))
let pints = (fluidOunces % 128 % 32/16)
pints = (Math.floor(pints))
let cups = (fluidOunces % 128 % 32 % 16/8)
cups = (Math.floor(cups))
fluidOunces = (fluidOunces % 128 % 32 % 16 % 8/1)
fluidOunces = (Math.floor(fluidOunces))
div.innerHTML= ("Gallons: " + gallons + "<br>Quarts: " + quarts + "<br>Pints: " + pints + "<br>Cups: " + cups + "<br>Fluid Ounces: " + fluidOunces)

  /////////////////////////////// DO NOT MODIFY
  check("fluidOunces", input); // DO NOT MODIFY
  /////////////////////////////// DO NOT MODIFY
}

/*
 * Ounces. 5 points.
 */

function ounces() {

  /////////////////////////////////////////////////////// DO NOT MODIFY
  let input = prompt("Enter a non-negative integer."); // DO NOT MODIFY
  /////////////////////////////////////////////////////// DO NOT MODIFY

  // You are free to modify the value of ounces, which you'll likely
  // need to do. Please do not modify the value of input.

  ////////////////////// DO NOT MODIFY
  let ounces = input; // DO NOT MODIFY
  ////////////////////// DO NOT MODIFY

var div = document.getElementById("output8")
let tons = (ounces / 32000)
tons = (Math.floor(tons))
let pounds = (ounces % 32000/16)
pounds = (Math.floor(pounds))
ounces = (ounces % 32000 % 16/1)
ounces = (Math.floor(ounces))
div.innerHTML= ("Tons: " + tons + "<br>Pounds: " + pounds + "<br>Ounces: " + ounces)
  ////////////////////////// DO NOT MODIFY
  check("ounces", input); // DO NOT MODIFY
  ////////////////////////// DO NOT MODIFY
}

/*
 * Money. 7 points.
 */

function money() {

  /////////////////////////////////////////////////////// DO NOT MODIFY
  let input = prompt("Enter a non-negative integer."); // DO NOT MODIFY
  /////////////////////////////////////////////////////// DO NOT MODIFY

  // You are free to modify the value of pennies, which you'll likely
  // need to do. Please do not modify the value of input.

  /////////////////////// DO NOT MODIFY
  let pennies = input; // DO NOT MODIFY
  /////////////////////// DO NOT MODIFY

var div = document.getElementById("output9")
let dollar = Math.floor((pennies)/100);
let quarter = Math.floor((pennies - (dollar*100))/25);
let dime = Math.floor((pennies - (dollar*100) - (quarter*25))/10);
let nickel = Math.floor((pennies - (dollar*100) - (quarter*25) - (dime*10))/5);
pennies = Math.floor((pennies - (dollar*100) - (quarter*25) - (dime*10) - (nickel*5))/1);
div.innerHTML = ("Dollars: " + dollar + "<br/>Quarters: " + quarter + "<br/>Dimes: " + dime + "<br/>Nickels: " + nickel + "<br/>Pennies: " + pennies);



  ///////////////////////// DO NOT MODIFY
  check("money", input); // DO NOT MODIFY
  ///////////////////////// DO NOT MODIFY
}

/*
 * Change. 8 points.
 */

function change() {

  ///////////////////////////////////////////////////////////////////// DO NOT MODIFY
  let input = prompt("Enter a non-negative number less than 1.00."); // DO NOT MODIFY
  ///////////////////////////////////////////////////////////////////// DO NOT MODIFY

  // You are free to modify the value of amount, which you'll likely
  // need to do. Please do not modify the value of input.

  ////////////////////// DO NOT MODIFY
  let amount = input; // DO NOT MODIFY
  ////////////////////// DO NOT MODIFY

amount*=100
let quarter=Math.floor((amount)/25);
let dime=Math.floor((amount - (quarter*25))/10);
let nickel=Math.floor((amount - (quarter*25) - (dime*10))/5);
let pennies=Math.floor((amount - (quarter*25) - (dime*10) - (nickel*5))/1);
document.getElementById("output10").innerHTML=quarter+dime+nickel+pennies+" coins.";

  ////////////////////////// DO NOT MODIFY
  check("change", input); // DO NOT MODIFY
  ////////////////////////// DO NOT MODIFY
}
