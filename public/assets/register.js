// Toggle password visibility
    const toggle = document.getElementById('togglePwd');
    const pwd = document.getElementById('password');
    toggle.addEventListener('click', () => {
      const isHidden = pwd.type === 'password';
      pwd.type = isHidden ? 'text' : 'password';
      toggle.textContent = isHidden ? 'Hide' : 'Show';
      toggle.setAttribute('aria-pressed', String(isHidden));
    });

    // Basic client-side validation and demo fill
    const form = document.getElementById('signupForm');
    const msg = document.getElementById('message');

    form.addEventListener('submit', (e) => {
    //   e.preventDefault();
      msg.textContent = '';
      msg.className = '';

      const f = new FormData(form);
      const password = f.get('password') || '';
      const confirm = f.get('confirm') || '';

      if (password.length < 8) {
        showError('Password must be at least 8 characters.');
        return;
      }
      if (password !== confirm) {
        showError('Passwords do not match.');
        return;
      }
      if (!f.get('email')) {
        showError('Please enter an email address.');
        return;
      }
      // Simple success feedback (replace with actual submission)
      showSuccess('All good — form validated! (Here you would send data to your server.)');
      // optional: clear sensitive fields
      form.password.value = '';
      form.confirm.value = '';
    });

    function showError(text){
      msg.textContent = text;
      msg.className = 'err';
    }
    function showSuccess(text){
      msg.textContent = text;
      msg.className = 'ok';
    }

    // Demo autofill for quick testing
    document.getElementById('demoFill').addEventListener('click', () => {
      document.getElementById('first').value = 'Ada';
      document.getElementById('last').value = 'Lovelace';
      document.getElementById('email').value = 'ada@example.com';
      document.getElementById('phone').value = '+91 98765 43210';
      document.getElementById('country').value = 'India';
      document.getElementById('about').value = 'Curious programmer and mathematician.';
      document.getElementById('password').value = 'demoPass123';
      document.getElementById('confirm').value = 'demoPass123';
      showSuccess('Demo values filled — press "Create account" to validate.');
    });