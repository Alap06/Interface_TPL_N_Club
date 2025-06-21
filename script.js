document.addEventListener('DOMContentLoaded', function() {
    // Animation de la navbar au scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.classList.add('shadow-lg');
            navbar.classList.add('bg-deep-black');
            navbar.classList.remove('bg-deep-black/90');
        } else {
            navbar.classList.remove('shadow-lg');
            navbar.classList.add('bg-deep-black/90');
            navbar.classList.remove('bg-deep-black');
        }
    });

    // Bouton retour en haut
    const backToTopButton = document.getElementById('backToTop');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTopButton.classList.remove('opacity-0', 'invisible');
            backToTopButton.classList.add('opacity-100', 'visible');
        } else {
            backToTopButton.classList.add('opacity-0', 'invisible');
            backToTopButton.classList.remove('opacity-100', 'visible');
        }
    });

    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Animation des sections au scroll
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    sections.forEach(section => {
        observer.observe(section);
    });

    // Chargement des news depuis une API fictive
    const newsContainer = document.querySelector('.news-container');
    
    // Fonction pour simuler une API
    async function fetchNews() {
        // En réalité, vous utiliseriez une vraie API comme NewsAPI
        // Ici nous simulons un appel API avec un délai
        return new Promise(resolve => {
            setTimeout(() => {
                resolve([
                    {
                        title: "Nouveau DJ résident",
                        description: "Nous sommes ravis d'accueillir DJ Solar comme notre nouveau DJ résident tous les vendredis soirs.",
                        image: "https://source.unsplash.com/random/600x400/?dj",
                        date: "15 Juin 2023",
                        url: "#"
                    },
                    {
                        title: "Soirée anniversaire",
                        description: "Célébrez nos 13 ans d'exception avec une soirée spéciale et des invités surprises.",
                        image: "https://source.unsplash.com/random/600x400/?party",
                        date: "22 Juin 2023",
                        url: "#"
                    },
                    {
                        title: "Nouvelle terrasse d'été",
                        description: "Découvrez notre nouvelle terrasse avec vue panoramique sur la ville, ouverte tout l'été.",
                        image: "https://source.unsplash.com/random/600x400/?terrace,night",
                        date: "1 Juillet 2023",
                        url: "#"
                    },
                    {
                        title: "Festival de musique électronique",
                        description: "3 jours de musique non-stop avec les plus grands noms de la scène internationale.",
                        image: "https://source.unsplash.com/random/600x400/?festival",
                        date: "12-14 Août 2023",
                        url: "#"
                    },
                    {
                        title: "Happy Hour étendu",
                        description: "Profitez de nos happy hours étendus jusqu'à minuit tous les jeudis soirs.",
                        image: "https://source.unsplash.com/random/600x400/?cocktail",
                        date: "Tous les jeudis",
                        url: "#"
                    },
                    {
                        title: "Nouveau système son",
                        description: "Nous avons investi dans un nouveau système son haute fidélité pour une expérience immersive.",
                        image: "https://source.unsplash.com/random/600x400/?speakers",
                        date: "Installé",
                        url: "#"
                    }
                ]);
            }, 1000);
        });
    }

    // Afficher les news
    async function displayNews() {
        const news = await fetchNews();
        newsContainer.innerHTML = '';
        
        news.forEach(item => {
            const newsCard = document.createElement('div');
            newsCard.className = 'news-card rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300';
            newsCard.innerHTML = `
                <div class="news-image" style="background-image: url('${item.image}')"></div>
                <div class="p-6">
                    <span class="text-sm text-cyan-blue">${item.date}</span>
                    <h3 class="text-xl font-bold my-2">${item.title}</h3>
                    <p class="text-gray-400 mb-4">${item.description}</p>
                    <a href="${item.url}" class="inline-flex items-center text-light-green hover:text-turquoise transition">
                        Lire plus <i class="fas fa-arrow-right ml-2"></i>
                    </a>
                </div>
            `;
            newsContainer.appendChild(newsCard);
        });
    }

    // Chargement des événements depuis une API fictive
    const eventsContainer = document.querySelector('.events-container');
    
    async function fetchEvents() {
        // Simulation d'appel API
        return new Promise(resolve => {
            setTimeout(() => {
                resolve([
                    {
                        title: "Soirée Electro Underground",
                        description: "Plongez dans les profondeurs de la musique électronique avec nos DJs underground.",
                        image: "https://source.unsplash.com/random/600x400/?electronic,music",
                        date: "Vendredi 16 Juin",
                        time: "23h - 6h",
                        location: "Salle principale",
                        price: "20€",
                        url: "#"
                    },
                    {
                        title: "Latin Night",
                        description: "Une nuit entière dédiée aux rythmes latinos avec des DJs spécialisés.",
                        image: "https://source.unsplash.com/random/600x400/?latin,music",
                        date: "Samedi 17 Juin",
                        time: "23h - 6h",
                        location: "Salle principale",
                        price: "25€",
                        url: "#"
                    },
                    {
                        title: "Afterwork spécial été",
                        description: "Commencez votre weekend en avance avec notre afterwork sur la terrasse.",
                        image: "https://source.unsplash.com/random/600x400/?afterwork",
                        date: "Jeudi 22 Juin",
                        time: "18h - 23h",
                        location: "Terrasse",
                        price: "Entrée libre",
                        url: "#"
                    },
                    {
                        title: "Anniversaire du Club",
                        description: "Célébrez nos 13 ans avec une soirée exceptionnelle et des invités surprises.",
                        image: "https://source.unsplash.com/random/600x400/?anniversary",
                        date: "Samedi 24 Juin",
                        time: "22h - 7h",
                        location: "Tout le club",
                        price: "30€",
                        url: "#"
                    }
                ]);
            }, 1000);
        });
    }

    // Afficher les événements
    async function displayEvents() {
        const events = await fetchEvents();
        eventsContainer.innerHTML = '';
        
        events.forEach(event => {
            const eventCard = document.createElement('div');
            eventCard.className = 'event-card rounded-lg overflow-hidden mb-8 grid grid-cols-1 lg:grid-cols-3';
            eventCard.innerHTML = `
                <div class="event-image lg:col-span-1" style="background-image: url('${event.image}')"></div>
                <div class="p-6 lg:col-span-2 flex flex-col">
                    <div class="flex-grow">
                        <span class="text-sm text-light-green">${event.date} • ${event.time}</span>
                        <h3 class="text-2xl font-bold my-2">${event.event}</h3>
                        <p class="text-gray-400 mb-2"><i class="fas fa-map-marker-alt text-turquoise mr-2"></i> ${event.location}</p>
                        <p class="text-gray-300">${event.description}</p>
                    </div>
                    <div class="flex justify-between items-center mt-4">
                        <span class="text-xl font-bold text-cyan-blue">${event.price}</span>
                        <button class="btn-participate px-6 py-2 rounded-full bg-gradient-to-r from-light-green to-cyan-blue text-deep-black font-bold hover:opacity-90 transition">
                            Participer
                        </button>
                    </div>
                </div>
            `;
            eventsContainer.appendChild(eventCard);
        });

        // Ajouter des écouteurs d'événements pour les boutons "Participer"
        document.querySelectorAll('.btn-participate').forEach(button => {
            button.addEventListener('click', function() {
                // Ici vous pourriez rediriger vers une page de réservation ou ouvrir un modal
                alert('Fonctionnalité de réservation à implémenter');
            });
        });
    }

    // Gestion du formulaire de contact
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Récupération des données du formulaire
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData);
            
            // Ici vous enverriez les données à votre backend
            console.log('Données du formulaire:', data);
            
            // Simulation d'envoi réussi
            alert('Merci pour votre message! Nous vous contacterons bientôt.');
            contactForm.reset();
        });
    }

    // Initialisation
    displayNews();
    displayEvents();
});