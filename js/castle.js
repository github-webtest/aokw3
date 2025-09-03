function save() {
  
  const langCastle = {
  en: "Castle",
  de: "Burg",
  fr: "Château",
  es: "Castillo",
  pt: "Castelo",
  tr: "Kale",
  ru: "Замок",
  zh: "城堡",
  };

  const langLevel = { 
  en: "Level: ", 
  de: "Stufe: ", 
  fr: "Niveau: ", 
  es: "Nivel: ", 
  pt: "Nível: ", 
  tr: "Seviye: ", 
  ru: "Уровень: ", 
  zh: "等级: ",
  };

  const langBTitle = {
  en: "Produce elite warriors for your army and fortify the castle to protect your kingdom center!",
  de: "Produziere Elitekrieger für deine Armee und verstärke das Schloss, um das Zentrum deines Königreichs zu schützen!",
  fr: "Produisez des guerriers d’élite pour votre armée et fortifiez le château afin de protéger le centre de votre royaume !",
  es: "Produce guerreros de élite para tu ejército y fortifica el castillo para proteger el centro de tu reino.",
  pt: "Produza guerreiros de elite para seu exército e fortifique o castelo para proteger o centro do seu reino!",
  tr: "Ordun için elit savaşçılar üret ve krallığının merkezini korumak için kaleyi güçlendir!",
  ru: "Создавайте элитных воинов для своей армии и укрепляйте замок, чтобы защитить центр вашего королевства!",
  zh: "为你的军队培养精英战士，并加固城堡以保护王国中心！",
  };
  
  const langDefenseBonus = {
  en: "Defense Bonus: ",
  de: "Verteidigungsbonus: ",
  fr: "Bonus de défense : ",
  es: "Bono de defensa: ",
  pt: "Bônus de defesa: ",
  tr: "Savunma Bonusu: ",
  ru: "Бонус к защите: ",
  zh: "防御加成： ",
  };

  const lang = localStorage.getItem("language") || "en";
  const lang_Cancel = langCancel[lang] || "Cancel";
  const lang_Castle = langCastle[lang] || "Castle";
  const lang_Level = langLevel[lang] || "Level: ";
  const lang_BTitle = langBTitle[lang] || "Produce elite warriors for your army and fortify the castle to protect your kingdom center! <br> Defence bonus";
  const lang_DefenseBonus = langDefenseBonus[lang] || "Defense Bonus: ";
  
  document.getElementById("title_lang").innerText = lang_Castle;
  document.getElementById("castlex_text").innerText = lang_Castle;
  document.getElementById("lang_level").innerText = lang_Level;
  document.getElementById("lang_level2").innerText = lang_Level;
  document.getElementById("lang_level3").innerText = lang_Level;
  document.getElementById("lang_level4").innerText = lang_Level;
  document.getElementById("lang_level5").innerText = lang_Level;
  document.getElementById("lang_level6").innerText = lang_Level;
  document.getElementById("lang_build_title").innerText = lang_BTitle;
  document.getElementById("defense_bonus_text").innerText = lang_DefenseBonus;
  document.getElementById("lang_cancel1").innerText = lang_Cancel;
  document.getElementById("lang_cancel2").innerText = lang_Cancel;
  document.getElementById("lang_cancel3").innerText = lang_Cancel;  
  
}