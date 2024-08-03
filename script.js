// Function to generate a random password
function generatePassword(length) {
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    return password;
}

// Event listener for the Generate Password button
document.getElementById("generate-btn").addEventListener("click", function() {
    const passwordInput = document.getElementById("password");
    const generatedPassword = generatePassword(15); // Change the length of the password if needed
    passwordInput.value = generatedPassword;
});