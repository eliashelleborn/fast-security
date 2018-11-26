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
  }
});

export const toggleScrolling = bool => {
  fullpageInstance.setAllowScrolling(bool);
};

export default fullpageInstance;
