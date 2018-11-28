import fullpage from "../fullpage";

const init = () => {
  const readBtn = document.querySelector(".s2-s0 .read");
  readBtn.addEventListener("click", () => fullpage.moveSlideRight());
};

export default init;
