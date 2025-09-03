function save() {
  
  const langWorkshop = { 
  en: "Workshop",
  de: "Werkstatt",
  fr: "Atelier",
  es: "Taller",
  pt: "Oficina",
  tr: "Atölye",
  ru: "Мастерская",
  zh: "工坊",
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
  en: "Craft and upgrade weapons of war to strengthen your army!",
  de: "Stelle Kriegswaffen her und rüste sie auf, um deine Armee zu stärken!",
  fr: "Fabriquez et améliorez des armes de guerre pour renforcer votre armée !",
  es: "Fabrica y mejora armas de guerra para fortalecer tu ejército.",
  pt: "Forje e melhore armas de guerra para fortalecer seu exército!",
  tr: "Ordunu güçlendirmek için savaş silahları üret ve geliştir!",
  ru: "Создавайте и улучшайте оружие войны, чтобы укрепить свою армию!",
  zh: "打造并升级战争武器来增强你的军队！",
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
  
  const langSpy = {      
    en: "Spy",        
    de: "Spion",  
    fr: "Espion",  
    es: "Espía",  
    pt: "Espião",  
    tr: "Casus",  
    ru: "Шпион",  
    zh: "间谍",  
    };

  const lang = localStorage.getItem("language") || "en";
  const lang_Cancel = langCancel[lang] || "Cancel";
  const lang_Workshop = langWorkshop[lang] || "Workshop";
  const lang_Spy = langSpy[lang] || "Spy";
  const lang_Level = langLevel[lang] || "Level: ";
  const lang_BTitle = langBTitle[lang] || "Train troops to strengthen your army!";
  const lang_DefenseBonus = langDefenseBonus[lang] || "Defense Bonus: ";
  
  document.getElementById("title_lang").innerText = lang_Workshop;
  document.getElementById("lang_build_title").innerText = lang_BTitle;
  document.getElementById("lang_level1").innerText = lang_Level;
  document.getElementById("lang_level2").innerText = lang_Level;
  document.getElementById("lang_level3").innerText = lang_Level;
  document.getElementById("lang_level4").innerText = lang_Level;
  document.getElementById("lang_level5").innerText = lang_Level;
  document.getElementById("lang_level6").innerText = lang_Level;
  document.getElementById("lang_cancel1").innerText = langCancel;
  document.getElementById("lang_cancel2").innerText = langCancel;
  document.getElementById("lang_cancel3").innerText = langCancel;
  
}
