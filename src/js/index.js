import fullpage from "./fullpage";
import { init as initNavigation } from "./navigation";
import { init as initLang } from "./lang";

const init = () => {
  initNavigation();
  initLang();
};

init();
