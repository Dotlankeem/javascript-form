 // function validateForm(e) {
//     e.preventDefault()


// Validated form 1
    let formCont = document.getElementById('formSub')
formCont.addEventListener('submit', function (e) {
    e.preventDefault();

    let nameInput = document.getElementById('name').value;
    let lnameInput = document.getElementById('lname').value;
    let dobInput = document.getElementById('dob').value;
    let numInput = document.getElementById('number').value;

    let nameError = document.getElementById('nameError');
    let lnameError = document.getElementById('lnameError');
    let dobError = document.getElementById('dobError');
    let numError = document.getElementById('numError')

    nameError.innerHTML = '';
    lnameError.innerHTML = '';
    dobError.innerHTML = '';
    nameError.innerHTML = ''

    let namePatternL = /^[a-zA-Z0-9] +$/;
    let namePattern = /^[a-zA-Z0-9] +$/;

    if (nameInput.trim() === "") {
        nameError.innerHTML = 'Firstname is required'
        nameError.style.display = 'block'
        // console.log('required') 
    }

    else if (!namePattern.test(nameInput)) {
        nameError.innerHTML = 'Please enter a valid name  (Alphanumeric characters and space only.)'
        nameError.style.display = 'block'
    }
   

    if (lnameInput.trim() === "") {
        lnameError.innerHTML = 'Lastname is required'
        lnameError.style.display = 'block'
        // console.log('required') 
    }

    else if (!namePatternL.test(lnameInput)) {
        lnameError.innerHTML = 'Please enter a valid name  (Alphanumeric characters and space only.)'
        lnameError.style.display = 'block'
    }
   
    let dateFormat = /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/\d{4}$/;

    if (dobInput.match(dateFormat)) {
        dobError.innerHTML = ''
        dobError.style.display = 'block'
    }

    var phoneFormat = /^\d{3}-\d{3}-\d{4}$/;
    if (!numInput.match(phoneFormat)) {
        numError.innerHTML = 'Invalid phone number'
        numError.style.display = 'block'
    }

    else if (numInput >= 11) {
        numError.innerHTML = 'Phone number must be 11 digits'
    }
})
    
        // alert('Form submitted successfully')

// valididated Form 2
    
    let formCont2 = document.getElementById('formSubmit')
    formCont2.addEventListener('submit', function (e) {
    e.preventDefault();

        var playerInput = document.getElementById('player').value;
     var emailInput = document.getElementById('email').value;
      var passwordInput = document.getElementById('password').value;
        var confirmPasswordInput = document.getElementById('confirmPassword').value;
        
        var playerError = document.getElementById('playerError')
      var emailError = document.getElementById('emailError');
      var passwordError = document.getElementById('passwordError');
      var confirmPasswordError = document.getElementById('confirmPasswordError');

        // Reset previous error messages
        playerError.innerHTML = '';
      emailError.innerHTML = '';
      passwordError.innerHTML = '';
        confirmPasswordError.innerHTML = '';
        
      
        // Check email pattern
        
        if(playerInput.trim()===  ''){
            // console.log('Name i s required')
            playerError.innerHTML = 'Name is required'
            playerError.style.display = 'block'
        }
      if (emailInput === '') {
          emailError.innerHTML = 'Email Address is required.';
          emailError.style.display = 'block'
        // return false;
      }

      else if (!emailInput.endsWith('@gmail.com')) {
          emailError.innerHTML = 'Please enter a valid email address.';
        
      }

        // Check password pattern
        
        if (passwordInput === '') {
            passwordError.innerHTML = 'Password is required'
            passwordError.style.display = 'block'
        }
      else if (passwordInput  <  8) {
          passwordError.innerHTML = 'Password must be at least 8 characters long.';
          passwordError.style.display = 'block'
        // return false;
        }

        else{
            passwordError.innerHTML = ''
        }


      // Check if passwords match
      if (passwordInput !== confirmPasswordInput) {
          confirmPasswordError.innerHTML = 'Passwords does not match.';
          confirmPasswordError.style.display = 'block'
        // return false;
      }

      else {
          confirmPasswordError.innerHTML = ''
      }

      // If all validations pass, the form will be submitted
    //   return true;
    
    
    })

    
   
    let lastForm = document.getElementById("handleLastform");
    handleLastform.addEventListener('submit',  function(e){
        e.preventDefault();

        let countryInput = document.getElementById('country').value;
        let stateInput = document.getElementById('state').value
        let cityInput = document.getElementById('city').value;
        let codeInput = document.getElementById('code').value
        let languageInput = document.getElementById('language').value;

        let countryInputError = document.getElementById('countryError');
        let stateInputError = document.getElementById("stateError");
        let cityInputError = document.getElementById("cityError");
        let codeInputError = document.getElementById("codeError");
        let languageInputError = document.getElementById("langError");

        countryInputError.innerHTML = '';
        stateInputError.innerHTML = '';
        cityInputError.innerHTML = '';
        languageInputError.innerHTML = '';

        if(countryInput.trim() === ''){
          countryInputError.innerHTML = "Country IS REQUIRE"
        }

    

    })
            




    