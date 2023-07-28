document.getElementById("mailbox-form").addEventListener("submit", function(event) {
    event.preventDefault();
  
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
  
    var successMessage = document.getElementById("success-message");
    successMessage.textContent = "Thank you, " + name + "! Your message has been sent.";
  
    // Clear the form fields
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
  });
  