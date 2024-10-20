const passwordDisplay = document.getElementById('password');
const lengthInput = document.getElementById('length');
const uppercaseCheckbox = document.getElementById('uppercase');
const lowercaseCheckbox = document.getElementById('lowercase');
const numbersCheckbox = document.getElementById('numbers');
const symbolsCheckbox = document.getElementById('symbols');
const generateBtn = document.getElementById('generate');
const copyBtn = document.getElementById('copy');

const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const symbols = '!@#$%^&*()_+[]{}|;:,.<>?';

function generatePassword() {
  let characters = '';
  let password = '';
  
  if (uppercaseCheckbox.checked) characters += uppercaseLetters;
  if (lowercaseCheckbox.checked) characters += lowercaseLetters;
  if (numbersCheckbox.checked) characters += numbers;
  if (symbolsCheckbox.checked) characters += symbols;
  
  
  const length = parseInt(lengthInput.value);
  
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }
//   if(password.value == '')
//     passwordDisplay.value = "NULL";
//   else
    passwordDisplay.value = password;
}

function copyPassword() {
  navigator.clipboard.writeText(passwordDisplay.value)
    .then(() => alert('Password copied to clipboard'))
    .catch(err => console.error('Failed to copy: ', err));
}

generateBtn.addEventListener('click', generatePassword);
copyBtn.addEventListener('click', copyPassword);
