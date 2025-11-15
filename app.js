// This file contains the JavaScript logic for the password entry, game interactions, and navigation between different mini-games and the final surprise page.

document.addEventListener("DOMContentLoaded", function() {
    const passwordInput = document.getElementById("password-input");
    const passwordButton = document.getElementById("password-button");
    const gamesContainer = document.getElementById("games-container");
    const errorMessage = document.getElementById("error-message");
    
    const correctPassword = "BIMBO";

    // Permitir envío con Enter también
    passwordInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            checkPassword();
        }
    });

    passwordButton.addEventListener("click", checkPassword);

    function checkPassword() {
        const enteredPassword = passwordInput.value.trim().toUpperCase();
        if (enteredPassword === correctPassword) {
            errorMessage.textContent = "";
            gamesContainer.style.display = "block";
            document.getElementById("password-container").style.display = "none";
            sessionStorage.setItem("unlocked", "true");
        } else {
            errorMessage.textContent = "Contraseña incorrecta. Intenta de nuevo.";
            passwordInput.value = "";
            passwordInput.focus();
        }
    }

    // Verificar si ya desbloqueó antes en esta sesión
    if (sessionStorage.getItem("unlocked") === "true") {
        gamesContainer.style.display = "block";
        document.getElementById("password-container").style.display = "none";
    }
});