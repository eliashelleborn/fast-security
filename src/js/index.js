import fullpage from "./fullpage";
import { init as initNavigation } from "./navigation";
import { init as initLang } from "./lang";
import initSections from "./sections";
import initColorSelector from "./colorSelector";

const init = () => {
  initNavigation();
  initLang();
  initSections();
  initColorSelector();
};

init();
