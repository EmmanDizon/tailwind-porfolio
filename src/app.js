// Initialize EmailJS with your public key
(function () {
  emailjs.init("QuI-PoaZnlJWN_S2_"); // replace with your real public key
})();

// Handle form submission
document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs
      .send("service_kyxpfss", "template_6v6wx0g", {
        title: "Email from my Portfolio",
        from_name: document.getElementById("name").value,
        from_email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        message: document.getElementById("message").value,
      })
      .then(function () {
        alert("✅ Message sent successfully!");
        document.getElementById("contact-form").reset();
      })
      .catch(function (error) {
        alert("❌ Failed to send message. Please try again.");
        console.error(error);
      });
  });
