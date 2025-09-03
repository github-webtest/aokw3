function save() {
  
  const langAcademy = {  
  en: "Academy", 
  de: "Akademie",
  fr: "Académie",
  es: "Academia",
  pt: "Academia",
  tr: "Akademi",
  ru: "Академия",
  zh: "学院",
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
  en: "Do scientific research and upgrade your technology!",  
  de: "Führe wissenschaftliche Forschung durch und verbessere deine Technologie!",  
  fr: "Menez des recherches scientifiques et améliorez votre technologie !",  
  es: "Realiza investigaciones científicas y mejora tu tecnología.",  
  pt: "Realize pesquisas científicas e aprimore sua tecnologia!",  
  tr: "Bilimsel araştırma yap ve teknolojini geliştir!",  
  ru: "Проводите научные исследования и улучшайте свои технологии!",  
  zh: "进行科学研究并升级你的科技！",  
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
  
  const langBuildingCapacity  = { 
  en: "Building Capacity: ", 
  de: "Gebäudekapazität: ",
  fr: "Capacité du bâtiment : ",
  es: "Capacidad del edificio: ",
  pt: "Capacidade do edifício: ",
  tr: "Yapı Kapasitesi: ",
  ru: "Вместимость здания: ",
  zh: "建筑容量：",
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
  const lang_Academy = langAcademy[lang] || "Academy";
  const lang_BuildingCapacity = langBuildingCapacity[lang] || "Building Capacity";
  const lang_Spy = langSpy[lang] || "Spy";
  const lang_Level = langLevel[lang] || "Level: ";
  const lang_BTitle = langBTitle[lang] || "Train troops to strengthen your army!";
  const lang_DefenseBonus = langDefenseBonus[lang] || "Defense Bonus: ";
  
  document.getElementById("title_lang").innerText = lang_Academy;
  document.getElementById("lang_build_title").innerText = lang_BTitle;
  document.getElementById("farming_lang").innerText = lang_Farming;
  document.getElementById("lumbering_lang").innerText = lang_Lumbering;
  document.getElementById("blacksmithing_lang").innerText = lang_Blacksmithing;
  document.getElementById("mining_lang").innerText = lang_Mining;
  document.getElementById("riding_lang").innerText = lang_Riding;
  document.getElementById("geometry_lang").innerText = lang_Geometry;
  document.getElementById("cartography_lang").innerText = lang_Cartography;
  document.getElementById("spying_lang").innerText = lang_Spying;
  document.getElementById("masonry_lang").innerText = lang_Masonry;
  document.getElementById("lang_level1").innerText = lang_Level;
  document.getElementById("lang_level2").innerText = lang_Level;
  document.getElementById("lang_level3").innerText = lang_Level;
  document.getElementById("lang_level4").innerText = lang_Level;
  document.getElementById("lang_level5").innerText = lang_Level;
  document.getElementById("lang_level6").innerText = lang_Level;
  document.getElementById("lang_level7").innerText = lang_Level;
  document.getElementById("lang_level8").innerText = lang_Level;
  document.getElementById("lang_level9").innerText = lang_Level;
  document.getElementById("lang_level10").innerText = lang_Level;
  document.getElementById("lang_level11").innerText = lang_Level;
  document.getElementById("lang_level12").innerText = lang_Level;
  document.getElementById("lang_level13").innerText = lang_Level;
  document.getElementById("lang_level14").innerText = lang_Level;
  document.getElementById("lang_level15").innerText = lang_Level;
  document.getElementById("lang_level16").innerText = lang_Level;
  document.getElementById("lang_level17").innerText = lang_Level;
  document.getElementById("lang_level18").innerText = lang_Level;
  document.getElementById("lang_cancel1").innerText = lang_Cancel;
  document.getElementById("lang_cancel2").innerText = lang_Cancel;
  document.getElementById("lang_cancel3").innerText = lang_Cancel;
  document.getElementById("lang_cancel4").innerText = lang_Cancel;
  document.getElementById("lang_cancel5").innerText = lang_Cancel;
  document.getElementById("lang_cancel6").innerText = lang_Cancel;
  document.getElementById("lang_cancel7").innerText = lang_Cancel;
  document.getElementById("lang_cancel8").innerText = lang_Cancel;
  document.getElementById("lang_cancel9").innerText = lang_Cancel;
  
}
