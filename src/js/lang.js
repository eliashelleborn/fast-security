export const init = () => {
  document.addEventListener("DOMContentLoaded", () => {
    updateContent();
  });
};

export const setLang = lang => {
  const ls = window.localStorage;
  ls.setItem("lang", lang);
};

export const getLang = () => {
  const ls = window.localStorage;
  const lang = ls.getItem("lang");
  return lang || "en";
};

export const updateContent = () => {
  const lang = getLang();

  const main = document.querySelector("main");

  const langOptions = document.querySelectorAll(".lang option");
  langOptions.forEach(opt => {
    if (opt.value === lang) {
      opt.selected = true;
    } else {
      opt.selected = false;
    }
  });

  // Update content if current content doesnt match selected language
  if (main.getAttribute("data-currentLang") !== lang) {
    const currentLangContent = content[lang];

    main.setAttribute("data-currentLang", lang);

    // For each section/slide
    for (const sectionKey in currentLangContent) {
      if (currentLangContent.hasOwnProperty(sectionKey)) {
        const section = currentLangContent[sectionKey];

        // For each content in current section/slide
        for (const key in section) {
          if (section.hasOwnProperty(key)) {
            const value = section[key];
            const el = document.querySelector(`.${sectionKey} .${key}`);
            if (value !== el.innerHTML) {
              el.innerHTML = value;
            }
          }
        }
      }
    }
  }
};

const content = {
  en: {
    "s1-s0": {
      title: "English title"
    },
    "s5-s0": {
      title: "Join the future",
      underTitle: "Get the broshure",
      joinBtn: "Join"
    }
  },
  sv: {
    "s1-s0": {
      title: "Svensk titel"
    },
    "s5-s0": {
      title: "Gå med i framtiden",
      underTitle: "Få tag i broschyren",
      joinBtn: "Gå med"
    }
  }
};
