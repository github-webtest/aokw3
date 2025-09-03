const langBonus = {
    en: "Bonus",
    de: "Bonus",
    fr: "Bonus",
    es: "Bono",
    pt: "Bônus",
    tr: "Bonus",
    ru: "Бонус",
    zh: "加成",
    };
	
	const langTasks = {
    en: "Tasks",
    de: "Aufgaben",
    fr: "Tâches",
    es: "Tareas",
    pt: "Tarefas",
    tr: "Görevler",
    ru: "Задания",
    zh: "任务",
    };
	
	const langMessages = {
    en: "Messages",
    de: "Nachrichten",
    fr: "Messages",
    es: "Mensajes",
    pt: "Mensagens",
    tr: "Mesajlar",
    ru: "Сообщения",
    zh: "消息",
    };
	
	const langProcesses = {  
    en: "Processes",
    de: "Prozesse",
    fr: "Processus",
    es: "Procesos",
    pt: "Processos",
    tr: "İşlemler",
    ru: "Процессы",
    zh: "进程",
    };
	
	const langSettings = {   
    en: "Settings",
    de: "Einstellungen",
    fr: "Paramètres",
    es: "Configuración",
    pt: "Configurações",
    tr: "Ayarlar",
    ru: "Настройки",
    zh: "设置",
    };
	
	const langKN = {    
    en: "King Name", 
    de: "Königsname",
    fr: "Nom du roi",
    es: "Nombre del rey",
    pt: "Nome do rei",
    tr: "Kral Adı",
    ru: "Имя короля",
    zh: "国王的名字",
    };
	
	const langWorld = {     
    en: "World: ",  
    de: "Welt: ",
    fr: "Monde : ",
    es: "Mundo: ",
    pt: "Mundo: ",
    tr: "Dünya: ",
    ru: "Мир: ",
    zh: "世界: ",
    };
	
	const langSave = {      
    en: "Save",   
    de: "Speichern",
    fr: "Enregistrer",
    es: "Guardar",
    pt: "Salvar",
    tr: "Kaydet",
    ru: "Сохранить",
    zh: "保存",
    };
	
	const langKN2 = {    
    en: "King Name (max 12 chars)", 
    de: "Königsname (max. 12 Zeichen)",
    fr: "Nom du roi (12 caractères max.)",
    es: "Nombre del rey (máx. 12 caracteres)",
    pt: "Nome do rei (máx. 12 caracteres)",
    tr: "Kral Adı (en fazla 12 karakter)",
    ru: "Имя короля (макс. 12 символов)",
    zh: "国王的名字 (最多12个字符)",
    };
	
	const langLanguage = {     
    en: "Language", 
    de: "Sprache",
    fr: "Langue",
    es: "Idioma",
    pt: "Idioma",
    tr: "Dil",
    ru: "Язык",
    zh: "语言",
    };
	
	const langFlag = {     
    en: "url('images/en_flag.png')", 
    de: "url('images/de_flag.png')",
    fr: "url('images/fr_flag.png')",
    es: "url('images/es_flag.png')",
    pt: "url('images/pt_flag.png')",
    tr: "url('images/tr_flag.png')",
    ru: "url('images/ru_flag.png')",
    zh: "url('images/zh_flag.png')",
    };
	
	const langLangs = {     
    en: "English", 
    de: "Deutsch",
    fr: "Français",
    es: "Español",
    pt: "Português",
    tr: "Türkçe",
    ru: "Русский",
    zh: "中国人",
    };
	
	const langAccount = {       
    en: "Account",  
    de: "Konto",  
    fr: "Compte",  
    es: "Cuenta",  
    pt: "Conta",  
    tr: "Hesap",  
    ru: "Аккаунт",  
    zh: "账户",  
    };
	
	const langCPassword = {       
    en: "Change Password",  
    de: "Passwort ändern",  
    fr: "Changer de passe",  
    es: "Cambiar contraseña",  
    pt: "Alterar senha",  
    tr: "Şifre Değiştir",  
    ru: "Сменить пароль",  
    zh: "修改密码",  
    };
	
	const langCEmail = {        
    en: "Change Email",   
    de: "Email ändern",  
    fr: "Changer Email",  
    es: "Cambiar Email",  
    pt: "Alterar Email",  
    tr: "Email Değiştir",  
    ru: "Сменить Email",  
    zh: "修改邮箱",  
    };
	
	const langSupport = {          
    en: "Support",     
    de: "Support",  
    fr: "Support",  
    es: "Soporte",  
    pt: "Suporte",  
    tr: "Destek",  
    ru: "Поддержка",  
    zh: "支持",  
    };
	
	const langExit = {           
    en: "Exit",     
    de: "Beenden",  
    fr: "Quitter",  
    es: "Salir",  
    pt: "Sair",  
    tr: "Çıkış",  
    ru: "Выход",  
    zh: "退出",  
    };
	
	const langESEND = {            
    en: "A verification code has been sent to your email address.",     
    de: "Ein Bestätigungscode wurde an Ihre E-Mail-Adresse gesendet.",  
    fr: "Un code de vérification a été envoyé à votre adresse e-mail.",  
    es: "Se ha enviado un código de verificación a su dirección de correo electrónico.",  
    pt: "Um código de verificação foi enviado para o seu endereço de e-mail.",  
    tr: "E-posta adresinize bir doğrulama kodu gönderildi.",  
    ru: "Код подтверждения был отправлен на ваш адрес электронной почты.",  
    zh: "验证码已发送到您的电子邮箱。",  
    };
	
	const langSend = {             
    en: "Send",      
    de: "Senden",  
    fr: "Envoyer",  
    es: "Enviar",  
    pt: "Enviar",  
    tr: "Gönder",  
    ru: "Отправить",  
    zh: "发送",  
    };

	const lang = localStorage.getItem("language") || "en";
	const lang_Messages = langMessages[lang] || "Messages";
	const lang_Processes = langProcesses[lang] || "Processes";
    const lang_Bonus = langBonus[lang] || "Bonus";
	const lang_Tasks = langTasks[lang] || "Tasks";
	const lang_Settings = langSettings[lang] || "Settings";
	const lang_KN = langKN[lang] || "King Name";
	const lang_World = langWorld[lang] || "World: ";
	const lang_Save = langSave[lang] || "Save";
	const lang_KN2 = langKN2[lang] || "King Name (max 12 chars)";
	const lang_Language = langLanguage[lang] || "Language";
	const lang_Flag = langFlag[lang] || "images/en_flag.png";
	const lang_Langs = langLangs[lang] || "English";
	const lang_Account = langAccount[lang] || "Account";
	const lang_CPassword = langCPassword[lang] || "Change Password";
	const lang_CEmail = langCEmail[lang] || "Change Email";
	const lang_Support = langSupport[lang] || "Support";
	const lang_Exit = langExit[lang] || "Exit";
	const lang_Send = langSend[lang] || "Send";
	const lang_ESEND = langESEND[lang] || "A verification code has been sent to your email address.";

