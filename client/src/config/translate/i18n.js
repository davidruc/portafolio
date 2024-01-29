// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Configuración de i18next
i18n
  .use(initReactI18next) // inicializar react-i18next
  .init({
    resources: {
      en: {
        translation: {
          // Aquí coloca tus cadenas de texto en inglés
          welcome: "I'm a software developer",
          hireMe: "Hire me!",
          Home: "Home",
          About: "About",
          Services: "Services",
          Works: "Works",
          Contact: "Contact",
          language: "Language",
          AboutMe: "About me",
          textAboutMe: "I am David Rueda, a web developer from Colombia. I have extensive experience in building highly customized websites and excel in creating mobile applications.",
          diseñoWeb: "Web desing | web development",
          mobileDesing: "Mobile desing | Mobile development",
          customized: "customized guidance",
          DownloadCV: "Download CV",
          ProjectsCompleted: "Projects completed",
          CupCoffe: "Cup of coffe",
          SatisfiedClients: "Satisfied Clients",
          WinnedHackatons: "Winned Hackatons",

        },
      },
      es: {
        translation: {
          // Aquí coloca tus cadenas de texto en español
          welcome: 'Soy un desarrollador de software',
          hireMe: "Contratame!",
          Home: "Inicio",
          About: "Sobre mi",
          Services: "Servicios",
          Works: "Trabajos",
          Contact: "Contacto",
          language: "Idioma",
          AboutMe: "Sobre mi",
          textAboutMe: "Soy David Rueda, un desarrollador web de Colombia con amplia experiencia en la creación de páginas web altamente personalizadas. Asimismo, tengo habilidades destacadas en el desarrollo de aplicaciones móviles.",
          diseñoWeb: "Diseño web | Desarrollo web",
          mobileDesing: "Diseño mobile | Desarrollo mobile",
          customized: "Asesoría personalizada",
          DownloadCV: "Curriculum",
          ProjectsCompleted: "Proyectos completados",
          CupCoffe: "Tazas de café",
          SatisfiedClients: "Clientes Satisfechos",
          WinnedHackatons: "Hackatons Ganadas",

        },
      },
    },
    lng: 'es', // idioma predeterminado
    fallbackLng: 'es', // idioma de respaldo
    interpolation: {
      escapeValue: false, // react ya escapa los valores
    },
  });

export default i18n;
