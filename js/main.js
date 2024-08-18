$(document).ready(function () {

  // Text Change Animation
  const animatedText = document.querySelector(".animated-text");
  const words = [" YOU", " NOW"];
  let wordIndex = 0;

  setInterval(() => {
    animatedText.style.opacity = "0";
    setTimeout(() => {
      animatedText.textContent = words[wordIndex];
      animatedText.style.opacity = "1";
      wordIndex = (wordIndex + 1) % words.length;
    }, 500);
  }, 2000);

  // Hide loading spinner
  $(".loading-spinner").removeClass("show");

  const servicesSection = $(".services");
  const backToTopButton = $(".back-to-top");
  const darkModeToggle = $("#dark-mode-toggle");
  const darkModeToggleMobile = $("#dark-mode-toggle-mobile");
  const menuToggle = $("#menu-toggle");
  const mobileMenu = $("#mobile-menu");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          servicesSection.addClass("visible");
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  observer.observe(servicesSection[0]);

  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      backToTopButton.addClass("show");
    } else {
      backToTopButton.removeClass("show");
    }
  });

  backToTopButton.click(function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "300");
  });

  $("#chatbot button").click(function () {
    alert("Chatbot is under development!");
  });

  // Dark Mode Toggle
  darkModeToggle.click(function () {
    $("body").toggleClass("dark-mode light-mode");
    if ($("body").hasClass("dark-mode")) {
      $("#dark-mode-toggle").text("Light Mode");
      $("#dark-mode-toggle-mobile").text("Light Mode");
    } else {
      $("#dark-mode-toggle").text("Dark Mode");
      $("#dark-mode-toggle-mobile").text("Dark Mode");
    }
  });

  darkModeToggleMobile.click(function () {
    $("body").toggleClass("dark-mode light-mode");
    if ($("body").hasClass("dark-mode")) {
      $("#dark-mode-toggle").text("Light Mode");
      $("#dark-mode-toggle-mobile").text("Light Mode");
    } else {
      $("#dark-mode-toggle").text("Dark Mode");
      $("#dark-mode-toggle-mobile").text("Dark Mode");
    }
  });

  // Mobile Menu Toggle
  menuToggle.click(function () {
    mobileMenu.toggleClass("hidden");
  });

  // Testimonials Carousel
  $(".testimonial-carousel").slick({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 3000, // Slides will change every 3 seconds
  });

  // Animated Statistics
  $(".stat h3").each(function () {
    var $this = $(this);
    jQuery({ Counter: 0 }).animate(
      { Counter: $this.data("count") },
      {
        duration: 2000,
        easing: "swing",
        step: function () {
          $this.text(Math.ceil(this.Counter));
        },
      }
    );
  });

  // Scroll Indicator
  $(".scroll-indicator").click(function () {
    $("html, body").animate(
      {
        scrollTop: $("#about").offset().top,
      },
      800
    );
  });

  // Form Validation
  $("#contact-form").validate();
  $("#newsletter-form").validate();

  // Mouse Move Effect
  document.addEventListener("mousemove", (e) => {
    const x = (window.innerWidth / 2 - e.clientX) / 50;
    const y = (window.innerHeight / 2 - e.clientY) / 50;

    $(".content").css("transform", `rotateX(${y}deg) rotateY(${x}deg)`);
  });

  emailjs.init({
    publicKey: "Ks4MZpyptEO1YLpNx",
  });

  window.onload = function () {
    document.getElementById("contact_number").value = Math.floor(
      Math.random() * 1000000
    );
    document
      .getElementById("contact-form")
      .addEventListener("submit", function (event) {
        event.preventDefault();
        // Send email using EmailJS
        emailjs.sendForm("service_qb74jcf", "template_cf697lj", this).then(
          () => {
            // Success handling
            showSuccessMessage();
            clearForm();
          },
          (error) => {
            console.log("FAILED...", error);
          }
        );
      });
  };

  // Function to show success message
  function showSuccessMessage() {
    const message = `<div class="p-4 mt-4 text-green-700 bg-green-200 border border-green-300 rounded">
                                <strong>Success!</strong> Your message has been sent. We will get back to you soon.
                             </div>`;
    $("#contact-form").append(message);
  }

  // Function to clear the form
  function clearForm() {
    $("#contact-form").trigger("reset");
  }
});
