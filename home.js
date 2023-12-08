// Close dropdown menus if clicked outside
document.addEventListener('click', function(e) {
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(dropdown => {
      if (!dropdown.contains(e.target)) {
        const dropdownContent = dropdown.querySelector('.dropdown-content');
        dropdownContent.style.display = 'none';
      }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('subscribe-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        // Validate name and email fields
        const name = form.elements['name'].value.trim();
        const email = form.elements['email'].value.trim();

        if (name === '') {
            alert('Please enter your name.');
            return;
        }

        if (email === '') {
            alert('Please enter your email.');
            return;
        } else if (!isValidEmail(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        console.log(`Name: ${name}, Email: ${email}`);
    });

    // Function to validate email format
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});