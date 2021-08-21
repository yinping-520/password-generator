
//I need array of lowercase, uppercase, numeric, and special characters
var lowercase = 'abcdefghijklmnopqrstuvwxyz';
var uppercase = lowercase.toUpperCase();
var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var specialChar = "!()?[]_~`;:@#$%^&*+=";

//elements
var passwordText = document.querySelector("#password");
var generateBtn = document.querySelector("#generate");

//test through each boolean and if it is true, then push the array or string to dataType 
function generatePassword(){
  var dataType = [];
  password = ""

  //all the prompts in user interface.
  var length = prompt("How long do you want your password to be?");
  while (length > 128 || length < 8){
    alert("Please choose number between 8 and 128.")
    var length = prompt("How long do you want your password to be?");
  }
  
  var lowercaseLetter = confirm ("Would you like lowercase letters in your password?");
  var uppercaseLetter = confirm ("Would you like uppercase letters in your password?");
  var num = confirm ("Would you like numbers in your password?");
  var speChar = confirm ("Would you like special characters in your password?");
  
// checking the booleans 
  if (lowercaseLetter){
    dataType.push(lowercase);
  }
  if (uppercaseLetter){
    dataType.push(uppercase);
  }
  if (num){
    dataType.push(number);}
    
  if (speChar){
    dataType.push(specialChar);
  } 

  //loop through the dataType array and pick a random character from the array each time it loops through it.
  for (var i = 0; i < length; i++) {
    var random = Math.floor(Math.random() * dataType.length);
    var anyArray = dataType[random];
    var random1 = Math.floor(Math.random() * anyArray.length);
    
    password += anyArray[random1];
  
}
  return password;

}


function writePassword() {
  var password = generatePassword();
  if (password) {
    passwordText.value = password;
  }
  

}

generateBtn.addEventListener("click", writePassword);
