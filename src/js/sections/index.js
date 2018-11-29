import initS2 from "./s2";
import initS3 from "./s3";
import initS5 from "./s5";

const initSections = () => {
  initS2();
  initS3();
  initS5();
};

export default initSections;
