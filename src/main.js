// import { createApp } from "vue";
// import App from "./App.vue";
// import { createPinia } from "pinia";
// import router from "./router";
// import { createI18n } from "vue-i18n";
// import axios from "axios";

// // Importer les fichiers de traduction
// import english from "./translate/english.json";
// import french from "./translate/french.json";

// // Importer les styles Bootstrap et FontAwesome
// import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap/dist/js/bootstrap.js";
// import "@fortawesome/fontawesome-free/css/all.css";

// const i18n = createI18n({
//   locale: "fr", 
//   fallbackLocale: "en", 
//   messages: {
//     en: english,
//     fr: french,
//   },
// });

// const app = createApp(App);

// app.use(createPinia());
// app.use(i18n);
// app.use(router);
// app.use(axios);

// app.mount("#app");



import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import router from "./router";
import { createI18n } from "vue-i18n";
import axios from "axios"
// Importer les fichiers de traduction
import english from "./translate/english.json";
import french from "./translate/french.json";

// Importer les styles Bootstrap et FontAwesome
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import '@fortawesome/fontawesome-free/css/all.css';

// Configurer i18n pour la gestion des langues
const i18n = createI18n({
  locale: "fr", // Langue par défaut
  fallbackLocale: "en", // Langue de repli
  messages: {
    en: english,
    fr: french,
  },
});

// Créer l'application Vue
const app = createApp(App);

// Utiliser Pinia, i18n, et le routeur
app.use(createPinia());
app.use(i18n);
app.use(router);
app.use(axios);
// Monter l'application
app.mount("#app");