// ADD CONTCT INFO
function addContactInfo(name,url, icon, otherClass){
    header_contact.innerHTML += `<a aria-label="${name}" href="${url}" target="_blank" class="ml-3 btn ${otherClass}"><i class="${icon}"></i></a>`;
    footer_contact.innerHTML += `<a href="${url}" aria-label="${name}" target="_blank"><i class="${icon}" ></i></a>`
}
// ADD SKILL

function addSkill(title, image,prom) {
    skill_content.innerHTML +=
        `<div class="item">
        <div class="icon">
            <i class="fa-brands ${image} fa-xl"></i>
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
        this.title = "";
        this.descripcion = "";
        this.filter = "";
        this.id = "";
        this.tec = Array();
        this.carrusel = Array();
    }

    clear(){
        this.title = "";
        this.descripcion = "";
        this.filter = "";
        this.id = "";
        this.tec = Array();
        this.carrusel = Array();
    }

    setId(id) {
        this.id = id;
        return this;
    }
    setTitle(title) {
        this.title = title;
        return this;
    }

    setDescripcion(desc) {
        this.descripcion = desc;
        return this;
    }

    setFilter(filter) {
        this.filter = filter;
        return this;
    }

    addTec(tec) {
        this.tec.push(tec);
        return this;
    }

    addCarrusel(c) {
        this.carrusel.push(c);
        return this;
    }

    push() {

        var tec = this.tec.map((e) => `<h5><span class="m-1 px-3 badge rounded-pill text-bg-secondary">${e}</span></h5>`).join(" ");

        var btn_indicators = this.carrusel.map((e, i) => `<button class="active" type="button" data-bs-target="#${this.id}" data-bs-slide-to="${i}" aria-label="Slide ${i + 1}"></button>`).join(" ");
        var carousel_img = this.carrusel.map((e, i) =>
            `<div class="carousel-item ${i==0?"active":""}">
                <!--<a href="${e}" data-lightbox="${this.id}" >-->
                    <img src="${e}" class="d-block w-100"
                        alt="item-${i}.png">
            <!-- </a>-->
            </div>`).join(" ");

        portfolio_container.innerHTML +=
            `<div class="row portfolio-item m-2">
                
                <h2 class="text-center font-weight-bold portafolio-title my-3">${this.title}</h2>
                <div id="${this.id}" class="carousel slide col-md-7" data-bs-theme="dark">
                    <div class="carousel-indicators">
                        ${btn_indicators}
                    </div>
                    <div class="carousel-inner">
                        ${carousel_img}
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#${this.id}"
                        data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#${this.id}"
                        data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
                <div class="col-md-5 ">
                    <div class="description">
                        <h3 class="modal-title fs-5">Descripción:</h3>
                        <p class="text-desc">${this.descripcion}</p>
                    </div>
                    <div class="tecno">
                        <h3 class="modal-title fs-5">Tecnologías Utilizadas:</h3>
                        <div class="d-flex justify-content-start">
                            ${tec}
                        </div>
                    </div>

                    <!-- <div class="modulos">
                        <h2 class="modal-title fs-5" >Módulos y Funcionalidades:</h2>
                        <ul class="mb-4">
                            <li class="m-1" ></li>
                        </ul>
                    </div>-->
                </div>

            
        </div>`

    }
}


// CONTACT INFO
// GITHUB
addContactInfo("Github","https://github.com/Dc988","fa-brands fa-github","btn-danger")
// LINKIN
addContactInfo("Linkedin","https://www.linkedin.com/in/dicmar-andres-castro-dominguez-5a991930b","fa-brands fa-linkedin-in","btn-primary")
// WHATSAPP
addContactInfo("Whatsapp","https://wa.me/573043821671","fa-brands fa-whatsapp","btn-success")

//HABILIDADES
addSkill("HTML", "fa-html5","intermedio");
addSkill("CSS", "fa-css3-alt","intermedio");
addSkill("JAVASCRIPT", "fa-js","intermedio");
addSkill("BOOTSTRAP", "fa-bootstrap","intermedio");
addSkill("PHP", "fa-php","intermedio");
addSkill("PYTHON", "fa-python","intermedio");
addSkill("EXCEL VBA", "fa fa-file-xlsx","intermedio");

//PORTAFOLIO
var portfolio = new Portafolio();

//1. GESTOR PACIENTES EME COLOMBIA VBA
portfolio.setTitle("GESTOR PACIENTES EME COLOMBIA VBA")
    .setId("carousel_proyect_eme_excel")
    .setFilter("excel")
    .setDescripcion("Es un aplicativo de Excel, formulario de captura de información para siniestros SOAT, en base a la información solicitada por siras, creación de una base de datos para control y seguimiento de auditoría, facturación, pagos y glosas")

    .addTec("EXCEL")
    .addTec("MACROS")

    .addCarrusel("img/carouserl_proyectos/eme_excel/item-2.jpg")
    .addCarrusel("img/carouserl_proyectos/eme_excel/item-1.jpg")
    .addCarrusel("img/carouserl_proyectos/eme_excel/item-3.jpg")
    .addCarrusel("img/carouserl_proyectos/eme_excel/item-4.jpg")
    .addCarrusel("img/carouserl_proyectos/eme_excel/item-5.jpg")
    .addCarrusel("img/carouserl_proyectos/eme_excel/item-6.jpg")
    .push();

