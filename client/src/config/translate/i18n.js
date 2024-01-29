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
          Services: "Services",
          StaticWP: "Static web Page",
          infoSWP: "Ideal for establishing online presence, increasing visibility, and facilitating the sale of basic products.",
          DynamicWP: "Dynamic Page",
          infoDWP: "For businesses in need of advanced functionalities: inventories, databases, payment gateways, etc",
          Aplication: "Mobile applications",
          infoApp: "Intuitive, personalized solutions tailored to your specific needs. Bring your digital vision to life!",
          CustomW: "Locking for a custom jod?",
          ClickHere: "Click here",
          toWhat: "to contact me.",
          present: "present",
          academic: "Academic Degree",
          workExp: "Custom Projects",
          bachiller: "La Salle Bacheleor",
          certified: "Certified in multiple technology areas",
          physics: "Pursuing a degree in Physics",
          infoPhysics: "Currently in the 7th semester at UIS.",
          FreelanceWeb: "Freelance Web Development",
          MobileFreelance: "Mobile Freelance"
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
          Services: "Servicios",
          StaticWP: "Página web estática",
          infoSWP: "Ideal para establecer presencia online, aumentar visibilidad y facilitar la venta de productos. (venta de productos básica)",
          DynamicWP: "Página web dinámica",
          infoDWP: "Para empresas que necesitan funcionalidades avanzadas: inventarios, bases de datos, pasarelas de pago, etc.",
          CustomW: "¿Buscando un trabajo personalizado?  ",
          Aplication: "Aplicación movil",
          infoApp: "Soluciones intuitivas y personalizadas para tus necesidades específicas. ¡Haz realidad tu visión digital!",
          ClickHere: "Dale click",
          toWhat: "y ponte en contacto conmgio.",
          present: "presente",
          academic: "Certificación académica",
          workExp: "Proyectos personalizados",
          bachiller: "La Salle Bacheleor",
          certified: "Multiples certificaciones en TI",
          physics: "Estudios en Física Pura",
          infoPhysics: "Cursando el 7mo semestre en la UIS.",
          FreelanceWeb: "Freelance: Desarrollo web",
          MobileFreelance: "Freelance: Desarrollo móvil"
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
