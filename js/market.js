function save() {
  
  const langMarket = {  
  en: "Market",  
  de: "Markt",
  fr: "Marché",
  es: "Mercado",
  pt: "Mercado",
  tr: "Pazar",
  ru: "Рынок",
  zh: "市场",
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
  en: "Fortify the wall to protect the kingdom center!",
  de: "Befestige die Mauer, um das Königszentrum zu schützen!",
  fr: "Renforcez le mur pour protéger le centre du royaume !",
  es: "Fortifica el muro para proteger el centro del reino.",
  pt: "Fortifique a muralha para proteger o centro do reino!",
  tr: "Krallık merkezini korumak için suru güçlendir!",
  ru: "Укрепите стену, чтобы защитить центр королевства!",
  zh: "加固城墙以保护王国中心！",
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
	
	const langBuy = {       
    en: "Buy",
    de: "Kaufen",
    fr: "Acheter",
    es: "Comprar",
    pt: "Comprar",
    tr: "Satın Al",
    ru: "Купить",
    zh: "购买",
    };
	
	const langSell = {        
    en: "Sell",
    de: "Verkaufen",
    fr: "Vendre",
    es: "Vender",
    pt: "Vender",
    tr: "Sat",
    ru: "Продать",
    zh: "出售",
    };

  const lang = localStorage.getItem("language") || "en";
  const lang_Cancel = langCancel[lang] || "Cancel";
  const lang_Market = langMarket[lang] || "Market";
  const lang_BuildingCapacity = langBuildingCapacity[lang] || "Building Capacity";
  const lang_Spy = langSpy[lang] || "Spy";
  const lang_Level = langLevel[lang] || "Level: ";
  const lang_BTitle = langBTitle[lang] || "Train troops to strengthen your army!";
  const lang_DefenseBonus = langDefenseBonus[lang] || "Defense Bonus: ";
  const lang_Buy = langBuy[lang] || "Buy";
  const lang_Sell = langSell[lang] || "Sell";
  
  document.getElementById("trade_cart_lang").innerText = lang_TradeCart;
  document.getElementById("building_capacity_text").innerText = lang_BuildingCapacity;
  document.getElementById("title_lang").innerText = lang_Market;
  document.getElementById("lang_build_title").innerText = lang_BTitle;
  document.getElementById("lang_level1").innerText = lang_Level;
  document.getElementById("lang_level2").innerText = lang_Level;
  document.getElementById("lang_cancel1").innerText = langCancel;
  document.getElementById("buy_lang").innerText = lang_Buy;
  document.getElementById("sell_lang").innerText = lang_Sell;
  
}
