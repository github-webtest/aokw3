
  const langWorld = {
    en: "World ",
    de: "Welt ",
    fr: "Monde ",
    es: "Mundo ",
    pt: "Mundo ",
    tr: "Dünya ",
    ru: "Мир ",
    zh: "世界 "
  };
  
  const langClose = {
    en: "Close",
    de: "Schließen",
    fr: "Fermer",
    es: "Cerca",
    pt: "Perto",
    tr: "Kapalı",
    ru: "Закрывать",
    zh: "关闭"
  };
  
  const langOpen = {
    en: "Open",
    de: "Offen",
    fr: "Ouvrir",
    es: "Abierto",
    pt: "Aberto",
    tr: "Açık",
    ru: "Открыть",
    zh: "打开"
  };
  
  const langTitle = {
  en: "Worlds",
  de: "Welten",
  fr: "Mondes",
  es: "Mundos",
  pt: "Mundos",
  tr: "Dünyalar",
  ru: "Миры",
  zh: "世界"
};

  const lang = localStorage.getItem("language") || "en";
  const lang_World = langWorld[lang] || "World ";
  const lang_Open = langOpen[lang] || "Open";
  const lang_Close = langClose[lang] || "Close";
  const lang_tit = langTitle[lang] || "Worlds";
  
  function save() {
  
  document.getElementById("title_lang").innerText = lang_tit;
  
  const parentDiv = document.getElementById('container');
  parentDiv.innerHTML = "";
  const card = document.createElement('div');
  
  card.className = `world-card w_c_hover`;
  
  card.innerHTML = `
        <div class="world-info">
        <div class="status-dot green"></div>
        <span>${lang_World}0 (BETA)</span>
        </div>
        <button id="w1_s_lang" class="world-btn open-btn">${lang_Open}</button>
      `;
	  
	  parentDiv.appendChild(card);
  
  }
  
  /*
  
  function test() {
  
  const parentDiv = document.getElementById('container');
  parentDiv.innerHTML = "";
  const card = document.createElement('div');
  
  const status = getWorldStatus(i);
  const sta = (status === "open") ? "green" : "red";
  const sta2 = (status === "open") ? lang_Open : lang_Close;
  const sta3 = (status === "open") ? "open" : "close";
  const sta4 = (status === "open") ? "w_c_hover" : "";
  const sta5 = (status === "open") ? i : null;
	  
	  card.className = `world-card ${sta4}`;
	  
	  if (status === "open") {
      card.onclick = () => {
      localStorage.setItem("world", sta5);
      window.location.href = "/enter.html";
      };
      }
	  

      card.innerHTML = `
        <div class="world-info">
          <div class="status-dot ${sta}"></div>
          <span>${lang_World}${i}${i === 0 ? " (BETA)" : ""}</span>
        </div>
        <button id="w${i}_s_lang" class="world-btn ${sta3}-btn">${sta2}</button>
      `;

      parentDiv.appendChild(card);
	  
	  const parentDiv = document.getElementById('container');
      parentDiv.innerHTML = "";
  
  }

*/