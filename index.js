const accordions = document.querySelectorAll(".accordion");

accordions.forEach((accordion) => {
  const accordionHeaders =
    accordion.querySelectorAll(".accordion-header");

  accordionHeaders.forEach((header) => {
    header.addEventListener("click", () => {
      const accordionContent = header.nextElementSibling;
      if (accordionContent.classList.contains("active")) {
        header.classList.remove("active");
        accordionContent.classList.remove("active");
      } else {
        header.classList.add("active");
        accordionContent.classList.add("active");
      }
    });
  });
});