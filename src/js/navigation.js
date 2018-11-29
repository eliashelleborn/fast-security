import { setLang, updateContent } from "./lang";
import fullpage from "./fullpage";

export const init = () => {
  const menuBtn = document.querySelector(".menu-btn");
  const menuItems = document.querySelectorAll(".menu-item > a");
  const langSelect = document.querySelector(".lang select");

  // const scrollTopBtn = document.querySelector(".s5-s0 .scrollTopBtn");
  const navDashesY = document.querySelectorAll(".nav-dashY");
  const navDashesX = document.querySelectorAll(".nav-dashX");

  // Event listeners
  // scrollTopBtn.addEventListener("click", () => scrollTop());

  menuBtn.addEventListener("click", () => toggleFullpageNav());

  menuItems.forEach(item => {
    item.addEventListener("click", () => toggleFullpageNav());
  });

  langSelect.addEventListener("change", e => {
    setLang(e.target.value);
    updateContent();
  });

  navDashesY.forEach(navDash => {
    navDash.addEventListener("click", () => {
      navDash.classList.add("clicked");
      setTimeout(() => {
        if (navDash.classList.contains("nav-dashY--prev")) {
          if (navDash.classList.contains("to-top")) {
            fullpage.moveTo(1);
          } else {
            fullpage.moveSectionUp();
          }
        } else if (navDash.classList.contains("nav-dashY--next")) {
          fullpage.moveSectionDown();
        }
      }, 200);

      setTimeout(() => {
        navDash.classList.remove("clicked");
      }, 700);
    });
  });
  navDashesX.forEach(navDash => {
    navDash.addEventListener("click", () => {
      if (navDash.classList.contains("nav-dashX--prev")) {
        fullpage.moveSlideLeft();
      } else if (navDash.classList.contains("nav-dashX--next")) {
        fullpage.moveSlideRight();
      }
    });
  });
};

export const scrollTop = () => {
  fullpage_api.moveTo(1);
};

// Fullpage navigation
export const toggleFullpageNav = () => {
  const fullNav = document.querySelector(".full-nav");
  const menuBtn = document.querySelector(".menu-btn");
  const lang = document.querySelector(".lang");
  const currentSlide = fullpage.getActiveSlide();
  // const currentSlideBackgrounds = currentSlide.item.querySelectorAll(".BG");
  const currentSlideContent = currentSlide.item.querySelectorAll(
    ".content, .product"
  );
  // const blurredBackgrounds = document.querySelectorAll(".BG.blurred");

  if (fullNav.classList.contains("open")) {
    lang.classList.remove("show");
    fullNav.classList.remove("open");
    menuBtn.classList.remove("active");
    currentSlideContent.forEach(content => {
      if (content.classList.contains("product")) {
        Array.from(content.children).forEach(child => {
          if (!child.classList.contains("BG")) {
            child.style.opacity = "1";
          }
        });
      } else {
        content.style.opacity = "1";
      }
    });
    /* blurredBackgrounds.forEach(bg => {
      bg.classList.remove("blurred");
    }); */
    if (currentSlide.index === 0) {
      showSectionNav();
    }
  } else {
    lang.classList.add("show");
    fullNav.classList.add("open");
    menuBtn.classList.add("active");
    currentSlideContent.forEach(content => {
      if (content.classList.contains("product")) {
        Array.from(content.children).forEach(child => {
          if (!child.classList.contains("BG")) {
            child.style.opacity = "0";
          }
        });
      } else {
        content.style.opacity = "0";
      }
    });
    /* currentSlideBackgrounds.forEach(bg => {
      bg.classList.add("blurred");
    }); */
    hideSectionNav();
  }
};

// Fixed section navigation/indicator
export const setActiveSection = (origin, dest) => {
  const nav = document.querySelector(".section-nav");

  const positions = {
    mobile: {
      1: "112px",
      2: "55px",
      3: "0px",
      4: "-55px",
      5: "-112px"
    },
    desktop: {
      1: "103px",
      2: "50px",
      3: "0px",
      4: "-50px",
      5: "-103px"
    }
  };

  const device = window.innerWidth >= 600 ? "desktop" : "mobile";

  nav.style.transform = `translateY(${positions[device][dest + 1]})`;

  const navItems = nav.querySelector("ul").children;
  navItems[origin].classList.remove("active");
  navItems[dest].classList.add("active");
};

export const hideSectionNav = () => {
  const sectionNav = document.querySelector(".section-nav");
  sectionNav.classList.add("hidden");
};

export const showSectionNav = () => {
  const sectionNav = document.querySelector(".section-nav");
  sectionNav.classList.remove("hidden");
};

export const setActiveSlide = slide => {
  const slideIndicator = document.querySelector(
    ".section-nav li.active a > span:first-child"
  );
  slideIndicator.innerText = slide;
};
