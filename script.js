// Assignment code here


// ask for some info the user lenght 4 kind of content 

// bucket 1 for upper   1 for low  1 num  1 special 


//

//  variables // global scope
var lettersU = ["A","B","C","D","E","F","G"];
  var lettersL = "abcdf"
  var numbers = "0123456789"
  var specials = "!@#$%^&*()_+="
  var randomUpperCase;
  var len;
  var upp;
  var low;
  var num;
  var spe;
  var password = ""
  var total = ""

// fucntion   // scope function 


// call and use the variables


//asing the user the options 

function generatePassword() {
  
  //prompt  questions 

  var len = prompt("how many chracters")
  if (len < 8 || len > 128) {
    alert("please choose a length between 8 and 128");
    generatePassword();
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

  if(upp == false && low == false && num == false && spe == false)
  {

  }
  // need to check if all the inputs are false. if all of them are false, then alert("you need to pick at least one category")
//and then call thegeneratepassword function. 
// len -> 
while(password.length <= len){
    if (upp) {
    randomUpperCase = lettersU[Math.floor(Math.random() * lettersU.length)]
    console.log("randomUppercase letter" + randomUpperCase);
    password = password + randomUpperCase    //  "" + E  //true
    total = total + lettersU
    //choose a letter for lettersU  (random)
  }
  
  if (low) {
    var index = Math.floor(Math.random() * lettersL.length) ///
    password = password + lettersL[index]    //  "" + g   "Eg"  // false
    total = total + lettersL
    //choose a letter for lettersU  (random)
  }
  if (num) {
    var index = Math.floor(Math.random() * numbers.length) ///
    password = password + numbers[index]    //  "" + 3  "Eg3"  //true
    total = total + numbers
    //choose a letter for lettersU  (random)
  }
  if (spe) {
    var index = Math.floor(Math.random() * specials.length) ///
    password = password + specials[index]    //  "" + :   "Eg3:" //false
    total = total + specials
    //choose a letter for lettersU  (random)
  }
}

  // total is going to have all the lettersU and all the numbers
  // 6 char but just upp and numbers
  // build the rest of the password  ( if user want 8 characters you will need to add as many as the diffrence between the pasword.lenght and the len)
  //loop for 6 characters 
  //var index = Math.floor ///
  // password = password + total[index]  
  console.log("password" + password);
  return password;
  
}
writePassword(password);

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);


