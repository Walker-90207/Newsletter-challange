// Define checkEmail function in the global scope
window.checkEmail = function () {
  var emailInput = document.getElementById('email');
  var alertSpan = document.getElementById('alert');
  var email = emailInput.value;

  var isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (isValid) {
    // Use location.replace for redirect
    location.href = 'success.html';
  } else {
    alertSpan.textContent = 'Valid email required.';
    alertSpan.style.color = 'rgba(225, 0, 0, 0.8)';

    // Change the input box color to red
    emailInput.style.backgroundColor = 'rgba(225, 0, 0, 0.2)';
    emailInput.style.zIndex = '100';
    emailInput.style.color = 'rgba(225, 0, 0, 0.8)';
    emailInput.style.outlineColor = 'rgba(225, 0, 0, 0.8)';
    emailInput.style.cursor = 'auto';
  }
};
  
