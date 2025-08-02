document.addEventListener("DOMContentLoaded", function () {
  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  });

  // Handle contact form submission
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Thanks for reaching out! We'll get back to you shortly.");
      contactForm.reset();
    });
  }

  // Mentee form
  const menteeForm = document.querySelector("#mentee-form form");
  if (menteeForm) {
    menteeForm.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Thank you for applying as a mentee! We'll be in touch soon.");
      menteeForm.reset();
    });
  }

  // Mentor form
  const mentorForm = document.querySelector("#mentor-form form");
  if (mentorForm) {
    mentorForm.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Thank you for signing up as a mentor!");
      mentorForm.reset();
    });
  }
});
