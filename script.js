function generatePassword() {
    const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+~`|}{[]:;?><,./-=';
    
    let availableCharacters = '';
    if (document.getElementById('includeLetters').checked) {
        availableCharacters += letters;
    }
    if (document.getElementById('includeNumbers').checked) {
        availableCharacters += numbers;
    }
    if (document.getElementById('includeSymbols').checked) {
        availableCharacters += symbols;
    }

    const length = parseInt(document.getElementById('length').value);
    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * availableCharacters.length);
        password += availableCharacters[randomIndex];
    }

    document.getElementById('password').value = password;
}

function copyPassword() {
    const passwordField = document.getElementById('password');
    passwordField.select();
    document.execCommand('copy');
    alert('Password copied to clipboard!');
}
