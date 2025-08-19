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
            title: "NAST Official Website",
            description: "Collaborated in planning and designing the official website of the National Academy of Science and Technology (NAST). Created wireframes and page layouts for core sections such as Home, About, Members, Publications, Careers, Contact Us, and Transparency. Ensured mobile responsiveness, accessibility compliance, and UI consistency. Worked closely with the development team to align design mockups with implementation for a seamless user experience.",
            description1: [
                "Designed and developed a responsive government website",
                "Implemented user-friendly navigation system",
                "Added accessibility features for improved public access",
                "Integrated scientific information database",
                "Optimized for mobile devices and different screen sizes"
            ],
            technologies: ["Laravel", "HTML5", "CSS3", "JavaScript", "PHP", "MySQL"],
            link: "https://example.com/nast",
            images: [
                "images/DOST-NAST.png",
                "images/DOST-NAST-2.png",
                "images/DOST-NAST-3.png",
                "images/DOST-NAST-4.png"
            ]
        },
        {
            title: "NAST - Annual Scientific Meeting System",
            description: "Designed a Laravel-based admin platform to manage organizational databases. Included CRUD with validation, pagination, and filtering. Added user activity logs, customizable themes, and security settings for tailored admin control.",
            description1: [
                "CRUD operations with validation and search filters",
                "Soft delete (trashbin) and recovery system",
                "Transaction and activity logs",
                "User account management with settingse",
                "Customizable themes and interface options"
            ],
            technologies: ["Laravel", "HTML5", "CSS3", "JavaScript", "PHP", "MySQL"],
            link: "https://example.com/nast",
            images: [
                "images/NAST-ASM1.png",
                "images/DOST-ASM2.png",
                "images/DOST-ASM3.png",
                "images/DOST-ASM4.png",
                "images/DOST-ASM5.png"
            ]
        },
        {
            title: "NAST - Event Management System",
            description: "Developed a web-based platform for managing events and venue bookings with advanced tracking features. Integrated QR code-based registration and attendance scanning. Enabled administrators to control users, events, and venues with built-in reporting and email automation.",
            description1: [
                "QR code-based registration and attendance tracking",
                "Role-based access control (Admin & Staff)",
                "Event and venue scheduling with conflict prevention",
                "Reporting dashboard with event statistics",
                "Automated email confirmations and notifications"
            ],
            technologies: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL"],
            link: "https://example.com/nast",
            images: [
                "images/EMS1.png",
                "images/EMS2.png",
                "images/EMS3.png",
                "images/EMS4.png",
                "images/EMS5.png"
            ]
        },
        {
            title: "Maharlika Medication Request System",
            description: "Built a patient-centered web application to streamline medication requests for barangay residents. Integrated ID verification, prescription uploads, and SMS updates for request status. Improved",
            description1: [
                "Patient registration with valid ID verification",
                "Secure medication and prescription upload",
                "Request review by nurses and doctors",
                "SMS notifications for request status",
                "Admin dashboard for health workers"
            ],
            technologies: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL"],
            link: "https://example.com/nast",
            images: [
                "images/CENTER1.png",
                "images/CENTER2.png",
                "images/CENTER3.png",
                "images/CENTER4.png",
                "images/CENTER5.png"
            ]
        },
        {
            title: "ICT - Borrower's Management System",
            description: "Developed an inventory management platform to log, track, and manage ICT equipment. Provided borrowing workflows with request and return logs. Allowed administrators to monitor assets and maintain accurate records.",
            description1: [
                "Borrowing and returning workflows",
                "Real-time equipment availability tracking",
                "Transaction history and reporting",
                "Admin controls for adding and updating inventory",
                "Database-backed system for accuracy and security"
            ],
            technologies: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL"],
            link: "https://example.com/nast",
            images: [
                "images/ICT1.png",
                "images/ICT2.png",
                "images/ICT3.png",
                "images/ICT4.png"

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
    const viewDescBtn = document.querySelector('.view-desc-btn');
    const viewImagesBtn = document.querySelector('.view-images-btn');
    const carouselImgSection = document.querySelector('.carousel-img-section');
    const carouselInfoSection = document.querySelector('.carousel-info-section');


    let currentProject = 0;
    let currentImage = 0;

    // Update the project card click handler
    projectCards.forEach((img, idx) => {
        img.addEventListener('click', () => {
            currentProject = idx;
            currentImage = 0;
            showCarouselImage();
            carouselModal.classList.add('active');
            // Show image section by default
            carouselImgSection.classList.add('active');
            carouselInfoSection.classList.remove('active');
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

    // Update close handler to reset view
    carouselClose.addEventListener('click', () => {
        carouselModal.classList.remove('active');
        document.body.style.overflow = '';
        // Reset to image view for next opening
        carouselImgSection.classList.add('active');
        carouselInfoSection.classList.remove('active');
    });

    carouselModal.addEventListener('click', (e) => {
        if (e.target === carouselModal) {
            carouselModal.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    viewDescBtn.addEventListener('click', () => {
        carouselImgSection.classList.remove('active');
        carouselInfoSection.classList.add('active');
    });

    viewImagesBtn.addEventListener('click', () => {
        carouselInfoSection.classList.remove('active');
        carouselImgSection.classList.add('active');
    });


    // Update the carousel display function
    function showCarouselImage() {
        const project = projectImages[currentProject];
        carouselImg.src = project.images[currentImage];

        // Update project info
        document.querySelector('.carousel-project-title').textContent = project.title;
        document.querySelector('.carousel-project-desc').textContent = project.description;

        const bulletPoints = project.description1.map(point => `<li>${point}</li>`).join('');
        document.querySelector('.carousel-project-desc1').innerHTML = `
        <h4 class="features-title">Key Features:</h4>
        <ul class="project-bullets">${bulletPoints}</ul>
    `;

        // Update tech badges with title and custom colors
        const techList = document.querySelector('.carousel-tech-list');
        techList.innerHTML = `
        <h4 class="features-title">Technologies Used:</h4>
        <div class="tech-badges-container">
            ${project.technologies.map(tech => {
            const colorClass = `tech-${tech.toLowerCase().replace(/[0-9.]/g, '')}`;
            return `<span class="tech-badge ${colorClass}">${tech}</span>`;
        }).join('')}
        </div>
    `;
        // Update link
        const link = document.querySelector('.carousel-link');
        link.href = project.link;
    }






});

document.addEventListener('DOMContentLoaded', function () {
    const skillItems = document.querySelectorAll('.skill-item');

    skillItems.forEach(item => {
        const progressBar = item.querySelector('.skill-progress');
        const percentageSpan = item.querySelector('.skill-percentage');
        const percentage = percentageSpan.textContent.replace('%', '');

        item.addEventListener('mouseenter', () => {
            progressBar.style.width = `${percentage}%`;
        });

        item.addEventListener('mouseleave', () => {
            progressBar.style.width = '0';
        });
    });
});