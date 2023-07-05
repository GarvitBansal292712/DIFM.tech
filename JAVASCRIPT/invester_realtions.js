const fullName = document.getElementById('name');
const fullNameError = document.getElementById('nameError');
const email = document.getElementById('email');
const emailError = document.getElementById('emailError');
const phone = document.getElementById('mobile');
const phoneError = document.getElementById('mobileError');
const selectOption = document.getElementById('selectOption');
const selectError = document.getElementById('selectError');


form.addEventListener('submit', (e) => {
  e.preventDefault();
  checkInputs();
});

function checkInputs() {
    checkFullNameValidity()
    checkEmailValidity()
    checkPhoneValidity()
    checkSelectValidity()



    //Checking Full Name validation
    fullName.addEventListener('blur', checkFullNameValidity);
    function checkFullNameValidity() {
      const fullNameValue = fullName.value.trim();
    
      if (fullNameValue === '') {
        setError(fullNameError, 'Full name is required');
        setInvalidClass(fullName);
      } else if (/\d/.test(fullNameValue)) {
        setError(fullNameError, 'Full name should not contain numbers');
        setInvalidClass(fullName);
      } else {
        clearError(fullNameError);
        setValidClass(fullName);
      }
    }
    

    //Checking Email Validation
    email.addEventListener('blur', checkEmailValidity);
    function checkEmailValidity() {
      const emailValue = email.value.trim();
    
      if (emailValue === '') {
        setError(emailError, 'Email is required');
        setInvalidClass(email);
      } else if (!isValidEmail(emailValue)) {
        setError(emailError, 'Please enter a valid email address');
        setInvalidClass(email);
      } else {
        clearError(emailError);
        setValidClass(email);
      }
    }

    function isValidEmail(email) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }



   //Checking Mobile Number Validation
    phone.addEventListener('blur', checkPhoneValidity);
    function checkPhoneValidity() {
      const phoneValue = phone.value.trim();
    
      if (phoneValue === '') {
        setError(phoneError, 'Mobile Number is required');
        setInvalidClass(phone);
      } else if (!isValidPhone(phoneValue)) {
        setError(phoneError, 'Please enter a valid 10-digit Mobile number');
        setInvalidClass(phone);
      } else {
        clearError(phoneError);
        setValidClass(phone);
      }
    }

    function isValidPhone(phone) {
      return /^\d{10}$/.test(phone);
    }


    //Checking Select Option Validation
    selectOption.addEventListener('change', checkSelectValidity);
    function checkSelectValidity() {
      const selectedOption = selectOption.value;
    
      if (selectedOption === '') {
        setError(selectError, 'Please select an option');
        setInvalidClass(selectOption);
      } else {
        clearError(selectError);
        setValidClass(selectOption);
      }
    }
    
    //Error And Success Functions to set Invalid and Valid classes  
    function setError(element, message) {
      element.textContent = message;
    }
    
    function clearError(element) {
      element.textContent = '';
    }
    
    function setInvalidClass(input) {
      input.classList.add('is-invalid');
      input.classList.remove('is-valid');
    }
    
    function setValidClass(input) {
      input.classList.remove('is-invalid');
      input.classList.add('is-valid');
    }    
}


