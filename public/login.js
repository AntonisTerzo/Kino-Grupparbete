document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#signInForm').addEventListener('submit', function(event) {
      event.preventDefault();
    
      const username = document.querySelector('#signInEmail').value;
      
      console.log('Användarnamn:', username, 'Lösenord: Hidden',);
    });
    });