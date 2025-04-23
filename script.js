const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');

  form.addEventListener('submit', async function (e) {
    e.preventDefault(); // Prevent redirect
    const data = new FormData(form);
    const action = form.action;

    try {
      const response = await fetch(action, {
        method: 'POST',
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        status.textContent = "Thank you! Your message has been sent.";
        form.reset();
      } else {
        status.textContent = "Oops! There was a problem. Please try again.";
      }
    } catch (error) {
      status.textContent = "Error sending the form.";
    }
  });