// Assignment code here
var characterlength = 8;
var choiceArr = [];
var specialCharacter = ['/','!','$','%','*'];
var UpperCaseArr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var LowerCaseArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var numberArr = ['0','1','2','3','4','5','6','7','8','9'];

 // Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function writePassword() {
  var correctPrompts = getPrompts();

  if (correctPrompts) {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  }
}
function generatePassword() {

  var password = "";
  for(var i = 0; i <characterlength; i++) {
    var randomIndex = Math.floor(Math.random() * choiceArr.length);
    password = password + choiceArr[randomIndex];
  }
  return password;

  }

  function getPrompts(){
    choiceArr = [];
    
    characterlength = parseInt(prompt("How many characters do you want in password? 8-128 characters"));

    if(isNaN(characterlength)) characterlength < 8 || characterlength > 128 ;{
      
    }
    if(confirm("Would you like Uppercase in your password?")) {
      choiceArr = choiceArr.concat(UpperCaseArr);
    }
    
    if (confirm("Would you like Lowercase in your password?")) {
      choiceArr = choiceArr.concat(LowerCaseArr);
    }

    if (confirm("Would you like special characters in your password?")) {
      choiceArr = choiceArr.concat(specialCharacter);
    }

    if (confirm("Would you like numbers in your password?")) {
      choiceArr = choiceArr.concat(numberArr);
    }
    return true;
}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
