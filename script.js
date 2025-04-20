function generatePassword() {
    const length = document.getElementById("length").value;
    const uppercase = document.getElementById("uppercase").checked;
    const lowercase = document.getElementById("lowercase").checked;
    const numbers = document.getElementById("numbers").checked;
    const symbols = document.getElementById("symbols").checked;

    let chars = "";
    if (uppercase) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (lowercase) chars += "abcdefghijklmnopqrstuvwxyz";
    if (numbers) chars += "0123456789";
    if (symbols) chars += "!@#$%^&*()_+-=[]{}|;:,.<>?";

    if (chars === "") {
        alert("Please select at least one option!");
        return;
    }

    let password = "";
    for (let i = 0; i < length; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    document.getElementById("password").value = password;
    updateStrength(password);
}

function copyPassword() {
    const passwordField = document.getElementById("password");
    passwordField.select();
    document.execCommand("copy");
    alert("Password copied to clipboard!");
}

function updateStrength(password) {
    let strength = "Weak 🔴";
    const length = password.length;
    let complexity = 0;

    if (/[A-Z]/.test(password)) complexity++;
    if (/[a-z]/.test(password)) complexity++;
    if (/[0-9]/.test(password)) complexity++;
    if (/[^A-Za-z0-9]/.test(password)) complexity++;

    if (complexity >= 3 && length >= 12) strength = "Strong 🟢";
    else if (complexity >= 2 && length >= 8) strength = "Medium 🟡";

    document.getElementById("strength").textContent = "Strength: " + strength;
}

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}