function save() {
	
	const parentDiv = document.getElementById('kingdom_bg');
    parentDiv.innerHTML = "";
	
	const screenwidth = window.innerWidth;
	document.getElementById('set_flag').style.backgroundImage = lang_Flag;
	document.getElementById('language').innerText = lang_Langs;
	
	if (screenwidth > 500) {
		
		const mresult = (screenwidth - 500) / 2;
		document.getElementById("top_menus3").style.right = mresult + "px";
		
	}

    for (i=1; i<101; i++) {
		
		const card = document.createElement('div');
		
		card.className = "bg_images";
		
		if (i == 11 || i == 12 || i == 13 || i == 14 || i == 21 || i == 22 || i == 23 || i == 24 || i == 31 || i == 32 || i == 33 || i == 34) {
		
		card.onclick = () => {
        window.location.href = "castle.html";
        };
		
		
		} else if (i == 17 || i == 18 || i == 19 || i == 27 || i == 28 || i == 29) {
			
		card.onclick = () => {
        window.location.href = "barracks.html";
        };
		
			
		} else if (i == 35 || i == 36 || i == 37 || i == 38 || i == 45 || i == 46 || i == 47 || i == 48) {
			
		card.onclick = () => {
        window.location.href = "academy.html";
        };	
		
			
		} else if (i == 42 || i == 43 || i == 44) {
			
		card.onclick = () => {
        window.location.href = "workshop.html";
        };	
		
			
		} else if (i == 52 || i == 53 || i == 61 || i == 62 || i == 63) {
			
		card.onclick = () => {
        window.location.href = "market.html";
        };	
		
			
		} else if (i == 65 || i == 66 || i == 67 || i == 75) {
			
		card.onclick = () => {
        window.location.href = "wall.html";
        };	
		
			
		} else if (i == 69 || i == 70 || i == 79 || i == 80) {
			
		card.onclick = () => {
        window.location.href = "village.html";
        };	
		
			
		}
		
		parentDiv.appendChild(card);
		
	}
	
	document.getElementById("lang_messages").innerText = lang_Messages;
	document.getElementById("lang_processes").innerText = lang_Processes;
	document.getElementById("lang_bonus").innerText = lang_Bonus;
	document.getElementById("lang_tasks").innerText = lang_Tasks;
	
}

