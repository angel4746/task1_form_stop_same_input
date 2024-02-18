document.getElementById('submissionForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    if (localStorage.getItem(email) || localStorage.getItem(phone)) {
      document.getElementById('message').textContent = 'Duplicate submission detected. Submission rejected.';
      return;
    }
    localStorage.setItem(email, 'submitted');
    localStorage.setItem(phone, 'submitted');
    document.getElementById('message').textContent = 'Submission successful!';
    clearForm();
  });
  
  function clearForm() {
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';
  }
  