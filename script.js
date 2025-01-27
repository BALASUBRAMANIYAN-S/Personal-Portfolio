// Smooth scrolling for navbar links
document.querySelectorAll('.nav_option a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault(); // Prevent default anchor click behavior
  
      const targetId = this.getAttribute('href').substring(1); // Get the target section ID
      const targetSection = document.getElementById(targetId);
  
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth', // Smooth scroll effect
          block: 'center', // Scroll to the top of the section
        });
      }
    });
  });

//   effect below 
document.addEventListener("DOMContentLoaded", () => {
    const phrases = ["Embedded Engineer", "Front-end Developer", "Freelancer  "]; // Add phrases here
    const dynamicText = document.getElementById("dynamic-text");

    let phraseIndex = 0;
    let charIndex = 0;
    let typing = true; // State for typing or deleting
    let typingSpeed = 150; // Speed of typing
    let deletingSpeed = 100; // Speed of deleting
    let delayBetweenPhrases = 2000; // Delay before switching to next phrase

    function typeEffect() {
        const currentPhrase = phrases[phraseIndex];
        
        if (typing) {
            // Typing effect
            dynamicText.textContent = currentPhrase.substring(0, charIndex);
            charIndex++;

            if (charIndex > currentPhrase.length) {
                typing = false;
                setTimeout(typeEffect, delayBetweenPhrases); // Pause before deleting
                return;
            }
        } else {
            // Deleting effect
            dynamicText.textContent = currentPhrase.substring(0, charIndex);
            charIndex--;

            if (charIndex === 0) {
                typing = true;
                phraseIndex = (phraseIndex + 1) % phrases.length; // Move to next phrase
            }
        }

        setTimeout(typeEffect, typing ? typingSpeed : deletingSpeed); // Adjust speed
    }

    typeEffect(); // Start the typing effect
});

  
// resume download option below 
document.getElementById("download-resume-btn").addEventListener("click", () => {
    // Create an anchor element
    const anchor = document.createElement("a");

    // Set the href to your resume file path
    anchor.href = "resume.pdf"; // Replace with the actual path to your resume file

    // Set the download attribute to the desired file name
    anchor.download = "Balasubramaniyan_Resume.pdf";

    // Trigger a click on the anchor element
    anchor.click();
});
// icon effect is bottom 

// project section
document.querySelector('.projects-container').addEventListener('wheel', function (e) {
    if (e.deltaY > 0) {
        this.scrollLeft += 100; // Scroll right
    } else {
        this.scrollLeft -= 100; // Scroll left
    }
});
// code for feats 
// Example of JavaScript for any interactions or future enhancements

document.addEventListener("DOMContentLoaded", () => {
    console.log("Feats Section Loaded!");
  });
//   contact page 
// Handle form submission
document.querySelector('.contact-form').addEventListener('submit', (e) => {
    e.preventDefault();

    // Log form submission attempt for monitoring
    console.log("Form submission started...");

    // Set the initial loading status
    localStorage.setItem('formStatus', 'loading');
    displayStatus('Submitting your message...', 'loading');

    // Simulate a delay (mimicking a server request)
    setTimeout(() => {
      let isSuccess = Math.random() > 0.5; // 50% chance of success

      if (isSuccess) {
        console.log("Form submitted successfully.");
        alert('Thank you for your message! I’ll get back to you soon.');
        e.target.reset();
        localStorage.setItem('formStatus', 'success');
        displayStatus('Message sent successfully!', 'success');
      } else {
        console.log("Form submission failed.");
        localStorage.setItem('formStatus', 'error');
        displayStatus('Oops, something went wrong. Please try again later.', 'error');
      }
    }, 2000); // Simulate network request with a delay
  });

  // Display stored form submission status when the page loads
  window.addEventListener('load', () => {
    const status = localStorage.getItem('formStatus');
    if (status) {
      displayStatus(`Last status: ${status}`, status);
    }
  });

  // Function to display status message
  function displayStatus(message, status) {
    const statusMessage = document.createElement('div');
    statusMessage.textContent = message;
    statusMessage.className = status; // success, error, or loading

    // Add the status message to the page
    document.querySelector('.status-container').appendChild(statusMessage);

    // Optionally hide the message after 5 seconds
    setTimeout(() => {
      statusMessage.remove();
    }, 5000);
  }