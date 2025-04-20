/*document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name && email && message) {
        document.getElementById("responseMessage").textContent = "Thank you for reaching out! We'll get back to you soon.";
        document.getElementById("responseMessage").style.color = "white";
        document.getElementById("contactForm").reset();
    } else {
        document.getElementById("responseMessage").textContent = "Please fill out all fields.";
        document.getElementById("responseMessage").style.color = "red";
    }
});*/
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    let formData = new FormData(this);

    fetch("sendmail.php", {
        method: "POST",
        body: formData,
    })
    .then(response => response.text())
    .then(data => {
        if (data.trim() === "success") {
            document.getElementById("responseMessage").innerText = "Message Sent Successfully!";
        } else {
            document.getElementById("responseMessage").innerText = "Message Sending Failed!";
        }
    })
    .catch(error => console.error("Error:", error));
});
function sendToWhatsApp(event) {
    event.preventDefault(); // Prevent form from refreshing the page

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    let phoneNumber = "7897785352"; // Replace with your WhatsApp number (without + or 0)
    
    let whatsappURL = `https://wa.me/${phoneNumber}?text=Hello,%20I%20am%20${name}.%20My%20email%20is%20${email}.%20Message:%20${message}`;

    window.open(whatsappURL, "_blank"); // Opens WhatsApp in a new tab
}
