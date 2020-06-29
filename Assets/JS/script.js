var lower_Casealphabet=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upper_Casealphabet=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","W","X","Y","Z"];
var numbers=["0","1","2","3","4","5","6","7","8","9"];
var special=["!","@","#","$","%","^","&","*","(",")", " "];
function generaterandomPassword() {
    var newCharacterlist=[];
    var verifylower_Case=confirm("Lower Case Letters??? (OK for YES and Cancel for NO)");
    var verifyupper_Case=confirm("Upper Case Letters??? (OK for YES and Cancel for NO)");
    var verifynumbers=confirm("Numbers??? (OK for YES and Cancel for NO)");
    var verifyspecial=confirm("Special Characters??? (!@#$ (OK for YES and Cancel for NO)");
    while (verifylower_Case == false && verifyupper_Case == false && verifynumbers == false && verifyspecial == false) {
        alert("You must pick at least one option");
        verifylower_Case=confirm("Lower Case Letters??? (OK for YES and Cancel for NO)");
        verifyupper_Case=confirm("Upper Case Letters??? (OK for YES and Cancel for NO)");
        verifynumbers=confirm("Numbers??? (OK for YES and Cancel for NO)");
        verifyspecial=confirm("Special characters??? (!@#$ (OK for YES and Cancel for NO)");
    }
    var choosepasswordLength=parseInt(prompt("Choose a number of  characters between 8 and 128"));
    while(choosepasswordLength < 8 || choosepasswordLength > 128) {
        alert("Please choose a number between 8 and 128");
        choosepasswordLength=parseInt(prompt("Choose the number of characters between 8 and 128"));
    } 
    if (verifylower_Case){
        newCharacterlist = newCharacterlist.concat(lower_Casealphabet);
    }
    if (verifyupper_Case){
        newCharacterlist = newCharacterlist.concat(upper_Casealphabet);
    }
    if (verifynumbers){
        newCharacterlist = newCharacterlist.concat(numbers);
    }
    if (verifyspecial){
        newCharacterlist = newCharacterlist.concat(special);
    }
    var passwordString=""
    for (var i = 0; i < choosepasswordLength; i++) {
        passwordString = passwordString + newCharacterlist[Math.floor(Math.random() * newCharacterlist.length)];
    }
    passwordEntry.textContent=passwordString;    
}
var generateButton=document.getElementById("generate");
var passwordEntry=document.getElementById("password");
generateButton.onclick = generaterandomPassword;