// Assignment code here


// ask for some info the user lenght 4 kind of content 

// bucket 1 for upper   1 for low  1 num  1 special 


//

//  variables // global scope
var lettersU = ["A", "B", "C", "D", "E", "F", "G"];
var lettersL = ["a","b","c","d","f"]
var numbers = ["0","1","2","3","4","5","6","7","8","9"]
var specials = ["!","@","#","$","%","^","&","*","(",")","_","+","="]
var len;
var password = []
var total = []
var possiblecharacter = []


// fucntion   // scope function 


// call and use the variables


//asing the user the options 

function generatePassword() {
  var result = []
  //prompt  questions 

  var len = prompt("how many characters do you want?");
  while (len < 8 || len > 128 || isNaN(len)) {
    alert("please choose a length between 8 and 128");
  }
  console.log(len)
  var upp = confirm("do you want uppercase ok for yes cancel for no")
  console.log(upp)
  var low = confirm("do you want lowercase ok for yes cancel for no")
  console.log(low)
  var num = confirm("do you want numbers ok for yes cancel for no")
  console.log(num)
  var spe = confirm("do you want special characters ok for yes cancel for no")
  console.log(spe)

  if (upp == false && low == false && num == false && spe == false) {
    alert("you need to pick at least one category");
    //generatePassword();
  }

  var passwordOptions = {
    length: len,
    hasSpecialCharacters: spe,
    hasNumericCharacters: num,
    hasLowerCasedCharacters: low,
    hasUpperCasedCharacters: upp,
  };
  // need to check if all the inputs are false. if all of them are false, then alert("you need to pick at least one category")
  //and then call thegeneratepassword function. 
  // len -> 

  if (passwordOptions.hasUpperCasedCharacters) {
    possiblecharacter = possiblecharacter.concat(lettersU)
    total.push(randomize(lettersU))
    console.log("total uppercase " + total)

    // password += randomize(lettersU)    //  "" + :   "Eg3:" //false
    // total += lettersU
    // console.log("total uppercase " + total)
    //choose a letter for lettersU  (random)
  }

  if (passwordOptions.hasLowerCasedCharacters) {
    possiblecharacter = possiblecharacter.concat(lettersL)
    total.push(randomize(lettersL))
    console.log("total lowercase " + total)
    
    // password += randomize(lettersL)    //  "" + :   "Eg3:" //false
    // total += lettersL
    // console.log("total lowercase " + total)
    //choose a letter for lettersU  (random)
  }
  if (passwordOptions.hasNumericCharacters) {
    possiblecharacter = possiblecharacter.concat(numbers)
    total.push(randomize(numbers))
    console.log("total numbers " + total)
    
    // password += randomize(numbers)    //  "" + :   "Eg3:" //false
    // total += numbers
    // console.log("total numbers " + total)
    //choose a letter for lettersU  (random)
  }
  if (passwordOptions.hasSpecialCharacters) {
    possiblecharacter = possiblecharacter.concat(specials)
    total.push(randomize(specials))
    console.log("total specials " + total)
    
    // password += randomize(specials)    //  "" + :   "Eg3:" //false
    // total += specials
    // console.log("total specials " + total)
    //choose a letter for lettersU  (random)
  }
  console.log("total  " + total)



  for (var i = 0; i < passwordOptions.length; i++ ) {
    var possiblecharacter1 = randomize(possiblecharacter)
    result.push(possiblecharacter1)
  }
console.log("possiblecharacter " + possiblecharacter)
for (var i = 0; i < total; i++) {
  result[i] = total[i]
}
console.log(result.join(" "))
console.log("line 119 " + result)

  // total is going to have all the lettersU and all the numbers
  // 6 char but just upp and numbers
  // build the rest of the password  ( if user want 8 characters you will need to add as many as the diffrence between the pasword.lenght and the len)
  //loop for 6 characters 
  //var index = Math.floor ///
  // password = password + total[index]  
  console.log(result);
  return (result.join(" "));
}

function randomize(char) {
  var index = Math.floor(Math.random() * char.length)
  var randomelement = char[index]
  return randomelement
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
//generateBtn.addEventListener("click", generatePassword);
generateBtn.addEventListener("click", writePassword);


