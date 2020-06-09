// Assignment code here


// ask for some info the user lenght 4 kind of content 

// bucket 1 for upper   1 for low  1 num  1 special 


//

//  variables // global scope


// fucntion   // scope function 


// call and use the variables


//asing the user the options 

function generatePassword() {
  var lettersU = "ABCDEFG"
  var lettersL = "abcdf"
  var numbers = "0123456789"
  var specials = "!@#$%^&*()_+="
  var len;
  var upp;
  var low;
  var num;
  var spe;
  var password = ""
  var total = ""
  //prompt  questions 

  len = prompt("how many chracters")
  console.log(len)
  upp = confirm("do you want uppercase ok for yes cancel for no")
  console.log(upp)
  low = confirm("do you want lowercase ok for yes cancel for no")
  console.log(low)
  num = confirm("do you want numbers ok for yes cancel for no")
  console.log(num)
  spe = confirm("do you want special characters ok for yes cancel for no")
  console.log(spe)


  if (upp) {
    var index = Math.floor(Math.random * lettersU.length) /// 
    password = password + lettersU[index]    //  "" + E  //true
    total = total + lettersU
    //choose a letter for lettersU  (random)
  }
  console.log(index)
  if (low) {
    var index = Math.floor(Math.random * lettersL.length) ///
    password = password + lettersL[index]    //  "" + g   "Eg"  // false
    total = total + lettersL
    //choose a letter for lettersU  (random)
  }
  if (num) {
    var index = Math.floor(Math.random * numbers.length) ///
    password = password + numbers[index]    //  "" + 3  "Eg3"  //true
    total = total + numbers
    //choose a letter for lettersU  (random)
  }
  if (spe) {
    var index = Math.floor(Math.random * specials.length) ///
    password = password + specials[index]    //  "" + :   "Eg3:" //false
    total = total + specials
    //choose a letter for lettersU  (random)
  }

  console.log("password:", password)
  console.log("total: ", total)
  // total is going to have all the lettersU and all the numbers
  // 6 char but just upp and numbers
  // build the rest of the password  ( if user want 8 characters you will need to add as many as the diffrence between the pasword.lenght and the len)
  //loop for 6 characters 
  //var index = Math.floor ///
  // password = password + total[index]  



  console.log(password);
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
generateBtn.addEventListener("click", writePassword);


