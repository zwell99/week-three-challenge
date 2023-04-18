// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var password = "";
  var numChar = prompt("How long do you want the password to be? (8-128 characters)");
  while ((numChar < 8)||(numChar > 128)) {
    numChar = prompt("Please input a vallid length between 8 and 128.");
  }
  var includeLower = confirm("Should the password include lower case letters?");
  var includeUpper = confirm("Should the password include upper case letters?");
  var includeNum = confirm("Should the password include numbers?");
  var includeSpecial = confirm("Should the password include special characters? (!, ?, @, #, etc.)");

  var isVallid = !((!includeLower)&&(!includeUpper)&&(!includeNum)&&(!includeSpecial));
  
  while (!isVallid) {
    alert("You must include some kinds of characters.");
    includeLower = confirm("Should the password include lower case letters?");
    includeUpper = confirm("Should the password include upper case letters?");
    includeNum = confirm("Should the password include numbers?");
    includeSpecial = confirm("Should the password include special characters? (!, ?, @, #, etc.)");
    isVallid = !((!includeLower)&&(!includeUpper)&&(!includeNum)&&(!includeSpecial));
  }

  var lower = "qwertyuiopasdfghjklzxcvbnm";
  var upper = lower.toUpperCase();
  var numbers = "1234567890";
  var special = "!@#$%^&*?";
  var charSet = "";
  if (includeLower) {
    charSet = charSet + lower;
  }
  if (includeUpper) {
    charSet = charSet + upper;
  }
  if (includeNum) {
    charSet = charSet + numbers;
  }
  if (includeSpecial) {
    charSet = charSet + special;
  }
  
  for (var i = 0; i < numChar; i++) {
    password = password + charSet[Math.floor(Math.random() * charSet.length)];
  }

  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
