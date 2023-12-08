document.getElementById("theForm").addEventListener("submit", function(event) {
    var firstName = document.getElementById("firstName").value.trim();
    var lastName = document.getElementById("lastName").value.trim();
    var email = document.getElementById("email").value.trim();
    var password = document.getElementById("thePassword").value.trim();
    var notification = document.getElementById("notification").checked;

    if (firstName === "" || lastName === "" || email === "" || password === "" || !notification) {
        alert("Please fill out all required fields.");
        event.preventDefault(); // Prevents form submission if validation fails
    }
    // You can add more advanced validation logic if needed
});