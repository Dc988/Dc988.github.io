// ADD CONTCT INFO
function addContactInfo(name, url, icon, otherClass) {
    // añade informacion en header
    header_contact.innerHTML += `<a aria-label="${name}" href="${url}" target="_blank" class="ml-3 btn ${otherClass}"><i class="${icon}"></i></a>`;
    // añade informacion en footer
    footer_contact.innerHTML += `<a href="${url}" aria-label="${name}" target="_blank"><i class="${icon}" ></i></a>`
}

// ADD SKILL
function addSkill(title, image, prom) {
    skill_content.innerHTML +=
        `<div class="item">
        <div class="icon">
            <i class=" ${image}"></i>
        </div>
        <div class="skill-info">
            <h6 class="skill-name">${title}</h6>
            <h6 class="skill-per">${prom}</h6>
        </div>
    </div>`;
}

// PROYECT
class Portafolio {

    constructor() {
        this.id = "";
        this.category = "";
        this.title = "";
        this.descripcion = "";
        this.tec = Array();
        this.linkCode = "";
        this.features = Array();
        this.year = ""
        this.filter = "";
        this.filterItems = new Set();
        this.carrusel = Array();
        this.captions = Array();

        this.dot = ["bg-primary", "bg-secondary", "bg-success", "bg-info", "bg-warning", "bg-danger"];
        this.projectData = Array();

    }

    clear() {
        this.id = "";
        this.category = "";
        this.title = "";
        this.descripcion = "";
        this.tec = Array();
        this.linkCode = "";
        this.features = Array();
        this.year = ""
        this.filter = "";
        this.carrusel = Array();
        this.captions = Array();
    }

    setLinkCode(link) {
        this.linkCode = link;
        return this;

    }

    setCategory(category) {
        this.category = category;
        return this;
    }

    setId(id) {
        this.id = id;
        return this;
    }
    setTitle(title) {
        this.title = title;
        return this;
    }

    setYear(year) {
        this.year = year;
        return this;
    }

    setDescripcion(desc) {
        this.descripcion = desc;
        return this;
    }

    setFilter(filter) {
        this.filter = filter;
        this.filterItems.add(filter);
        return this;
    }

    setBtnFilter() {
        this.filterItems.forEach(item => {
            var style = this.dot[Math.floor(Math.random() * this.dot.length)];

            btn_filter.innerHTML += `
            <button class="filter-btn px-4 py-2 rounded-pill fw-medium" data-filter="${item}">
                <span class="category-dot ${style}"></span> ${item}
            </button>
            `;
        });
    }

    addTec(item) {

        this.tec.push(item);
        return this;
    }

    addModule(module) {
        this.features.push(module);

        return this;
    }

    addCarrusel(route, caption) {
        this.carrusel.push(route);
        this.captions.push(caption)
        return this;
    }

    getData(id) {
        return this.projectData[id] || []
    }

