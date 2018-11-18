import fullpage from "fullpage.js";
import { setSectionNav } from "./navigation";

const fullpageInstance = new fullpage("#fullpage", {
  licenseKey: "OPEN-SOURCE-GPLV3-LICENSE",
  autoScrolling: true,
  controlArrows: false,

  onLeave: (origin, destination, direction) => {
    setSectionNav(origin.index, destination.index);
  }
});

export default fullpageInstance;
