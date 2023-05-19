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


document.addEventListener("DOMContentLoaded", () => {
  const scrollingContainer = document.querySelector(".scrolling-container");
  const scrollingWrapper = document.querySelector(".scrolling-wrapper");
  
  scrollingContainer.addEventListener("scroll", () => {
    const scrollPosition = scrollingContainer.scrollLeft;
    const boxWidth = scrollingWrapper.scrollWidth / 4; // Assuming 4 sections in the scrolling box
    const totalScrollWidth = scrollingWrapper.scrollWidth;
  
    if (scrollPosition >= totalScrollWidth - scrollingContainer.offsetWidth) {
      scrollingContainer.scrollLeft = scrollPosition - totalScrollWidth + boxWidth;
    } else if (scrollPosition < 0) {
      scrollingContainer.scrollLeft = scrollPosition + totalScrollWidth;// - boxWidth;
    }
//test infinite scroll right

  });
scrollingContainer.scrollLeft = scrollingWrapper.scrollWidth;
});

