document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const emailError = document.getElementById('emailError');
  const passwordError = document.getElementById('passwordError');

  let valid = true;

  // Email validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailInput.value.match(emailPattern)) {
    emailError.textContent = 'Please enter a valid email.';
    valid = false;
  } else {
    emailError.textContent = '';
  }

  // Password validation
  if (passwordInput.value.length < 6) {
    passwordError.textContent = 'Password must be at least 6 characters.';
    valid = false;
  } else {
    passwordError.textContent = '';
  }

  if (valid) {
    // Simulate form submission (you can integrate backend here)
    alert('Login successful (demo only)');
    // this.submit(); ← Uncomment if using real server
  }
});
