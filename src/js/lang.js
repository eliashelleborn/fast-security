import content from "./content";

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
            if (el) {
              if (value !== el.innerHTML) {
                el.innerHTML = value;
              }
            }
          }
        }
      }
    }
  }
};
