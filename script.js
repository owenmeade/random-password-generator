// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var passwordLength = 8;
var passwordArray = [];
var upperCaseArray = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var lowerCaseArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var specCharArray = ['!','@','#','$','%','^','&','*','(',')','<','>','?'];
var numArray = ['0','1','2','3','4','5','6','7','8','9'];

// Write password to the #password input
function writePassword() {
  var promptAns = pswCriteria(); //call criteria function
  var passwordText = document.querySelector("#password");
  if (promptAns) {
    var password = generatePassword();
    passwordText.value = password;
  } 
}

//criteria function
function pswCriteria() {
  passwordLength = [];
  var criteriaOne = window.prompt("How long would you like you password? 8-128 characters");
  passwordLength = Number(criteriaOne);
  console.log(passwordLength);
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("ERROR! Password length must be number between 8 and 128.");
    return false;
  }
  if (confirm("Would you like any uppercase letters in your password?")) {
    passwordArray = passwordArray.concat(upperCaseArray);
  }
  if (confirm("Would you like any lowercase letters in you password?")) {
    passwordArray = passwordArray.concat(lowerCaseArray);
  }
  if (confirm("Would you like any special characters in you password?")) {
    passwordArray = passwordArray.concat(specCharArray);
  }
  if (confirm("Would you like any numbers in your password?")) {
    passwordArray = passwordArray.concat(numArray);
  }
  return true;
}

function generatePassword() {
  var password = "";
  for (var i = 0; i < Number(passwordLength); i++) {
    var randomSelector = Math.floor(Math.random() * passwordArray.length);
    password = password + passwordArray[randomSelector];
  }  
  return password;
}