var lowercasealphabets=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var Uppercasealphabets=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","W","X","Y","Z"];
var numbers=["0","1","2","3","4","5","6","7","8","9"];
var special=["!","@","#","$","%","^","&","*","(",")"];
function generaterandomPassword() {
    var newCharacterlist=[];
    var verifyLowerCase=confirm("Lower Case Letters??? (OK for YES and Cancel for NO)");
    var verifyUpperCase=confirm("Upper Case Letters??? (OK for YES and Cancel for NO)");
    var verifyNumbers=confirm("Numbers??? (OK for YES and Cancel for NO)");
    var verifySpecial=confirm("Special Characters??? (!@#$ (OK for YES and Cancel for NO)");
    while (verifyLowerCase == false && verifyUpperCase == false && verifyNumbers == false && verifySpecial == false) {
        alert("You must pick at least one option");
        verifyLowerCase=confirm("Lower Case Letters??? (OK for YES and Cancel for NO)");
        verifyUpperCase=confirm("Upper Case Letters??? (OK for YES and Cancel for NO)");
        verifyNumbers=confirm("Numbers??? (OK for YES and Cancel for NO)");
        verifySpecial=confirm("Special characters??? (!@#$ (OK for YES and Cancel for NO)");
    }
    var choosepasswordLength=parseInt(prompt("Choose a number of  characters between 8 and 128"));
    while(choosepasswordLength < 8 || choosepasswordLength > 128) {
        alert("Please choose a number between 8 and 128");
        choosepasswordLength=parseInt(prompt("Choose the number of characters between 8 and 128"));
    } 
    if (verifyLowerCase){
        newCharacterlist = newCharacterlist.concat(lowercasealphabets);
    }
    if (verifyUpperCase){
        newCharacterlist = newCharacterlist.concat(Uppercasealphabets);
    }
    if (verifyNumbers){
        newCharacterlist = newCharacterlist.concat(numbers);
    }
    if (verifySpecial){
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