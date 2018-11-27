import fullpage, { toggleScrolling } from "../fullpage";
import { showSectionNav, hideSectionNav } from "../navigation";

const theLegendContent = document.querySelector(".the-legend-content");
const closeBtn = theLegendContent.querySelector(".close-btn");
const s2Fixed = document.querySelector(".s2-fixed");
const readBtn = document.querySelector(".s2-fixed .read");

const init = () => {
  readBtn.addEventListener("click", () => toggleContent());
  closeBtn.addEventListener("click", () => toggleContent());

  // Scroll Spy
  theLegendContent.addEventListener("scroll", ev => {
    const [section1, section2, section3] = theLegendContent.querySelectorAll(
      ".the-legend-content-section"
    );
    const scrollPos = ev.target.scrollTop;
    const currentSlide = fullpage.getActiveSlide();

    const scrollOffset = window.innerWidth >= 600 ? 300 : 100;

    // Go to slide connected with currently visible paragraph
    if (
      scrollPos > section1.offsetTop &&
      scrollPos < section2.offsetTop - scrollOffset &&
      currentSlide.index !== 1
    ) {
      fullpage.moveTo(2, 1);
    } else if (
      scrollPos > section2.offsetTop - scrollOffset &&
      scrollPos < section3.offsetTop - scrollOffset &&
      currentSlide.index !== 2
    ) {
      fullpage.moveTo(2, 2);
    } else if (
      scrollPos > section3.offsetTop - scrollOffset &&
      currentSlide.index !== 3
    ) {
      fullpage.moveTo(2, 3);
    }
  });
};

const toggleContent = () => {
  const currentSlide = fullpage.getActiveSlide();

  theLegendContent.classList.toggle("open");
  s2Fixed.classList.toggle("hidden");

  if (theLegendContent.classList.contains("open")) {
    toggleScrolling(false);
    if (currentSlide.index === 0) {
      fullpage.moveTo(2, 1);
    }
    hideSectionNav();
  } else {
    showSectionNav();
    toggleScrolling(true);
  }
};

export default init;
