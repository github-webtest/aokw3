function save() {
  
  const langVillage = {  
  en: "Village",  
  de: "Dorf",  
  fr: "Village",  
  es: "Pueblo",  
  pt: "Aldeia",  
  tr: "Köy",  
  ru: "Деревня",  
  zh: "村庄",  
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
  en: "Produce resources and upgrade the economy of the kingdom thanks to the villagers!",
  de: "Produziere Ressourcen und verbessere die Wirtschaft des Königreichs dank der Dorfbewohner!",
  fr: "Produisez des ressources et améliorez l'économie du royaume grâce aux villageois !",
  es: "¡Produce recursos y mejora la economía del reino gracias a los aldeanos!",
  pt: "Produza recursos e melhore a economia do reino graças aos aldeões!",
  tr: "Kaynak üret ve köylüler sayesinde krallığın ekonomisini geliştir!",
  ru: "Производите ресурсы и улучшайте экономику королевства благодаря деревенским жителям!",
  zh: "通过村民生产资源并提升王国的经济！",
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
	
	const langFarmerBonus = {
    en: "25% more food production",
    de: "25% mehr Nahrungsmittelproduktion",
    fr: "25 % de production alimentaire en plus",
    es: "25% más producción de alimentos",
    pt: "25% mais produção de alimentos",
    tr: "Yiyecek üretiminde %25 artış",
    ru: "На 25% больше производства пищи",
    zh: "食物产量提高25%",
    };
	
	const langFarmerDuration = {
    en: "Increases food production for 7 days.",
    de: "Erhöht die Nahrungsmittelproduktion für 7 Tage.",
    fr: "Augmente la production alimentaire pendant 7 jours.",
    es: "Aumenta la producción de alimentos durante 7 días.",
    pt: "Aumenta a produção de alimentos por 7 dias.",
    tr: "7 gün boyunca yiyecek üretimini artırır.",
    ru: "Увеличивает производство пищи на 7 дней.",
    zh: "在7天内增加食物产量。",
    };
	
	const langWoodcutterBonus = {
    en: "25% more wood production",
    de: "25% mehr Holzproduktion",
    fr: "25 % de production de bois en plus",
    es: "25% más producción de madera",
    pt: "25% mais produção de madeira",
    tr: "Odun üretiminde %25 artış",
    ru: "На 25% больше производства древесины",
    zh: "木材产量提高25%",
    };
	
	const langWoodcutterDuration = {
    en: "Increases wood production for 7 days.",
    de: "Erhöht die Holzproduktion für 7 Tage.",
    fr: "Augmente la production de bois pendant 7 jours.",
    es: "Aumenta la producción de madera durante 7 días.",
    pt: "Aumenta a produção de madeira por 7 dias.",
    tr: "7 gün boyunca odun üretimini artırır.",
    ru: "Увеличивает производство древесины на 7 дней.",
    zh: "在7天内增加木材产量。",
    };
	
	const langGoldMinerBonus = {
    en: "25% more gold production",
    de: "25% mehr Goldproduktion",
    fr: "25 % de production d'or en plus",
    es: "25% más producción de oro",
    pt: "25% mais produção de ouro",
    tr: "Altın üretiminde %25 artış",
    ru: "На 25% больше производства золота",
    zh: "黄金产量提高25%",
    };
	
	const langGoldMinerDuration = {
    en: "Increases gold production for 7 days.",
    de: "Erhöht die Goldproduktion für 7 Tage.",
    fr: "Augmente la production d'or pendant 7 jours.",
    es: "Aumenta la producción de oro durante 7 días.",
    pt: "Aumenta a produção de ouro por 7 dias.",
    tr: "7 gün boyunca altın üretimini artırır.",
    ru: "Увеличивает производство золота на 7 дней.",
    zh: "在7天内增加黄金产量。",
    };
	
	const langKickVillagers = {
    en: "Kick Villagers",
    de: "Dorfbewohner rauswerfen",
    fr: "Expulser les villageois",
    es: "Expulsar aldeanos",
    pt: "Expulsar aldeões",
    tr: "Köylüleri kov",
    ru: "Выгнать жителей",
    zh: "踢出村民",
    };

  const lang = localStorage.getItem("language") || "en";
  const lang_Cancel = langCancel[lang] || "Cancel";
  const lang_KickVillagers = langKickVillagers[lang] || "Kick Villagers";
  const lang_Village = langVillage[lang] || "Village";
  const lang_FarmerBonus = langFarmerBonus[lang] || "25% more food production";
  const lang_FarmerDuration = langFarmerDuration[lang] || "Increases food production for 7 days.";
  const lang_WoodcutterBonus = langWoodcutterBonus[lang] || "25% more wood production";
  const lang_WoodcutterDuration = langWoodcutterDuration[lang] || "Increases wood production for 7 days.";
  const lang_GoldMinerBonus = langGoldMinerBonus[lang] || "25% more gold production";
  const lang_GoldMinerDuration = langGoldMinerDuration[lang] || "Increases gold production for 7 days.";
  const lang_BuildingCapacity = langBuildingCapacity[lang] || "Building Capacity";
  const lang_Spy = langSpy[lang] || "Spy";
  const lang_Level = langLevel[lang] || "Level: ";
  const lang_BTitle = langBTitle[lang] || "Train troops to strengthen your army!";
  const lang_DefenseBonus = langDefenseBonus[lang] || "Defense Bonus: ";
  
  document.getElementById("farmer_lang").innerText = lang_Farmer;
  document.getElementById("woodcutter_lang").innerText = lang_Woodcutter;
  document.getElementById("gold_miner_lang").innerText = lang_GoldMiner;
  document.getElementById("building_capacity_text").innerText = lang_BuildingCapacity;
  document.getElementById("title_lang").innerText = lang_Village;
  document.getElementById("lang_build_title").innerText = lang_BTitle;
  document.getElementById("lang_level1").innerText = lang_Level;
  document.getElementById("lang_level2").innerText = lang_Level;
  document.getElementById("lang_level3").innerText = lang_Level;
  document.getElementById("lang_level4").innerText = lang_Level;
  document.getElementById("lang_level5").innerText = lang_Level;
  document.getElementById("lang_level6").innerText = lang_Level;
  document.getElementById("25_fp").innerText = lang_FarmerBonus;
  document.getElementById("25_fpt").innerText = lang_FarmerDuration;
  document.getElementById("25_wp").innerText = lang_WoodcutterBonus;
  document.getElementById("25_wpt").innerText = lang_WoodcutterDuration;
  document.getElementById("25_gp").innerText = lang_GoldMinerBonus;
  document.getElementById("25_gpt").innerText = lang_GoldMinerDuration;
  document.getElementById("villager_kick_text").innerText = lang_KickVillagers;
  document.getElementById("farmer_kick_text").innerText = lang_Farmer;
  document.getElementById("woodcutter_kick_text").innerText = lang_Woodcutter;
  document.getElementById("miner_kick_text").innerText = lang_GoldMiner;
  document.getElementById("lang_cancel1").innerText = langCancel;
  document.getElementById("lang_cancel2").innerText = langCancel;
  document.getElementById("lang_cancel3").innerText = langCancel;
  
}
