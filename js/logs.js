function save() {
	
	const langMilitary = {    
    en: "Military",  
    de: "Militär",  
    fr: "Militaire",  
    es: "Militar",  
    pt: "Militar",  
    tr: "Askeri",  
    ru: "Военный",  
    zh: "军事",  
    };
	
	const langTrade = {                    
    en: "Trade",                 
    de: "Handel",  
    fr: "Commerce",  
    es: "Comercio",  
    pt: "Comércio",  
    tr: "Ticaret",  
    ru: "Торговля",  
    zh: "贸易",  
    };
	
	const langLogs = {                     
    en: "Logs",                  
    de: "Protokolle",  
    fr: "Journaux",  
    es: "Registros",  
    pt: "Registros",  
    tr: "Kayıtlar",  
    ru: "Журналы",  
    zh: "日志",  
};

  const lang = localStorage.getItem("language") || "en";
  const lang_Military = langMilitary[lang] || "Military";
  const lang_Logs = langLogs[lang] || "Logs";
  const lang_Trade = langTrade[lang] || "Trade";
  
  document.getElementById("title_lang").innerText = lang_Logs;
  document.getElementById("lang_header1_button").innerText = lang_Military;
  document.getElementById("lang_header2_button").innerText = lang_Trade;
  
}