document.querySelectorAll("header ul li a").forEach((link) => {
      link.addEventListener("click", function () {
        document
          .querySelectorAll("header ul li a")
          .forEach((el) => el.classList.remove("active"));
        this.classList.add("active");
      });
    });
    
    document.addEventListener("DOMContentLoaded", () => {
      const links = document.querySelectorAll(".nav-link");
      const sections = document.querySelectorAll(".section");
    
      function setActiveSection(sectionId) {
        sections.forEach((section) => {
          section.style.display = section.id === sectionId ? "block" : "none";
        });
      }
    
      function initSections() {
        if (window.innerWidth < 768) {
          sections.forEach((section) => {
            section.style.display = "block";
          });
        } else {
          sections.forEach((section) => {
            section.style.display = "none";
          });
          setActiveSection("about"); // Display only the 'about' section on initial load for small devices
          document.querySelector(".nav-link[data-section='about']").classList.add("active");
        }
      }
    
      // Initial setup
      initSections();
    
      // Event listeners for links
      links.forEach((link) => {
        link.addEventListener("click", (e) => {
          e.preventDefault();
          const sectionId = link.getAttribute("data-section");
    
          links.forEach((l) => l.classList.remove("active"));
          link.classList.add("active");
    
          setActiveSection(sectionId);
        });
      });
    
      // Resize event listener to adjust sections on window resize
      window.addEventListener("resize", initSections);
    });
    