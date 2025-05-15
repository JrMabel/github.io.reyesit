 const translations = {
            es: {
                "home": "Inicio",
                "about": "Quiénes Somos",
                "services": "Servicios",
                "contact": "Contacto",
                "hero-title": "Soluciones Web Profesionales en Suiza",
                "hero-description": "Diseño, desarrollo y administración de páginas web a medida para personas y negocios. Transformo tus ideas en realidad digital.",
                "request-service": "Solicitar Servicio",
                "view-services": "Ver Servicios",
                "services-section-title": "Mis Servicios",
                "web-design": "Diseño Web",
                "web-design-description": "Creo diseños atractivos y funcionales que reflejan la identidad de tu marca y mejoran la experiencia del usuario.",
                "more-info": "Más información",
                "testimonials-section-title": "Clientes Satisfechos",
                "cta-title": "¿Listo para llevar tu presencia web al siguiente nivel?",
                "cta-description": "Contáctame hoy mismo para discutir tu proyecto y recibir una cotización personalizada.",
                "cta-contact": "Contáctame",
                "web-development" : "Desarrollo Web",
                "web-development-description": "Desarrollo sitios web rápidos, seguros y optimizados para todos los dispositivos y motores de búsqueda.",
                "web-administration":"Administración Web",
                "web-administration-description":"Mantenimiento, actualizaciones y soporte técnico para garantizar que tu sitio web funcione perfectamente.",
                "more-info-services":"Detalles de Servicios",
                "customer-comment1":"Excelente trabajo y atención personalizada. Mi sitio web ha aumentado significativamente las consultas de clientes.",
                "customer-detail1":"Dueña de JimCas Consultores, Basel",
                "customer-comment2":"Rápido, profesional y con un excelente entendimiento de lo que necesitábamos para nuestro negocio.",
                "customer-detail2":"Restaurante, Geneva",
                "customer-comment3":"El sitio web que creó para mi consultoría ha sido fundamental para establecer mi presencia profesional.",
                "customer-detail3":"Consultora, Lausanne"
            },
            en: {
                "home": "Home",
                "about": "About Us",
                "services": "Services",
                "contact": "Contact",
                "hero-title": "Professional Web Solutions in Switzerland",
                "hero-description": "Design, development, and management of custom websites for individuals and businesses. I turn your ideas into digital reality.",
                "request-service": "Request Service",
                "view-services": "View Services",
                "services-section-title": "My Services",
                "web-design": "Web Design",
                "web-design-description": "I create attractive and functional designs that reflect your brand identity and improve user experience.",
                "more-info": "More info",
                "testimonials-section-title": "Satisfied Clients",
                "cta-title": "Ready to take your online presence to the next level?",
                "cta-description": "Contact me today to discuss your project and receive a personalized quote.",
                "cta-contact": "Contact me"
            },

              de: {
                "home": "Home",
                "about": "Wer sind wir",
                "services": "Leistungen",
                "contact": "Kontak",
                "hero-title": "Professionelle Weblösungen in der Schweiz",
                "hero-description": "Design, Entwicklung und Verwaltung individueller Websites für Privatpersonen und Unternehmen. Ich setze Ihre Ideen in digitale Realität um.",
                "request-service": "Service anfordern",
                "view-services": "Siehe Dienstleistungen",
                "services-section-title": "Services anzeigen",
                "web-design": "Webdesign",
                "web-design-description": "Ich erstelle attraktive und funktionale Designs, die Ihre Markenidentität widerspiegeln und das Benutzererlebnis verbessern.",
                "more-info": "Mehr Infos",
                "testimonials-section-title": "Zufriedene Kunden",
                "cta-title": "Sind Sie bereit, Ihre Online-Präsenz auf die nächste Stufe zu heben?",
                "cta-description": "Kontaktieren Sie mich noch heute, um Ihr Projekt zu besprechen und ein individuelles Angebot zu erhalten.",
                "cta-contact": "Kontaktieren Sie mich",
                "web-development": "Webentwicklung",
                "web-development-description":"Ich entwickle schnelle, sichere und optimierte Websites für alle Geräte und Suchmaschinen.",
                "web-administration":"Web-Administration",
                "web-administration-description" : "Wartung, Updates und technischer Support, um sicherzustellen, dass Ihre Website reibungslos läuft.",
                "more-info-services":"Servicedetails",
                "customer-comment1":"Hervorragende Arbeit und persönliche Betreuung. Die Zahl der Kundenanfragen auf meiner Website ist deutlich gestiegen.",
                "customer-detail1":"Inhaber von JimCas Consultants, Basel",
                "customer-comment2":"Schnell, professionell und mit einem hervorragenden Verständnis dafür, was wir für unser Geschäft brauchten.",
                "customer-detail2": "Restaurant, Genf",
                "customer-comment3":"Die von Ihnen für meine Beratungspraxis erstellte Website hat maßgeblich zum Aufbau meiner beruflichen Präsenz beigetragen.",
                "customer-detail3": "Berater, Lausanne"
            },
            
            // Añadir más idiomas aquí (it, de)
        };

        function changeLanguage() {
            const language = document.getElementById("language-selector").value;
            const elements = document.querySelectorAll("[data-key]");
            elements.forEach(function(element) {
                const key = element.getAttribute("data-key");
                if (translations[language] && translations[language][key]) {
                    element.textContent = translations[language][key];
                }
            });
        }

        // Inicializar idioma por defecto
        window.onload = function() {
            changeLanguage();
        };