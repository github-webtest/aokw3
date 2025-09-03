function save() {

const langKingdomInfo = {
    en: "Kingdom Info",
    de: "Königreich-Info",
    fr: "Info du Royaume",
    es: "Información del Reino",
    pt: "Informações do Reino",
    tr: "Krallık Bilgisi",
    ru: "Информация о Королевстве",
    zh: "王国信息",
};

const langAge = { 
    en: "Age", 
    de: "Zeitalter", 
    fr: "Âge", 
    es: "Edad", 
    pt: "Idade", 
    tr: "Çağ", 
    ru: "Эпоха", 
    zh: "时代", 
};

const langAgePoints = {  
    en: "Age Points: ", 
    de: "Zeitalter-Punkte: ", 
    fr: "Points d’Âge: ", 
    es: "Puntos de Edad: ", 
    pt: "Pontos de Idade: ", 
    tr: "Çağ Puanı: ", 
    ru: "Очки Эпохи: ", 
    zh: "时代点数: ", 
};

const langEconomy = {   
    en: "Economy", 
    de: "Wirtschaft", 
    fr: "Économie", 
    es: "Economía", 
    pt: "Economia", 
    tr: "Ekonomi", 
    ru: "Экономика", 
    zh: "经济", 
};

const langFood1 = {    
    en: "Food: ",  
    de: "Essen: ", 
    fr: "Nourriture: ", 
    es: "Comida: ", 
    pt: "Comida: ", 
    tr: "Gıda: ", 
    ru: "Еда: ", 
    zh: "食物: ", 
};

const langFood2 = {     
    en: " food/hour",   
    de: " essen/Stunde", 
    fr: " nourriture/heure", 
    es: " comida/hora", 
    pt: " comida/hora", 
    tr: " gıda/saat", 
    ru: " eда/час", 
    zh: " 食物/小时", 
};

const langFood3 = {    
    en: " Food",  
    de: " Essen", 
    fr: " Nourriture", 
    es: " Comida", 
    pt: " Comida", 
    tr: " Gıda", 
    ru: " Еда", 
    zh: " 食物", 
};

const langWood1 = {      
    en: "Wood: ",    
    de: "Holz: ", 
    fr: "Bois: ", 
    es: "Madera: ", 
    pt: "Madeira: ", 
    tr: "Odun: ", 
    ru: "Дерево: ", 
    zh: "木材: ", 
};

const langWood2 = {      
    en: " wood/hour",    
    de: " holz/Stunde", 
    fr: " bois/heure", 
    es: " madera/hora", 
    pt: " madeira/hora", 
    tr: " odun/saat", 
    ru: " дерево/час", 
    zh: " 木材/小时", 
};

const langGold1 = {       
    en: "Gold: ",     
    de: "Gold: ", 
    fr: "Or: ", 
    es: "Oro: ", 
    pt: "Ouro: ", 
    tr: "Altın: ", 
    ru: "Золото: ", 
    zh: "黄金: ", 
};

const langGold2 = {       
    en: " gold/hour",     
    de: " gold/Stunde", 
    fr: " or/heure", 
    es: " oro/hora", 
    pt: " ouro/hora", 
    tr: " altın/saat", 
    ru: " золото/час", 
    zh: " 黄金/小时", 
};

const langKC = {        
    en: "Kingdom Center: ",      
    de: "Königszentrum: ", 
    fr: "Centre du Royaume: ", 
    es: "Centro del Reino: ", 
    pt: "Centro do Reino: ", 
    tr: "Krallık Merkezi: ", 
    ru: "Центр Королевства: ", 
    zh: "王国中心: ", 
};

const langGC = {         
    en: "Colonies: ",       
    de: "Kolonien: ", 
    fr: "Colonies: ", 
    es: "Colonias: ", 
    pt: "Colônias: ", 
    tr: "Koloniler: ", 
    ru: "Колонии: ", 
    zh: "殖民地: ", 
};

const langAlliance = {          
    en: "Alliance: ",       
    de: "Allianz: ", 
    fr: "Alliance: ", 
    es: "Alianza: ", 
    pt: "Aliança: ", 
    tr: "İttifak: ", 
    ru: "Альянс: ", 
    zh: "联盟: ", 
};

const langCities = {           
    en: "Cities: ",       
    de: "Städte: ", 
    fr: "Villes: ", 
    es: "Ciudades: ", 
    pt: "Cidades: ", 
    tr: "Şehirler: ", 
    ru: "Города: ", 
    zh: "城市: ", 
};

const langPopulation = {            
    en: "Population",       
    de: "Bevölkerung", 
    fr: "Population", 
    es: "Población", 
    pt: "População", 
    tr: "Nüfus", 
    ru: "Население", 
    zh: "人口", 
};

const langVillagers = {             
    en: "Villagers: ",       
    de: "Dorfbewohner: ", 
    fr: "Villageois: ", 
    es: "Aldeanos: ", 
    pt: "Aldeões: ", 
    tr: "Köylüler: ", 
    ru: "Жители деревни: ", 
    zh: "村民: ", 
};

const langFarmer = {              
    en: "Farmer: ",       
    de: "Bauer: ", 
    fr: "Fermier: ", 
    es: "Granjero: ", 
    pt: "Agricultor: ", 
    tr: "Çiftçi: ", 
    ru: "Фермер: ", 
    zh: "农民: ", 
};

const langTroops = {               
    en: "Troops: ",       
    de: "Truppen: ", 
    fr: "Troupes: ", 
    es: "Tropas: ", 
    pt: "Tropas: ", 
    tr: "Birlikler: ", 
    ru: "Войска: ", 
    zh: "军队: ", 
};

const langSupportT = {                
    en: "Support Troops: ",       
    de: "Unterstützungs-Truppen: ", 
    fr: "Troupes de soutien: ", 
    es: "Tropas de apoyo: ", 
    pt: "Tropas de apoio: ", 
    tr: "Destek Birlikleri: ", 
    ru: "Вспомогательные войска: ", 
    zh: "支援部队: ", 
};

const langSpies = {                 
    en: "Spies: ",        
    de: "Spione: ", 
    fr: "Espions: ", 
    es: "Espías: ", 
    pt: "Espiões: ", 
    tr: "Casuslar: ", 
    ru: "Шпионы: ", 
    zh: "间谍: ", 
};

const langWoodcutter = {                  
    en: "Woodcutter: ",         
    de: "Holzfäller: ", 
    fr: "Bûcheron: ", 
    es: "Leñador: ", 
    pt: "Lenhador: ", 
    tr: "Oduncu: ", 
    ru: "Дровосек: ", 
    zh: "伐木工: ", 
};

const langGoldMiner = {                   
    en: "Gold Miner: ",          
    de: "Goldgräber: ", 
    fr: "Mineur d'or: ", 
    es: "Minero de oro: ", 
    pt: "Minerador de ouro: ", 
    tr: "Altın Madencisi: ", 
    ru: "Золотодобытчик: ", 
    zh: "金矿工: ", 
};

const langStorageL = {                    
    en: "Storage Limit",          
    de: "Speicherlimit", 
    fr: "Limite de stockage", 
    es: "Límite de almacenamiento", 
    pt: "Limite de Armazenamento", 
    tr: "Depo Kapasitesi", 
    ru: "Лимит хранилища", 
    zh: "存储上限", 
};
	
  const lang = localStorage.getItem("language") || "en";
  const lang_KingdomInfo = langKingdomInfo[lang] || "Kingdom Info";
  const lang_Age = langAge[lang] || "Age";
  const lang_AgePoints = langAgePoints[lang] || "Age Points: ";
  const lang_Economy = langEconomy[lang] || "Economy";
  const lang_Food1 = langFood1[lang] || "Food: ";
  const lang_Food2 = langFood2[lang] || " food/hour";
  const lang_Food3 = langFood3[lang] || " Food";
  const lang_Wood1 = langWood1[lang] || " wood/hour";
  const lang_Wood2 = langWood2[lang] || "Wood";
  const lang_Gold1 = langGold1[lang] || "Gold: ";
  const lang_Gold2 = langGold2[lang] || " gold/hour";
  const lang_KC = langKC[lang] || "Kingdom Center: ";
  const lang_GC = langGC[lang] || "Colonies: ";
  const lang_Alliance = langAlliance[lang] || "Alliance: ";
  const lang_Cities = langCities[lang] || "Cities: ";
  const lang_Population = langPopulation[lang] || "Population";
  const lang_Villagers = langVillagers[lang] || "Villagers: ";
  const lang_Farmer = langFarmer[lang] || "Farmer: ";
  const lang_Troops = langTroops[lang] || "Troops: ";
  const lang_SupportT = langSupportT[lang] || "Support Troops: ";
  const lang_Spies = langSpies[lang] || "Spies: ";
  const lang_Woodcutter = langWoodcutter[lang] || "Woodcutter: ";
  const lang_GoldMiner = langGoldMiner[lang] || "Gold Miner: ";
  const lang_StorageL = langStorageL[lang] || "Storage Limit";
  
  document.getElementById("title_lang").innerText = lang_KingdomInfo;
  document.getElementById("age_lang").innerText = lang_Age;
  document.getElementById("age_points_lang").innerText = lang_AgePoints;
  document.getElementById("economy_lang").innerText = lang_Economy;
  document.getElementById("food_lang").innerText = lang_Food1;
  document.getElementById("food_lang2").innerText = lang_Food1;
  document.getElementById("foodh_lang").innerText = lang_Food2;
  document.getElementById("food2_lang").innerText = lang_Food3;
  document.getElementById("food3_lang").innerText = lang_Food3;
  document.getElementById("wood_lang").innerText = lang_Wood1;
  document.getElementById("wood_lang2").innerText = lang_Wood1;
  document.getElementById("woodh_lang").innerText = lang_Wood2;
  document.getElementById("gold_lang").innerText = lang_Gold1;
  document.getElementById("gold_lang2").innerText = lang_Gold1;
  document.getElementById("goldh_lang").innerText = lang_Gold2;
  document.getElementById("kc_lang").innerText = lang_KC;
  document.getElementById("kc_lang2").innerText = lang_KC;
  document.getElementById("kc_lang3").innerText = lang_KC;
  document.getElementById("colonies_lang").innerText = lang_GC;
  document.getElementById("colonies_lang2").innerText = lang_GC;
  document.getElementById("colonies_lang3").innerText = lang_GC;
  document.getElementById("alliance_lang").innerText = lang_Alliance;
  document.getElementById("cities_lang").innerText = lang_Cities;
  document.getElementById("cities_lang2").innerText = lang_Cities;
  document.getElementById("cities_lang3").innerText = lang_Cities;
  document.getElementById("population_lang").innerText = lang_Population;
  document.getElementById("villagers_lang").innerText = lang_Villagers;
  document.getElementById("farmer_lang").innerText = lang_Farmer;
  document.getElementById("troops_lang").innerText = lang_Troops;
  document.getElementById("support_t_lang").innerText = lang_SupportT;
  document.getElementById("spies_lang").innerText = lang_Spies;
  document.getElementById("woodcutter_lang").innerText = lang_Woodcutter;
  document.getElementById("gold_miner_lang").innerText = lang_GoldMiner;
  document.getElementById("storage_lang").innerText = lang_StorageL;
  
}