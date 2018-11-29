import fullpage from "fullpage.js";
import {
  setActiveSection,
  setActiveSlide,
  hideSectionNav,
  showSectionNav
} from "./navigation";

const fullpageInstance = new fullpage("#fullpage", {
  licenseKey: "OPEN-SOURCE-GPLV3-LICENSE",
  autoScrolling: true,
  controlArrows: false,
  normalScrollElements: ".the-legend-content",
  lazyLoading: false, // It looked ugly with the white background until the image loaded when you switched section

  onLeave: (origin, destination, direction) => {
    setActiveSection(origin.index, destination.index);
  },
  afterLoad: (origin, destination, direction) => {
    const drawer = document.querySelector(".s3-s0 .drawer");
    const currentSlide = fullpage_api.getActiveSlide();
    if (currentSlide.index > 0) {
      hideSectionNav();
    } else {
      if (destination.index === 2 && drawer.classList.contains("open")) {
        hideSectionNav();
      } else {
        showSectionNav();
      }
    }

    let navDashes = destination.item.querySelectorAll(".nav-dashY");

    navDashes.forEach(dash => {
      dash.classList.add("indicating");
      setTimeout(() => {
        dash.classList.remove("indicating");
      }, 1500);
    });
  },
  onSlideLeave: function(section, origin, destination, direction) {
    setActiveSlide(destination.index);

    const drawer = document.querySelector(".s3-s0 .drawer");

    if (destination.index > 0) {
      hideSectionNav();
    } else {
      if (section.index === 2 && drawer.classList.contains("open")) {
        return;
      }
      showSectionNav();
    }
  }
});

export const toggleScrolling = bool => {
  fullpageInstance.setAllowScrolling(bool);
};

export default fullpageInstance;
