import fullpage, { toggleScrolling } from "../fullpage";
import { showSectionNav, hideSectionNav } from "../navigation";

// SECTION 3 (Product)
// Go to next slide when pressing "Read"
const init = () => {
  const readBtn = document.querySelector(".s3-s0 .read");
  readBtn.addEventListener("click", () => {
    fullpage.moveTo(3, 1);
  });
};

export default init;
