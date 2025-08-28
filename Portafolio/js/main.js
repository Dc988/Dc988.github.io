

document.addEventListener('DOMContentLoaded', function () {
    // Filtrado de proyectos
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projects = document.querySelectorAll('.project-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');

            // Actualizar botón activo
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Filtrar proyectos
            projects.forEach(project => {
                const category = project.getAttribute('data-category');

                if (filter === 'all' || filter === category) {
                    project.style.display = 'block';
                    project.classList.add('fade-in');
                } else {
                    project.style.display = 'none';
                    project.classList.remove('fade-in');
                }
            });
        });
    });



    // Animación de entrada para elementos
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });

    // Observar elementos para animación
    document.querySelectorAll('.fade-in').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    let sidebar_nicescroll_opts = {
        horizrailenabled: false,
        cursorcolor: "var(--color-5)",  // Rojo
        cursorwidth: "5px",
        cursorborder: "none",
        background: "none",   // Fondo de la barra de scroll
        cursorborderradius: "5px", // Bordes redondeados
        scrollspeed: 60,         // Velocidad de desplazamiento
        mousescrollstep: 40,     // Sensibilidad del scroll del mouse
    }

    $(".project-modal").niceScroll(sidebar_nicescroll_opts);
    // Modal de proyecto
    const viewButtons = document.querySelectorAll('.view-project');
    const modal = document.getElementById('projectModal');
    const closeModal = document.getElementById('closeModal');
    const modalContent = document.getElementById('modalContent');

    // Cerrar modal
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
        document.body.style.overflowY = 'auto';
    });

    // Cerrar modal al hacer clic fuera
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflowY = 'auto';
        }
    });

    viewButtons.forEach(button => {
        button.addEventListener('click', () => {
            const projectId = button.getAttribute('data-project');
            const data = portfolio.getData(projectId);

            // Construir contenido del modal
            imgArray = data.images;
            imgCaptions = data.captions;
            imgs = "";

            for (let index = 2; index < imgArray.length; index++) {
                imgs += (`
                <a data-fancybox="gallery" href="${imgArray[index]}" data-caption="<h5 class='p-1'>${imgCaptions[index]}</h5>">
                    <img src="${imgArray[index]}" />
                </a>
                `);
            }

            modalContent.innerHTML = `
                        <div class="mb-4">
                            <div class="w-100 rounded img-modal">
                                <a data-fancybox="gallery" data-src="${imgArray[1]}" data-caption="<h5 class='p-1'>${imgCaptions[1]}</h5>">
                                    <img src="${imgArray[0]}" />
                                </a>
                            </div>
                            <div style="display:none">
                                ${imgs}
                            </div>
                            
                        </div>
                        <h2 class="fs-2 fw-bold title text-white">${data.title}</h2>
                        <p class="fw-semibold text-white-50">${data.category}</p>
                        
                        <div class="d-flex flex-wrap gap-2 mb-2">
                            ${data.tech.map(tech => `<span class="project-tech">${tech}</span>`).join('')}
                        </div>
                        
                        <p class="text-white">${data.description}</p>
                        
                        <h3 class="fs-5 fw-bold text-white">Características</h3>
                        <ul class="row gap-2 mb-4">
                            ${data.features.map(feature => `
                                <li class=" col-12 col-md-10 d-flex align-items-center text-white-50">
                                    <svg class="me-2 text-success" style="width: 15px; height: 15px;"  fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                    </svg>
                                    ${feature}
                                </li>
                            `).join('')}
                        </ul>
                        <div class="gap-4 ${data.linkCode == "" ? "d-none" : ""}">
                            <a href="${data.linkCode}" target="_blank" class="btn btn-outline-light py-2 px-4">
                                Código Fuente
                            </a>
                        </div>
                    `;

            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });

    });

    
});

