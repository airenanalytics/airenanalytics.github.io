// Validate input fields in the contact us form and enable form submission when the inputs are validated.
// Trigger Bootstrap's modal component to inform user the message has been sent successfully.
document.getElementById("contact-form").addEventListener("submit", function (e) {
    // Prevent form's default submit behavior
    e.preventDefault();

    // Declare overall status of check
    let valid = true;

    // Name field validation
    const nameInput = document.getElementById("entry.1555942851");
    const nameError = document.getElementById("nameError");
    if (nameInput.value.length === 0) {
        nameError.style.display = "block";
        valid = false;
    } else {
        nameError.style.display = "none";
    }

    // Email field validation
    const emailInput = document.getElementById("entry.1388118104");
    const emailError = document.getElementById("emailError");
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value)) {
        emailError.style.display = "block";
        valid = false;
    } else {
        emailError.style.display = "none";
    }

    // Enquiry field validation
    const enquiryInput = document.getElementById("entry.1166981533");
    const enquiryError = document.getElementById("enquiryError");
    if (enquiryInput.value.length === 0) {
        enquiryError.style.display = "block";
        valid = false;
    } else {
        enquiryError.style.display = "none";
    }

    // Prevent submission if validation fails
    if (!valid) {
        return;
    }

    // If valid, submit the form via AJAX
    const formData = new FormData(document.getElementById("contact-form"));

    fetch("https://docs.google.com/forms/d/e/1FAIpQLScqocNrZ9K20DXcWpF6e_ohHYcPUMBfu85mSfwIzgicx665NA/formResponse", {
        method: "POST",
        body: formData,
        mode: "no-cors"
    })
    .then(() => {
        // Show success message
        // document.getElementById("success-message").style.display = "block";
        const modal = new bootstrap.Modal(document.getElementById("modal-submission"));
        modal.show();
        document.getElementById("contact-form").reset();
    })
    .catch(() => {
        alert("There was an error submitting the form. Please try again later.");
    });
});