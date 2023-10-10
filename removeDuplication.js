/*  
Grandpa's hand isn't as steady as it used to be. You finally convinced him
to start using a password manager, but he accidentally typed and saved his
password with a bunch of extra characters. Help him recover his password by 
removing all the duplicate characters. 

Your function should take in a string of characters and return a
string with the duplicate characters removed. Assume that your input
is lowercased with only letters and numbers.  


*/
const password = "9338dsabbbadjdjdj2sdfdfdf282ff8fdsd888ss8cfgfg332q23";

function removeDupeChars(chars) {
  // Initiate a set to store unique values
  let nonDuplicate = new Set();
  // split the passord into an array of letters
  let splittedPassword = chars.split("");
  for (let i = 0; i < splittedPassword.length; i++) {
    nonDuplicate.add(splittedPassword[i]);
  }
  return Array.from(nonDuplicate).join("");
}

console.log(removeDupeChars(password));
