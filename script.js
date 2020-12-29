// Assignment code here
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Password gen function

function generatePassword() {
// Password length inquiry
  var passLength = prompt(" Please specify how long you would like your password to be. Must be between 8 - 128 characters.")

  var lengthConfirm = parseInt(passLength);
  console.log(lengthConfirm);

//A length that starts at 8 but does not exceed 128 characters
  if (isNaN(passLength)) {
    alert ("Please enter a number between 8 and 128. Please try again.");
    return;
  }
  if (passLength < 8) {
    alert("Error, that selection does not meet the minimum character requirement. Please try again.");
    return;
  }
   if (passLength > 128) {
    alert("Error, that selection exceeds the character requirement. Please try again.");
    return;
  }


// Password requirement variables
  var collectionOfValids = [];
  var upperCaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" .split("");
  var lowerCaseChar = "abcdefghijklmnopqrstuvwxyz" .split("");
  var numberChar = "0123456789" .split("");
  var specialChar = "*&^%$#@!?><{}" .split("");


// Now we verify if a lowercase character is desired
  var lowerCaseConfirm = confirm("Do you want your password to include any lowercase letter?");
  if(lowerCaseConfirm === true){
    for ( var i = 0; i < lowerCaseChar.length; i++) {
      collectionOfValids.push(lowerCaseChar[i]);
    }
  }
// Uppercase confirmation
  var upperCaseConfirm = confirm("Would you like to add any uppsercase letters?");
  if(upperCaseConfirm === true){
    for ( var i = 0; i < upperCaseChar.length; i++) {
      collectionOfValids.push(upperCaseChar[i]);
    }
  }

// Numerical values confirmation
    var numberConfirm = confirm("Will we be including any numbers in your password?");
    if(numberConfirm === true) {
      for (var i = 0; i < numberChar.length; i++) {
        collectionOfValids.push(numberChar[i]);
      }
    }

//  Lastly we confirm if any special characters are to be added
    var specialConfirm = confirm("Now are any special characters going to be included as well?");
    if (specialConfirm === true) {
      for (var i = 0; i < specialChar.length; i++) {
        collectionOfValids.push(specialChar[i]);
      }
    }
// Per the boolean responses plus the number above a password is born
  var randomPassword = "";
  for (var i = 0; i < lengthConfirm; i++) {
    collectionOfValids[
        Math.floor(Math.random() * collectionOfValids.length)];
    randomPassword +=
      collectionOfValids[
        Math.floor(Math.random() * collectionOfValids.length)
      ];
  }
  return randomPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
