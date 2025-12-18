(function () {
  emailjs.init("YOUR_PUBLIC_KEY");
})();

document.getElementById("appointmentForm").addEventListener("submit", function(e) {
  e.preventDefault();

  emailjs.sendForm(
    "YOUR_SERVICE_ID",
    "YOUR_TEMPLATE_ID",
    this
  ).then(() => {
    alert("Appointment booked successfully 💖");
    this.reset();
  }).catch(() => {
    alert("Something went wrong. Please try again.");
  });
});

