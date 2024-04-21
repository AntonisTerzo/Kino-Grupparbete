document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    // Basic validation
    if (!email || !password || !confirmPassword) {
        document.getElementById("signupError").textContent = "Please fill in all fields.";
        document.getElementById("signupError").classList.remove("hidden");
        return;
    }

    if (password !== confirmPassword) {
        document.getElementById("signupError").textContent = "Passwords do not match.";
        document.getElementById("signupError").classList.remove("hidden");
        return;
    }
    window.location.href = '/login'
});
//Password strength

const passwordInput = document.querySelector('#password');
const passwordStrengthText = document.querySelector('#passwordStrength');

passwordInput.addEventListener('input', () => {
    const strength = checkPasswordStrength(passwordInput.value);
    passwordStrengthText.textContent = strength;
    passwordStrengthText.classList.remove('hidden');
});

function checkPasswordStrength(password) {
    let strength = '';
    const patterns = [
        /.{8,}/, 
        /[a-z]/, 
        /[A-Z]/, 
        /\d/, 
    ];
    const passed = patterns.reduce((count, pattern) => pattern.test(password) ? count + 1 : count, 0);

    switch (passed) {
        case 4:
            strength = 'Strong password';
            passwordStrengthText.classList.add('text-green-500');
            passwordStrengthText.classList.remove('text-yellow-500', 'text-red-500');
            break;
        case 3:
            strength = 'Ok password';
            passwordStrengthText.classList.add('text-yellow-500');
            passwordStrengthText.classList.remove('text-green-500', 'text-red-500');
            break;
        default:
            strength = 'Weak password';
            passwordStrengthText.classList.add('text-red-500');
            passwordStrengthText.classList.remove('text-yellow-500', 'text-green-500');
    }

    return strength;
}
