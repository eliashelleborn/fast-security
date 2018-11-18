/* const currLang = "sv";
const langNodes = document.querySelectorAll(".sv, .en");
langNodes.forEach(langNode => {
  if (langNode.classList.contains(currLang)) {
    langNode.classList.add("visible");
  } else {
    langNode.classList.remove("visible");
  }
}); */

// Loads content from specified language from lang_object
function load_language(lang, lang_object) {
  switch (lang) {
    // Load swedish language file
    case "swedish":
      return lang_object.swedish;
      break;

    // Load english language file
    case "english":
    default:
      return lang_object.english;
      break;
  }
}

// Retrieve get variables
var $_GET = {};
if (document.location.toString().indexOf("?") !== -1) {
  var query = document.location
    .toString()
    // get the query string
    .replace(/^.*?\?/, "")
    // and remove any existing hash string (thanks, @vrijdenker)
    .replace(/#.*$/, "")
    .split("&");

  for (var i = 0, l = query.length; i < l; i++) {
    var aux = decodeURIComponent(query[i]).split("=");
    $_GET[aux[0]] = aux[1];
  }
}

// Language object
lang_object = {
  swedish: {
    login: "Logga in",
    register: "Registrera",
    "content-1-title": "Detta är första titeln",
    "content-1-text": "Detta är det första innehållet du kommer se"
  },

  english: {
    login: "Login",
    register: "Register",
    "content-1-title": "This is the first title",
    "content-1-text": "This is the first content you will see"
  }
};
