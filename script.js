const menuToggle =
      document.getElementById("menuToggle");

    const navLinks =
      document.getElementById("navLinks");


    menuToggle.addEventListener(
      "click",
      () => {

        navLinks.classList.toggle("active");

        const isOpen =
          navLinks.classList.contains("active");

        menuToggle.setAttribute(
          "aria-expanded",
          isOpen
        );

        menuToggle.textContent =
          isOpen ? "×" : "☰";

      }
    );


    /* Close mobile navigation */

    document
      .querySelectorAll(".nav-links a")
      .forEach(link => {

        link.addEventListener(
          "click",
          () => {

            navLinks.classList.remove("active");

            menuToggle.setAttribute(
              "aria-expanded",
              "false"
            );

            menuToggle.textContent = "☰";

          }
        );

      });


    /* Scroll animations */

    const observer =
      new IntersectionObserver(
        entries => {

          entries.forEach(entry => {

            if (entry.isIntersecting) {

              entry.target.classList.add(
                "visible"
              );

              observer.unobserve(
                entry.target
              );

            }

          });

        },
        {
          threshold: 0.08
        }
      );


    document
      .querySelectorAll(".fade-in")
      .forEach(element => {

        observer.observe(element);

      });


    /* Current year */

    document.getElementById("year")
      .textContent =
      new Date().getFullYear();

