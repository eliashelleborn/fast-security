import fullpage from "fullpage.js";

const fullpageInstance = new fullpage("#fullpage", {
  licenseKey: "OPEN-SOURCE-GPLV3-LICENSE",
  autoScrolling: true,
  scrollHorizontally: true,

  onLeave: (origin, destination, direction) => {
    setSectionNav(origin.index, destination.index);
  }
});

const setSectionNav = (origin, dest) => {
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

export default fullpageInstance;
