import fullpage from "fullpage.js";
import { setActiveSection, setActiveSlide } from "./navigation";

const fullpageInstance = new fullpage("#fullpage", {
  licenseKey: "OPEN-SOURCE-GPLV3-LICENSE",
  autoScrolling: true,
  controlArrows: false,

  onLeave: (origin, destination, direction) => {
    setActiveSection(origin.index, destination.index);
  },
  onSlideLeave: function(section, origin, destination, direction) {
    setActiveSlide(destination.index);
  }
});

export default fullpageInstance;
