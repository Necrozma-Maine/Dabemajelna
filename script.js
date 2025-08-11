document.addEventListener('DOMContentLoaded', function () {
    const profileWrapper = document.querySelector('.profile-wrapper');
    const particleCount = 40;

    //create particles
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');

        // Randomize position and size
        const size = Math.random() * 10 + 5; // Size between 5px and 15px
        const posX = Math.random() * 120;
        const posY = Math.random() * 120;
        const duration = Math.random() * 6 + 4; // Random delay for animation
        const delay = Math.random() * 5; // Random duration between 4s and 10s
        const opacity = Math.random() * 0.5 + 0.1; // Random angle for rotation

        // Set styles
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${posX}%`;
        particle.style.top = `${posY}%`;
        particle.style.animationDuration = `${duration}s`;
        particle.style.animationDelay = `${delay}s`;
        particle.style.opacity = opacity;
        particle.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 70%)`; // Random color
        particle.style.animation = `float ${Math.random() * 10 + 5}s infinite ease-in-out`;
        profileWrapper.appendChild(particle);
    }

    //floating particles animation
    document.querySelectorAll('.particle').forEach(particle => {
        const keyframes = `
            @keyframes float-${Math.random().toString(36).substring(2, 15)} {
                0% {
                    transform: translate(0, 0);
                }
                    50% {
                    transform: translate(${Math.random() * 40 - 20}px, ${Math.random() * 40 - 20} px);
                    }

                100% {
                    transform: translate(0, 0);
                }
            }
        `;

        const styleSheet = document.createElement("style");
        styleSheet.textContent = keyframes;
        document.head.appendChild(styleSheet);

        particle.style.animation = `float-${styleSheet.sheet.cssRules[0].name.match(/-(\w+)/)[1]} ${Math.random() * 10 + 5}s infinite ease-in-out`;

    });


    // Hamburger menu toggle
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.querySelector('.nav-links');
    hamburger.addEventListener('click', function () {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });



    // Carousel logic
    const projectImages = [
        {
            images: [
                "images/DOST-NAST.png",
                "images/DOST-NAST-2.png",
                "images/DOST-NAST-3.png",
                "images/DOST-NAST-4.png"
            ]
        },
        {
            images: [
                "images/project2.png",
                "images/project2-2.png"
            ]
        }
        // Add more projects as needed
    ];

    const projectCards = document.querySelectorAll('.project-card .project-img');
    const carouselModal = document.getElementById('carousel-modal');
    const carouselImg = document.getElementById('carousel-img');
    const carouselClose = document.querySelector('.carousel-close');
    const carouselPrev = document.getElementById('carousel-prev');
    const carouselNext = document.getElementById('carousel-next');

    let currentProject = 0;
    let currentImage = 0;

    projectCards.forEach((img, idx) => {
        img.addEventListener('click', () => {
            currentProject = idx;
            currentImage = 0;
            showCarouselImage();
            carouselModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });

    function showCarouselImage() {
        carouselImg.src = projectImages[currentProject].images[currentImage];
    }

    carouselPrev.addEventListener('click', () => {
        currentImage = (currentImage - 1 + projectImages[currentProject].images.length) % projectImages[currentProject].images.length;
        showCarouselImage();
    });

    carouselNext.addEventListener('click', () => {
        currentImage = (currentImage + 1) % projectImages[currentProject].images.length;
        showCarouselImage();
    });

    carouselClose.addEventListener('click', () => {
        carouselModal.classList.remove('active');
        document.body.style.overflow = '';
    });

    carouselModal.addEventListener('click', (e) => {
        if (e.target === carouselModal) {
            carouselModal.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    
});