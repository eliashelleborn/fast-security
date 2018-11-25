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
  },
  afterSlideLoad: function(section, origin, destination, direction) {
    // Section 2 (The Legend) functionality
    const theLegendContent = document.querySelector(".the-legend-content");

    // Hide sectionNav when opening content scroller and disable scroll navigation
    if (section.index >= 1 && destination.index >= 1) {
      if (!theLegendContent.classList.contains("minimized")) {
        theLegendContent.classList.add("open");
        hideSectionNav();
        if (window.innerWidth < 600) {
          toggleScrolling(false);
        }
      }
    } else {
      theLegendContent.classList.remove("open");
      theLegendContent.classList.remove("minimized");
      showSectionNav();
      toggleScrolling(true);
    }
  }
});

export const toggleScrolling = bool => {
  fullpageInstance.setAllowScrolling(bool);
};

export default fullpageInstance;
