const colorBtnGroups = document.querySelectorAll(".colors");

const watch = document.querySelector(".s4-s1 .product:first-child");
const miniature = document.querySelector(".s4-s1 .product:last-child");
const interior = document.querySelector(".s3-s1 .product:first-child");
const exterior = document.querySelector(".s3-s1 .product:last-child");

const imgs = {
  watch: {
    silver: {
      webp: "/assets/img/desktop/webp/4/clock_silver.webp",
      original: "/assets/img/desktop/png/4/clock_silver.jpg"
    },
    blue: {
      webp: "/assets/img/desktop/webp/4/clock_blue.webp",
      original: "/assets/img/desktop/png/4/clock_blue.jpg"
    },
    black: {
      webp: "/assets/img/desktop/webp/4/clock_black.webp",
      original: "/assets/img/desktop/png/4/clock_black.jpg"
    }
  },
  miniature: {
    silver: {
      webp: "/assets/img/desktop/webp/4/rc_silver.webp",
      original: "/assets/img/desktop/png/4/rc_silver.jpg"
    },
    blue: {
      webp: "/assets/img/desktop/webp/4/rc_blue.webp",
      original: "/assets/img/desktop/png/4/rc_blue.jpg"
    },
    black: {
      webp: "/assets/img/desktop/webp/4/rc_black.webp",
      original: "/assets/img/desktop/png/4/rc_black.jpg"
    }
  },
  interior: {
    silver: {
      webp: "/assets/img/desktop/webp/3/terrafugia_interior_silver.webp",
      original: "/assets/img/desktop/png/3/terrafugia_interior_silver.jpg"
    },
    blue: {
      webp: "/assets/img/desktop/webp/3/terrafugia_interior_blue.webp",
      original: "/assets/img/desktop/png/3/terrafugia_interior_blue.jpg"
    },
    black: {
      webp: "/assets/img/desktop/webp/3/terrafugia_interior_black.webp",
      original: "/assets/img/desktop/png/3/terrafugia_interior_black.jpg"
    }
  },
  exterior: {
    silver: {
      webp: "/assets/img/desktop/webp/3/terrafugia_studio_silver.webp",
      original: "/assets/img/desktop/png/3/terrafugia_studio_silver.jpg"
    },
    blue: {
      webp: "/assets/img/desktop/webp/3/terrafugia_studio_blue.webp",
      original: "/assets/img/desktop/png/3/terrafugia_studio_blue.jpg"
    },
    black: {
      webp: "/assets/img/desktop/webp/3/terrafugia_studio_black.webp",
      original: "/assets/img/desktop/png/3/terrafugia_studio_black.jpg"
    }
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

const changeProductColor = (product, color) => {
  eval(product)
    .querySelector(".BG")
    .children[0].setAttribute("srcset", imgs[product][color].webp);
  eval(product)
    .querySelector(".BG")
    .children[1].setAttribute("srcset", imgs[product][color].original);
};

export default init;
