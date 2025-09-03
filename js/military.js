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
	
	const langTroops = { 
    en: "Troops",
    de: "Truppen",
    fr: "Troupes",
    es: "Tropas",
    pt: "Tropas",
    tr: "Birlikler",
    ru: "Войска",
    zh: "部队",
    };

    const langSupportTroops = {
    en: "Support Troops",
    de: "Unterstützungstruppen",
    fr: "Troupes de soutien",
    es: "Tropas de apoyo",
    pt: "Tropas de apoio",
    tr: "Destek Birlikleri",
    ru: "Войска поддержки",
    zh: "支援部队",
    };

  const lang = localStorage.getItem("language") || "en";
  const lang_Military = langMilitary[lang] || "Military";
  const lang_Troops = langTroops[lang] || "Troops";
  const lang_SupportTroops = langSupportTroops[lang] || "Support Troops";
  
  document.getElementById("title_lang").innerText = lang_Military;
  document.getElementById("lang_header1_button").innerText = lang_Troops;
  document.getElementById("lang_header2_button").innerText = lang_SupportTroops;
  
}