function showSettings(x) {
	document.getElementById("build_info_bg").style.display = "flex";
	document.getElementById("show_info_title").innerText = lang_Settings;
	document.getElementById("world_lang").innerText = lang_World;
	document.getElementById("kingname_lang").innerText = lang_KN;
	document.getElementById("save_lang").innerText = lang_Save;
	document.getElementById("kingname_lang2").innerText = lang_KN2;
	document.getElementById("language_lang").innerText = lang_Language;
	document.getElementById("language_lang2").innerText = lang_Language;
	document.getElementById("account_lang").innerText = lang_Account;
	document.getElementById("cpassword_lang").innerText = lang_CEmail;
	document.getElementById("cpassword_lang2").innerText = lang_CEmail;
	document.getElementById("cemail_lang").innerText = lang_CPassword;
	document.getElementById("cemail_lang2").innerText = lang_CPassword;
	document.getElementById("support_lang").innerText = lang_Support;
	document.getElementById("exit_lang").innerText = lang_Exit;
	document.getElementById("esend_lang").innerText = lang_ESEND;
	document.getElementById("esend_lang2").innerText = lang_ESEND;
	document.getElementById("send_lang").innerText = lang_Send;
	document.getElementById("send_lang2").innerText = lang_Send;
	
	document.getElementById("show_iner1").style.display = "block";
	document.getElementById("show_iner2").style.display = "none";
	document.getElementById("show_iner3").style.display = "none";
	document.getElementById("show_iner4").style.display = "none";
	
	
	if (x == "Exit") {
		document.getElementById("build_info_bg").style.display = "none";
	} else if (x == "Flags") {
		document.getElementById("show_iner1").style.display = "none";
		document.getElementById("show_iner2").style.display = "block";
		document.getElementById("show_iner3").style.display = "none";
		document.getElementById("show_iner4").style.display = "none";
	} else if (x == "Back") {
		document.getElementById("show_iner1").style.display = "block";
		document.getElementById("show_iner2").style.display = "none";
		document.getElementById("show_iner3").style.display = "none";
		document.getElementById("show_iner4").style.display = "none";
	} else if (x == "Lang_EN") {
		localStorage.setItem("language", "en");
		location.reload();
	} else if (x == "Lang_DE") {
		localStorage.setItem("language", "de");
		location.reload();
	} else if (x == "Lang_FR") {
		localStorage.setItem("language", "fr");
		location.reload();
	} else if (x == "Lang_ES") {
		localStorage.setItem("language", "es");
		location.reload();
	} else if (x == "Lang_PT") {
		localStorage.setItem("language", "pt");
		location.reload();
	} else if (x == "Lang_TR") {
		localStorage.setItem("language", "tr");
		location.reload();
	} else if (x == "Lang_RU") {
		localStorage.setItem("language", "ru");
		location.reload();
	} else if (x == "Lang_ZH") {
		localStorage.setItem("language", "zh");
		location.reload();
	} else if (x == "CPassword") {
		document.getElementById("show_iner1").style.display = "none";
		document.getElementById("show_iner2").style.display = "none";
		document.getElementById("show_iner3").style.display = "block";
		document.getElementById("show_iner4").style.display = "none";
	} else if (x == "CEmail") {
		document.getElementById("show_iner1").style.display = "none";
		document.getElementById("show_iner2").style.display = "none";
		document.getElementById("show_iner3").style.display = "none";
		document.getElementById("show_iner4").style.display = "block";
	}
	
}