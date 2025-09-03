function save() {
  
  const langBarracks = {
  en: "Barracks",
  de: "Kaserne",
  fr: "Caserne",
  es: "Cuartel",
  pt: "Quartel",
  tr: "Kışla",
  ru: "Казарма",
  zh: "兵营",
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
  en: "Train troops to strengthen your army!",
  de: "Rekrutiere Truppen, um deine Armee zu stärken!",
  fr: "Entraînez des troupes pour renforcer votre armée !",
  es: "Entrena tropas para fortalecer tu ejército.",
  pt: "Treine tropas para fortalecer seu exército!",
  tr: "Ordunu güçlendirmek için asker eğit!",
  ru: "Тренируйте войска, чтобы усилить свою армию!",
  zh: "训练部队以加强你的军队！",
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
  const lang_Barracks = langBarracks[lang] || "Barracks";
  const lang_Spy = langSpy[lang] || "Spy";
  const lang_Level = langLevel[lang] || "Level: ";
  const lang_BTitle = langBTitle[lang] || "Train troops to strengthen your army!";
  const lang_DefenseBonus = langDefenseBonus[lang] || "Defense Bonus: ";
  
  document.getElementById("title_lang").innerText = lang_Barracks;
  document.getElementById("lang_build_title").innerText = lang_BTitle;
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
  document.getElementById("lang_cancel1").innerText = lang_Cancel;
  document.getElementById("lang_cancel2").innerText = lang_Cancel;
  document.getElementById("lang_cancel3").innerText = lang_Cancel;
  document.getElementById("lang_cancel4").innerText = lang_Cancel;
  document.getElementById("lang_cancel5").innerText = lang_Cancel;
  document.getElementById("lang_cancel6").innerText = lang_Cancel;
  document.getElementById("lang_cancel7").innerText = lang_Cancel;
  document.getElementById("lang_spy").innerText = lang_Spy;
  
}
