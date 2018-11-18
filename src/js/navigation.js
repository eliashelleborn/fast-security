export const init = () => {
  const menuBtn = document.querySelector(".menu-btn");
  const menuItems = document.querySelectorAll(".menu-item > a");

  // Event listeners
  menuBtn.addEventListener("click", () => toggleFullpageNav());
  menuItems.forEach(item => {
    item.addEventListener("click", () => toggleFullpageNav());
  });
};

//! Experienced some problems with storing references
// Fullpage navigation
export const toggleFullpageNav = () => {
  if (document.querySelector(".full-nav").style.height == "100%") {
    document.querySelector(".full-nav").style.height = "0%"; // For header background, change to 48px
    document.querySelector(".menu-btn").classList.remove("active");
    document.querySelector("main").classList.remove("blur");
  } else {
    document.querySelector(".full-nav").style.height = "100%";
    document.querySelector(".menu-btn").classList.add("active");
    document.querySelector("main").classList.add("blur");
  }
};

// Fixed section navigation/indicator
export const setSectionNav = (origin, dest) => {
  const nav = document.querySelector(".section-nav");

  const positions = {
    1: "102px",
    2: "50px",
    3: "0px",
    4: "-50px",
    5: "-102px"
  };

  nav.style.transform = `translateY(${positions[dest + 1]})`;

  const navItems = nav.querySelector("ul").children;
  navItems[origin].classList.remove("active");
  navItems[dest].classList.add("active");
};
