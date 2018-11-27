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
  onSlideLeave: function(section, origin, destination, direction) {
    setActiveSlide(destination.index);

    const drawer = document.querySelector(".the-legend-content");

    // Hide section nav if not on index slide
    // with the exception of section 2 (The Legend)
    if (destination.index > 0 && section.index !== 1) {
      hideSectionNav();
    } else {
      if (!drawer.classList.contains("open")) {
        showSectionNav();
      }
    }
  }
});

export const toggleScrolling = bool => {
  fullpageInstance.setAllowScrolling(bool);
};

export default fullpageInstance;
