(function () {
  'use strict';

  const form = document.querySelector('.needs-validation');
  const password = document.getElementById('password');
  const confirmPassword = document.getElementById('confirmPassword');

  function checkPasswordsMatch() {
    if (password.value !== confirmPassword.value) {
      confirmPassword.setCustomValidity('Passwords do not match');
    } else {
      confirmPassword.setCustomValidity('');
    }
  }

  password.addEventListener('input', checkPasswordsMatch);
  confirmPassword.addEventListener('input', checkPasswordsMatch);

  form.addEventListener('submit', function (event) {
    checkPasswordsMatch();

    if (!form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    }

    form.classList.add('was-validated');
  }, false);
})();