    push() {

        var id = this.projectData.length;

        var tec = this.tec.map((e) => `<span class="project-tech">${e}</span>`).join(" ");

        // creamos el contenedor
        const card = document.createElement("div");
        // agregamos el filtro
        card.setAttribute("data-category", this.filter);
        // agregamos clases
        card.classList.add("col", "project-card", "fade-in");

        // agregamos cod html
        card.innerHTML = `
        <div class="overflow-hidden">
            <img src="${this.carrusel[0]}"
                alt="img carrucel ${this.id}"
                class="project-image"
                onerror="this.src='img/carouserl_proyectos/default.jpeg'">
        </div>
        <div class="p-4">
            <div class="d-flex justify-content-between align-items-center mb-2">
                <h3 class="fs-5 fw-bold">${this.title}</h3>
                ${tec}
            </div>

            <div class="d-flex justify-content-between align-items-bottom">
                <span class="fs-7 text-white-50">${this.year}</span>
                <button class="btn custom-text view-project" data-project="${id}">
                    Ver detalles →
                </button>
            </div>
        </div>`

        projects_grid.appendChild(card);

        this.projectData.push(
            {
                title: this.title,
                category: this.category,
                tech: this.tec,
                linkCode: this.linkCode,
                description: this.descripcion,
                features: this.features,
                images: this.carrusel,
                captions: this.captions
            }
        )

        this.clear();
    }
}
//PORTAFOLIO
const portfolio = new Portafolio();
document.addEventListener('DOMContentLoaded', function () {

    // CONTACT INFO
    // GITHUB
    addContactInfo("Github", "https://github.com/Dc988", "fa-brands fa-github", "btn-danger")
    // LINKIN
    addContactInfo("Linkedin", "https://www.linkedin.com/in/dicmar-andres-castro-dominguez-5a991930b", "fa-brands fa-linkedin-in", "btn-primary")
    // WHATSAPP
    addContactInfo("Whatsapp", "https://wa.me/573043821671", "fa-brands fa-whatsapp", "btn-success")

    //HABILIDADES
    addSkill("HTML", "fa-brands fa-html5", "intermedio");
    addSkill("CSS", "fa-brands fa-css3-alt", "intermedio");
    addSkill("JAVASCRIPT", "fa-brands fa-js", "intermedio");
    addSkill("BOOTSTRAP", "fa-brands fa-bootstrap", "intermedio");
    addSkill("PHP", "fa-brands fa-php", "intermedio");
    addSkill("PYTHON", "fa-brands fa-python", "intermedio");
    addSkill("EXCEL VBA", "fa-solid fa-file-excel", "intermedio");
    addSkill("REACT", "fa-brands fa-react learning", "aprendiendo");

    
    

    //2. GESTOR NOTAS DE SENA
    portfolio.setTitle("GESTOR DE NOTAS SENA")
        .setId("carousel_proyect_notas_sena")
        .setFilter("Python")
        .setDescripcion("Proyecto desarrollado en la etapa de formación del sena que me permitió gestionar las notas de cada evidencia")

        .addModule("Almacenar información en una BBDD.")
        .addModule("Interfaz de filtrado.")
        .addModule("Formulario de ingreso y actualización la cual permite abrir carpetas y archivos.")
        .addModule("Panel de configuración en la que se puede importar y exportar información de un archivo XLSX.")
        .addModule("Asignar una ruta de carte en la que se almacenan evidencias.")
        .addModule("Interfaz que permite establecer que columnas se visualizan en la tabla.")

        .addTec("Python")
        .setYear("2025")
        .setLinkCode("https://github.com/Dc988/Gestion_Notas.git")

        .addCarrusel("img/carouserl_proyectos/gestor_notas/item-0.jpg", "")
        .addCarrusel("img/carouserl_proyectos/gestor_notas/item-1.jpg", "Interfaz Principal")
        .addCarrusel("img/carouserl_proyectos/gestor_notas/item-2.jpg", "Panel de Configuraciones")
        .addCarrusel("img/carouserl_proyectos/gestor_notas/item-3.jpg", "Interfaz para seleccionar columnas visibles en el table")
        .addCarrusel("img/carouserl_proyectos/gestor_notas/item-4.jpg", "Formulario de gestión de notas")
        .addCarrusel("img/carouserl_proyectos/gestor_notas/item-5.jpg", "Interfaz de filtrado")
    .push();

    portfolio.setTitle("Sistema de Captura de Información Médica")
        .setId("carousel_proyect_202")
        .setFilter("Excel")
        .setDescripcion("Este archivo de Excel VBA es un innovador formulario diseñado para la captura eficiente de información médica de pacientes, el cual permite optimizar la gestión de datos médicos, mejorando la atención y el seguimiento de los pacientes.")

        .addModule("Clasifica a los pacientes en diversos programas de salud según su edad y sexo, alineándose con la Resolución 202.")
        .addModule("Busca información en base al id del paciente")
        .addModule("Panel de configuraciones que permite modificar informaciones predeterminadas")
        .addModule("Exportar la informacón en archivo XLSX")

        .addTec("Excel")
        .setYear("2025")
        .setLinkCode("")
        .addCarrusel("img/carouserl_proyectos/Resolución 202/item-0.jpg", "")
        .addCarrusel("img/carouserl_proyectos/Resolución 202/item-1.PNG", "Interfaz Principal")
        .addCarrusel("img/carouserl_proyectos/Resolución 202/item-4.PNG", "Panel de Configuraciones")
        .addCarrusel("img/carouserl_proyectos/Resolución 202/item-2.PNG", "Panel de Configuraciones, apartado para editar información de los combobox")
        .addCarrusel("img/carouserl_proyectos/Resolución 202/item-3.PNG", "Interfaz para diligenciar información de los programas hospitalarios.")
    .push();

    // agregar btns de filtrado
    portfolio.setBtnFilter();
});
