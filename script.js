// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);

function generatePassword() {
    var length = 8,
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]\:;?><,./-=",
        password = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        password += charset.charAt(Math.floor(Math.random() * n));
    }
    
    var pwlength = prompt("How many characters would uou like your password to contain?", "enter number");

    if(pwlength<8){
        alert("password must be at least 8 characters")
    }
    else if(pwlength>128){
        alert("password must be less than 129 characters")
    }
    else{
 
       Q1 = confirm("Would you like to include spacial characters?");
       Q2 = confirm("Would you like to include lowercase characters?");
       Q3 = confirm("Would you like to include uppercase  characters?");
       Q4 = confirm("Would you like to include numeric characters?");

    
       if(Q1!==true && Q2!==true && Q3!==true && Q4!==true){
        alert("You must select at least one character type")
        }
       else{
    

           

        }
    
    }
      return password; 
}



 


