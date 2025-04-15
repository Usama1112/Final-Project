// Form validation
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    alert('Please fill out all fields.');
    return false;
  }
  // Simple email validation
  if (!email.includes('@') || !email.includes('.')) {
    alert('Please enter a valid email address.');
    return false;
  }
  alert('Thank you for contacting us, ' + name + '!');
  this.reset();
  return true;
});

// Example button interaction
document.getElementById('exampleButton').addEventListener('click', function() {
  alert('Button clicked! Thanks for your interest in SuperProduct.');
});

// Dark mode toggle
document.getElementById('toggleDark').addEventListener('click', function() {
  document.body.classList.toggle('bg-gray-900');
  document.body.classList.toggle('text-white');
  document.body.classList.toggle('text-gray-900');
  document.body.classList.toggle('bg-gray-50');
});
