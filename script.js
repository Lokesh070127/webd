 
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    targetElement.scrollIntoView({
      behavior: 'smooth'
    });
  });
});

 
const mobileMenu = document.querySelector('.mobile-menu');
const navToggle = document.querySelector('.nav-toggle');

navToggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('show');
});

 
const form = document.querySelector('#contact form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');

form.addEventListener('submit', e => {
  e.preventDefault();

  let isValid = true;

  if (nameInput.value.trim() === '') {
    setError(nameInput, 'Please enter your name');
    isValid = false;
  } else {
    setSuccess(nameInput);
  }

  if (emailInput.value.trim() === '') {
    setError(emailInput, 'Please enter your email');
    isValid = false;
  } else if (!isValidEmail(emailInput.value)) {
    setError(emailInput, 'Please enter a valid email address');
    isValid = false;
  } else {
    setSuccess(emailInput);
  }

  if (messageInput.value.trim() === '') {
    setError(messageInput, 'Please enter a message');
    isValid = false;
  } else {
    setSuccess(messageInput);
  }

  if (isValid) {
    
    console.log('Form submitted successfully!');
    form.reset();
  }
});

 
function setError(input, message) {
  const formControl = input.parentElement;
  const errorMessage = formControl.querySelector('small');
  formControl.className = 'form-control error';
  errorMessage.innerText = message;
}

function setSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

 