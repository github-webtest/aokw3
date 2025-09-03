function save() {

const langAlliance = {
    en: "Alliance",
    de: "Allianz",
    fr: "Alliance",
    es: "Alianza",
    pt: "Aliança",
    tr: "İttifak",
    ru: "Альянс",
    zh: "联盟",
};
	
  const lang = localStorage.getItem("language") || "en";
  const lang_Alliance = langAlliance[lang] || "Alliance";
  
  document.getElementById("title_lang").innerText = lang_Alliance;

  
}