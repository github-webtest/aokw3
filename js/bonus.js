function save() {
	
	const langBonus = {   
   en: "Bonus",
   de: "Bonus",
   fr: "Prime",
   es: "Bono",
   pt: "Bônus",
   tr: "Bonus",
   ru: "Бонус",
   zh: "奖金",
   };
   
   const langBonust = {    
    en: "Choose one of the treasure chests",
    de: "Wähle eine der Schatzkisten",
    fr: "Choisissez l’un des coffres au trésor",
    es: "Elige uno de los cofres del tesoro",
    pt: "Escolha um dos baús do tesouro",
    tr: "Hazine sandıklarından birini seç",
    ru: "Выберите один из сундуков с сокровищами",
    zh: "选择一个宝箱",
    };
	
	const langBonust2 = {     
    en: "Your awards",
    de: "Deine Auszeichnungen",
    fr: "Vos récompenses",
    es: "Tus premios",
    pt: "Seus prêmios",
    tr: "Ödüllerin",
    ru: "Ваши награды",
    zh: "你的奖励",
};

  const lang = localStorage.getItem("language") || "en";
  const lang_Bonus = langBonus[lang] || "Bonus";
  const lang_Bonust = langBonust[lang] || "Choose one of the treasure chests";
  const lang_Bonust2 = langBonust2[lang] || "Your awards";
  
  
  document.getElementById("title_lang").innerText = lang_Bonus;
  document.getElementById("lang_bonus_t").innerText = lang_Bonust;
  document.getElementById("lang_bonus_t2").innerText = lang_Bonust2;
  
}