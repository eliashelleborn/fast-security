import { imgs } from "./content";

const colorBtnGroups = document.querySelectorAll(".colors");

const watch = document.querySelector(".s4-s1 .product:first-child");
const miniature = document.querySelector(".s4-s1 .product:last-child");
const interior = document.querySelector(".s3-s1 .product:first-child");
const exterior = document.querySelector(".s3-s1 .product:last-child");

const init = () => {
  colorBtnGroups.forEach(group => {
    group.childNodes.forEach(btn => {
      btn.addEventListener("click", () => {
        const product = group.getAttribute("data-product");
        const color = btn.getAttribute("data-color");
        group.querySelector(".selected").classList.remove("selected");
        btn.classList.add("selected");
        changeProductColor(product, color);
      });
    });
  });
};

const changeProductColor = (product, color) => {
  eval(product)
    .querySelector(".BG")
    .children[0].setAttribute("srcset", imgs[product][color].webp);
  eval(product)
    .querySelector(".BG")
    .children[1].setAttribute("srcset", imgs[product][color].original);
};

export default init;
