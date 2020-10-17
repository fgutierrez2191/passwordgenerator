// Assignment code here
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
//these are arrays of characters
var upperArray = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'
];
var lowerArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var numericArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']; 
var specialCharacterArray =  ['@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.'];
//window prompts
function getPasswordOptions(){
  var getUpperCase = window.confirm("would you like upper case letters in your password?")
  var getLowerCase = window.confirm("Would you like lower case letters in your password?")
  var getNumeric = window.confirm("Would you like numbers in your password?")
  var getSpecialCharacter = window.confirm("Would you like special characters in your password?")
  var chooseLength = window.prompt("Please choose a length between 8 and 128 characters.")
  

  var passwordOptions = {
    upperCase: getUpperCase,
    lowerCase: getLowerCase, 
    numeric: getNumeric,
    specialCharacter: getSpecialCharacter,  
    length: chooseLength,
  }

  console.log(passwordOptions)
  return passwordOptions;
}


function generatePassword() {
var options = getPasswordOptions();
var possibleCharacters = [];
if(options.upperCase === true){
  possibleCharacters.push(upperArray);
}
  console.log(possibleCharacters); 
  if(options.lowerCase === true) {
    possibleCharacters.push(lowerArray);
}
    console.log(possibleCharacters);
  if(options.specialCharacter === true){
  possibleCharacters.push(specialCharacterArray);
  }
  console.log(possibleCharacters); 
  if(options.numeric === true){
    possibleCharacters.push(numericArray);
  }
    console.log(possibleCharacters);
  console.log(options);
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);

