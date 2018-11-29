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

const content = {
  en: {
    "s2-s0": {
      title: "The Legend",
      read: "Read"
    },
    "s2-s1": {
      title: "The History",
      text:
        "Saab started life in 1937 in Trollhättan, Sweden, as an aeroplane manufacturer to provide aircraft for the Swedish Air Force, just as Europe was steeling itself for another war. The company's full name was Svenska Aeroplan Aktiebolaget, giving the world the acronym Saab."
    },
    "s2-s2": {
      title: "The Car",
      text:
        "The head office soon moved to the Swedish university town of Linköping, where this massive company has its largest operation today. It was there in 1945, amid various dreams of diversification, that a project to develop motor cars got underway."
    },
    "s2-s3": {
      title: "The Future",
      text:
        "Today we are starting a new chapter. Fast Security, FS. Is the future car."
    },

    "s3-s0": {
      title: "On for the future",
      text: "Many people still think Saab makes cars, and that is correct.",
      fullText:
        "We are on the go for the future. Saab is very much alive and well, as one of the world’s most innovative companies. And now we are proud to present our car for the future: FastSecurity, FS.",
      read: "Read"
    },
    drawer: {
      title: "On for the future",
      text:
        "Many people still think Saab makes cars, and that is correct. We are on the go for the future. Saab is very much alive and well, as one of the world’s most innovative companies. And now we are proud to present our car for the future: FastSecurity, FS."
    },
    "s3-s2": {
      title: "Are you ready",
      text: "Fast Security is upcoming standard for the industry"
    },

    "s4-s0": {
      title: "Essentials",
      text: "Be in style with you car"
    },

    "s5-s0": {
      title: "Join the future",
      text: "Get first the exclusive Fast Security collection book",
      joinBtn: "Join"
    }
  },
  sv: {
    "s2-s0": {
      title: "Legenden",
      read: "Läs mer"
    },
    "s2-s1": {
      title: "Historia",
      text:
        "Saab började livet 1937 i Trollhättan som en flygplans producent för att ge flygplan till det svenska flygvapnet, precis i tid med att Europa byggde upp sig för ännu ett krig. Bolagets fulla namn var Svenska Aeroplan Aktiebolaget, vilket gav världen akronymet Saab."
    },
    "s2-s2": {
      title: "Bilen",
      text:
        "Huvudkontoret flyttade snart till den svenska universitetsstaden Linköping, där detta massiva företag har sin största verksamhet idag. Det var året 1945, bland olika drömmar om diversifiering, ett projekt för att utveckla bilar började."
    },
    "s2-s3": {
      title: "Framtiden",
      text:
        "Idag börjar vi ett nytt kapitel. Fast Security, FS. Bilen för framtiden."
    },

    "s3-s0": {
      title: "På väg mot framtiden",
      text: "Många tror fortfarande att Saab gör bilar, och det är rätt. ",
      fullText:
        "Vi är på väg mot framtiden. Saab är mycket levande och även som ett av världens mest innovativa företag. Och nu är vi stolta över att presentera vår bil för framtiden: Fast Security, FS.",
      read: "Läs mer"
    },
    drawer: {
      title: "På väg mot framtiden",
      text:
        "Många tror fortfarande att Saab gör bilar, och det är rätt. Vi är på väg mot framtiden. Saab är mycket levande och även som ett av världens mest innovativa företag. Och nu är vi stolta över att presentera vår bil för framtiden: Fast Security, FS."
    },
    "s3-s2": {
      title: "Är du redo",
      text: "Fast Security 1.0  är den kommande standarden för världen."
    },

    "s4-s0": {
      title: "Komplement",
      text: "Accessoarer till din bil"
    },

    "s5-s0": {
      title: "Gå med i framtiden",
      text: "Få den första exklusiva Fast Security samlarbok",
      joinBtn: "Gå med"
    }
  }
};
