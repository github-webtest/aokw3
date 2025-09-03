function save() {
  
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
	
	const langNotification = {
    en: "Notification",
    de: "Benachrichtigungen",
    fr: "Notifications",
    es: "Notificaciones",
    pt: "Notificações",
    tr: "Bildirimler",
    ru: "Уведомления",
    zh: "通知",
    };

  const lang = localStorage.getItem("language") || "en";
  const lang_Messages = langMessages[lang] || "Messages";
  const lang_Notification = langNotification[lang] || "Notification";
  
  document.getElementById("title_lang").innerText = lang_Messages;
  document.getElementById("lang_header1_button").innerText = lang_Notification;
  document.getElementById("lang_header2_button").innerText = lang_Messages;
  
}