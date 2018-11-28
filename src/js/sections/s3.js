import fullpage, { toggleScrolling } from "../fullpage";
import { showSectionNav, hideSectionNav } from "../navigation";

const drawerContent = document.querySelector(".s3-s0 .drawer");
const drawerClose = drawerContent.querySelector(".close-btn");
const previewContent = document.querySelector(".s3-s0 .content > div");
const readBtn = document.querySelector(".s3-s0 .read");

const init = () => {
  readBtn.addEventListener("click", () => toggleContent());
  drawerClose.addEventListener("click", () => toggleContent());
};

const toggleContent = () => {
  const currentSlide = fullpage.getActiveSlide();

  drawerContent.classList.toggle("open");
  previewContent.classList.toggle("hidden");

  console.log(previewContent);

  if (drawerContent.classList.contains("open")) {
    hideSectionNav();
  } else {
    showSectionNav();
  }
};

export default init;
