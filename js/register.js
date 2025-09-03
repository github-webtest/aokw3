function save() {
	
	const langLogin = {
    en: "Login",
    de: "Login",
    fr: "Se connecter",
    es: "Acceso",
    pt: "Conecte-se",
    tr: "Giriş",
    ru: "Авторизоваться",
    zh: "登录"
  };
  
  const langPassword = {
  en: "Password",
  de: "Passwort",
  fr: "Mot de passe",
  es: "Contraseña",
  pt: "Senha",
  tr: "Şifre",
  ru: "Пароль",
  zh: "密码"
  };
  
  const langRegister = {
  en: "Register",
  de: "Registrieren",
  fr: "S'inscrire",
  es: "Registrarse",
  pt: "Registrar-se",
  tr: "Kayıt ol",
  ru: "Зарегистрироваться",
  zh: "注册"
};
  
  const langRegister3 = {
  en: "Do you already have an account?",
  de: "Sie haben kein Konto?",
  fr: "Vous n'avez pas de compte ?",
  es: "¿No tienes una cuenta?",
  pt: "Não tem uma conta?",
  tr: "Hesabın yok mu?",
  ru: "У вас нет аккаунта?",
  zh: "还没有账号？"
};
  
  const lang = localStorage.getItem("language") || "en";
  const lang_Login = langLogin[lang] || "Login";
  const lang_Password = langPassword[lang] || "Password";
  const lang_Register = langRegister[lang] || "Register";
  const lang_Register3 = langRegister3[lang] || "Do you already have an account?";
  
  document.getElementById("login_lang").innerText = lang_Login;
  document.getElementById("password_lang").innerText = lang_Password;
  document.getElementById("register_lang").innerText = lang_Register;
  document.getElementById("register2_lang").innerText = lang_Register;
  document.getElementById("register3_lang").innerText = lang_Register3;
	
	
}