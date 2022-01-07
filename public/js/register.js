

const registerFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#name-register').value.trim();
    const email = document.querySelector('#email-register').value.trim();
    const password = document.querySelector('#password-register').value.trim();
    const plan = document.querySelector('#plan-register').value.trim();
    const height = document.querySelector('#height-register').value.trim();
    const weight = document.querySelector('#weight-register').value.trim();


  
    if (name && email && password && plan && height && weight) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ name, email, password, plan, height, weight }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/account');
      } else {
        console.log('hello')
        alert(response.statusText);
      }
    }
  };
  
  document
    .querySelector('.register-form')
    .addEventListener('submit', registerFormHandler);
  