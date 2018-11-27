const colorBtnGroups = document.querySelectorAll(".colors");

const clock = document.querySelector(".s4-s1 .product:first-child");
const miniature = document.querySelector(".s4-s1 .product:last-child");

const imgs = {
  clock: {
    pink: "#D49B9B",
    green: "#2E3921",
    black: "#000000"
  },
  miniature: {
    pink: "#D49B9B",
    green: "#2E3921",
    black: "#000000"
  }
};

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

const changeProductColor = (product, color) =>
  (eval(product).style.backgroundColor = imgs[product][color]);

export default init;
