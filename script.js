document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  // Function to show the current slide
  function showSlide(index) {
    slides.forEach((slide, i) => {
      if (i === index) {
        slide.classList.remove("hidden");
      } else {
        slide.classList.add("hidden");
      }
    });
  }

  // Show the initial slide
  showSlide(currentSlide);

  // Previous slide button
  document.getElementById("prevSlide").addEventListener("click", function () {
    if (currentSlide > 0) {
      currentSlide--;
      showSlide(currentSlide);
    }
  });

  // Next slide button
  document.getElementById("nextSlide").addEventListener("click", function () {
    if (currentSlide < slides.length - 1) {
      currentSlide++;
      showSlide(currentSlide);
    }
  });
});
