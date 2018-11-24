import { setLang, updateContent } from "./lang";
import fullpage from "./fullpage";

export const init = () => {
  const menuBtn = document.querySelector(".menu-btn");
  const menuItems = document.querySelectorAll(".menu-item > a");
  const langSelect = document.querySelector(".lang select");
  const scrollTopBtn = document.querySelector(".s5-s0 .scrollTopBtn");

  // Event listeners
  scrollTopBtn.addEventListener("click", () => scrollTop());
  menuBtn.addEventListener("click", () => toggleFullpageNav());
  menuItems.forEach(item => {
    item.addEventListener("click", () => toggleFullpageNav());
  });
  langSelect.addEventListener("change", e => {
    setLang(e.target.value);
    updateContent();
  });
};

export const scrollTop = () => {
  fullpage_api.moveTo(1);
};

// Fullpage navigation
export const toggleFullpageNav = () => {
  const fullNav = document.querySelector(".full-nav");
  const menuBtn = document.querySelector(".menu-btn");
  const main = document.querySelector("main");

  if (fullNav.classList.contains("open")) {
    fullNav.classList.remove("open");

    menuBtn.classList.remove("active");
    // main.classList.remove("blur");
    const currentSlide = fullpage.getActiveSlide();
    if (currentSlide.index === 0) {
      showSectionNav();
    }
  } else {
    fullNav.classList.add("open");

    menuBtn.classList.add("active");
    // main.classList.add("blur");
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

  nav.style.transform = `translateY(${positions.desktop[dest + 1]})`;

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
    ".section-nav li.active a > span"
  );
  slideIndicator.innerText = slide;
};
