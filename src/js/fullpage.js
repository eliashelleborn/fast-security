import fullpage from "fullpage.js";
import {
  setActiveSection,
  setActiveSlide,
  toggleSectionNav
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
    if (section.index === 1 && destination.index >= 1) {
      theLegendContent.classList.add("open");
      hideSectionNav();
      toggleScrolling(false);
    } else {
      theLegendContent.classList.remove("open");
      showSectionNav();
      toggleScrolling(true);
    }
  }
});

const toggleScrolling = bool => {
  fullpageInstance.setAllowScrolling(bool);
};

// SECTION 2 (The Legend)
// Go to next slide when pressing "More"
const theLegendBtn = document.querySelector(".the-legend-btn");
theLegendBtn.addEventListener("click", () => {
  fullpageInstance.moveTo(2, 1);
});

const theLegendContent = document.querySelector(".the-legend-content");
theLegendContent.addEventListener("scroll", ev => {
  const [section1, section2, section3] = theLegendContent.querySelectorAll(
    "div"
  );
  const scrollPos = ev.target.scrollTop;
  const currentSlide = fullpageInstance.getActiveSlide();
  // Go to slide that corresponds with current visible paragraph
  if (
    scrollPos > section1.offsetTop &&
    scrollPos < section2.offsetTop - 100 &&
    currentSlide.index !== 1
  ) {
    fullpageInstance.moveTo(2, 1);
  } else if (
    scrollPos > section2.offsetTop - 100 &&
    scrollPos < section3.offsetTop - 100 &&
    currentSlide.index !== 2
  ) {
    fullpageInstance.moveTo(2, 2);
  } else if (scrollPos > section3.offsetTop - 100 && currentSlide.index !== 3) {
    fullpageInstance.moveTo(2, 3);
  }
});

const dragHandle = theLegendContent.querySelector(".drag-handle");
dragHandle.addEventListener("click", () => {});

export default fullpageInstance;
