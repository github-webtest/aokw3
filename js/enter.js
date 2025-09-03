function save() {	
	const langEnter = {
    en: "Enter ",
    de: "Eingeben ",
    fr: "Entrer ",
    es: "Ingresar ",
    pt: "Digitar ",
    tr: "Gir ",
    ru: "Входить ",
    zh: "进入 "
  };
  
  const langWorlds = {
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
  const lang_Enter = langEnter[lang] || "Enter";
  const lang_Worlds = langWorlds[lang] || "Enter";

    document.getElementById("login_lang").innerText = lang_Enter;
    document.getElementById("worlds_lang").innerText = lang_Worlds;
	
	document.getElementById("world_number").innerText = localStorage.getItem("world");
	
}

async function enter() {
	
	if (!localStorage.getItem("world")) {
		
		window.location.href = '/worlds.html';
		
	} else {

	
}

}

function worlds() {
	window.location.href = '/worlds.html';
}