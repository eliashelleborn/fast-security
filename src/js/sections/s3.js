import fullpage, { toggleScrolling } from "../fullpage";
import { showSectionNav, hideSectionNav } from "../navigation";
import content from "../content";

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
  const fullText = document.querySelector(".s3-s0 .content p > span");
  const main = document.querySelector("main");
  const currLang = main.getAttribute("data-currentLang");

  if (window.innerWidth >= 1000) {
    if (fullText.classList.contains("open")) {
      fullText.classList.remove("open");
      readBtn.innerText = content[currLang]["s3-s0"].read;
    } else {
      fullText.classList.add("open");
      readBtn.innerText = currLang === "en" ? "Less" : "Minska";
    }
  } else {
    drawerContent.classList.toggle("open");
    previewContent.classList.toggle("hidden");

    if (drawerContent.classList.contains("open")) {
      hideSectionNav();
    } else {
      showSectionNav();
    }
  }
};

export default init;
