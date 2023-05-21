// Add your JavaScript code here

// Example: Changing the background color of the header on scroll
window.addEventListener("scroll", function() {
  var header = document.querySelector("header");
  if (window.scrollY > 0) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});


// Smooth scroll to the section when corresponding header title is clicked
document.addEventListener("DOMContentLoaded", () => {
  const headerLinks = document.querySelectorAll("header nav ul li a");

  headerLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const targetSection = document.querySelector(link.getAttribute("href"));
      targetSection.scrollIntoView({ behavior: "smooth" });
    });
  });
});

/*
document.addEventListener("DOMContentLoaded", () => {
  const scrollingContainer = document.querySelector(".scrolling-container");
  const scrollingWrapper = document.querySelector(".scrolling-wrapper");
//
  scrollingContainer.addEventListener("scroll", () => {
    const scrollPosition = scrollingContainer.scrollLeft;
    const boxWidth = scrollingWrapper.scrollWidth / 4; // Assuming 4 sections in the scrolling box
    const totalScrollWidth = scrollingWrapper.scrollWidth;
  
    if (scrollPosition >= totalScrollWidth - scrollingContainer.offsetWidth) {
      scrollingContainer.scrollLeft = scrollPosition - totalScrollWidth + boxWidth;
    } else if (scrollPosition < 0) {
      scrollingContainer.scrollLeft = scrollPosition + totalScrollWidth - boxWidth;
    }
//
//test infinite scroll right
  const scrollToCenter = () => {
    const boxWidth = scrollingContainer.offsetWitdth;
    const containerWidth = window.innerWidth;
    const scrollOffset = (boxWidth - containerWidth) / 2;
    scrollingContainer.scrollLeft = scrollOffset;
  };

  // Call the scroll to center function when the page loads
  scrollToCenter();

  // Listen for window resize event to reposition the box
  window.addEventListener("resize", scrollToCenter);
 // });
});
*/




// Array of messages to display
const messages = ["Message 1", "Message 2", "Message 3"];

// Function to display alternating fading messages
function displayMessages() {
  const messageContainer = document.querySelector(".gallery--message-container");
  let index = 0;

  function showMessage() {
    const messageText = messageContainer.querySelectorAll(".gallery--message-text");
    messageText.forEach((element, i) => {
      element.style.display = i === index ? "block" : "none";
    });

    index = (index + 1) % messages.length;
  }

  setInterval(showMessage, 5000); // Change message every 3 seconds (adjust as needed)
}

// Call the function to display messages
displayMessages();


//INTITAL LOAD PAGE TEST***************
// JavaScript code to handle scrolling and showing the rest of the content

document.addEventListener("DOMContentLoaded", function() {
  // Get the scroll-down notification element
  var scrollDownNotification = document.querySelector(".scroll-down-notification");

  // Hide the scroll-down notification on scroll
  window.addEventListener("scroll", function() {
    scrollDownNotification.style.opacity = "0";
  });
});







//silly test can delete
document.addEventListener("DOMContentLoaded", () => {
  const scrollingContainer = document.querySelector(".scrolling-container");
  const scrollingWrapper = document.querySelector(".scrolling-wrapper");

  const changeHeaderTextPosition = () => {
    const scrollPosition = scrollingContainer.scrollLeft;
    const containerWidth = scrollingContainer.offsetWidth;
    const scrollingBoxes = document.querySelectorAll(".scrolling-box");

    scrollingBoxes.forEach((box) => {
      const boxOffset = box.offsetLeft - scrollPosition;
      const textElements = box.querySelectorAll("h2");

      textElements.forEach((text) => {
        if (boxOffset < 0 && boxOffset + text.offsetWidth > containerWidth) {
          text.classList.add("slide-opposite");
        } else {
          text.classList.remove("slide-opposite");
        }
      });
    });
  };

  scrollingContainer.addEventListener("scroll", changeHeaderTextPosition);

  // Call the changeHeaderTextPosition function when the page loads
  changeHeaderTextPosition();

  // Listen for window resize event to update the positions
  window.addEventListener("resize", changeHeaderTextPosition);
});



/*
//keydown TEST
document.addEventListener("DOMContentLoaded", () => {
  const socialLinks = document.querySelectorAll(".social-links a");

  const handleLinkClick = (event) => {
    const link = event.currentTarget;
    const key = link.getAttribute("data-key");
    simulateKeyPress(key);
  };

  const simulateKeyPress = (key) => {
    const event = new KeyboardEvent("keydown", { key });
    document.dispatchEvent(event);
  };

  socialLinks.forEach((link) => {
    link.addEventListener("click", handleLinkClick);
  });

  document.addEventListener("keydown", (event) => {
    const key = event.key.toUpperCase();
    const targetLink = [...socialLinks].find((link) => link.getAttribute("data-key") === key);

    if (targetLink) {
      targetLink.click();
    }
  });
});

*/

document.addEventListener("DOMContentLoaded", () => {
  const socialLinks = document.querySelectorAll(".social-links a");

  document.addEventListener("keyup", (event) => {
    const key = event.key.toLowerCase();
    
    // Check if the pressed key corresponds to a social link
    const matchingLink = Array.from(socialLinks).find((link) => link.dataset.key === key);
    
    if (matchingLink) {
      matchingLink.click();
    }
  });
});





