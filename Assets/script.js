// // Assignment Code
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);



// Define the character sets that can be used in the password.
let lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
let upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numericChars = "0123456789";
let specialChars = "!@#$%^&*()_-+={}[];:'<>,.?/";

// Main function to generate the password based on user preferences.
function generatePassword() {
  // Empty string to store all possible characters for the password.
  let possibleChars = "";
  
  // Prompt user for password length and ensure it is a number between 8 and 128.
  let passwordLength = parseInt(prompt("Choose a password length of at least 8 characters and no more than 128 characters.\nPlease make sure to input any digit between 8 & 128."));
  // If the input is not a number or out of range, keep asking.
  while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    passwordLength = parseInt(prompt("Invalid input. Please enter a number between 8 and 128."));
  }

  // Ask user if lowercase characters should be included and add them if yes.
  if (confirm("Do you want to include lowercase characters?")) {
    possibleChars += lowerCaseChars;
  }

  // Ask user if uppercase characters should be included and add them if yes.
  if (confirm("Do you want to include uppercase characters?")) {
    possibleChars += upperCaseChars;
  }

  // Ask user if numbers should be included and add them if yes.
  if (confirm("Do you want to include numeric characters?")) {
    possibleChars += numericChars;
  }

  // Ask user if special characters should be included and add them if yes.
  if (confirm("Do you want to include special characters?")) {
    possibleChars += specialChars;
  }

  // If no types of characters were selected, alert the user and return an empty string.
  if (possibleChars === "") {
    alert("At least one character type should be selected.");
    return "";
  }

  // Construct the password using random characters from the possible characters.
  let password = "";
  for (let i = 0; i < passwordLength; i++) {
    password += possibleChars.charAt(Math.floor(Math.random() * possibleChars.length));
  }

  // Return the generated password.
  return password;
}

// Get a reference to the "Generate" button on the page.
let generateBtn = document.querySelector("#generate");

// Function to write the generated password to the password input field.
function writePassword() {
  // Call the generatePassword function to create a password.
  let password = generatePassword();
  
  // Get the input field where the password will be displayed.
  let passwordText = document.querySelector("#password");

  // Set the value of the input field to the generated password.
  passwordText.value = password;
}

// Add a click event listener to the "Generate" button, so the writePassword function is called when clicked.
generateBtn.addEventListener("click", writePassword);




