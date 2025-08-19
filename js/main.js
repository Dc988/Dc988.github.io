// ADD CONTCT INFO
function addContactInfo(name,url, icon, otherClass){
    // añade informacion en header
    header_contact.innerHTML += `<a aria-label="${name}" href="${url}" target="_blank" class="ml-3 btn ${otherClass}"><i class="${icon}"></i></a>`;
    // añade informacion en footer
    footer_contact.innerHTML += `<a href="${url}" aria-label="${name}" target="_blank"><i class="${icon}" ></i></a>`
}

// ADD SKILL
function addSkill(title, image,prom) {
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

// add img gallery


// PROYECT
class Portafolio {

    constructor() {
        this.title = "";
        this.descripcion = "";
        this.filter = "";
        this.filterItems= new Set();
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
        this.filterItems.add(filter);
        return this;
    }

    setBtnFilter(){
        this.filterItems.forEach( item=>{
            btn_filter.innerHTML+= `<button class="btn btn-primary" data-filter=".${item}">${item}</button>`;
        });
    }

    addTec(tec, icon) {

        this.tec.push([tec, icon]);
        return this;
    }

    addCarrusel(c) {
        this.carrusel.push(c);
        return this;
    }

    push() {

        var carousel_img = this.carrusel.map((e, i) =>
            `<a data-fancybox="gallery_${this.filter}" href="${e}">
                    <img src="${e}" alt="${this.title}_${i}"/>
                </a>`).join(" ");

        var tec = this.tec.map((e) => `<h5><span class='m-1 px-3 badge rounded-pill text-bg-secondary'>${e[0]}</span></h5>`).join(' ');

        var data_caption = `
        <div class='col-md-5 m-auto'>
            <div class='description'>
                <p class='text-desc'>${this.descripcion}</p>
            </div>
            <div class='tecno'>
                <h3 class='modal-title fs-5'>Tecnologías Utilizadas:</h3>
                <div class='d-flex justify-content-start'>
                    ${tec}
                </div>
            </div>
        </div>`;

        var tec = this.tec.map((e) => ` <i class="${e[1]}"></i>`).join(" ");
        const card = document.createElement("div");
        card.classList.add('grid-item', 'wow', 'zoomIn','m-3',this.filter);
        card.innerHTML =`
        <div class="img-place" data-src="${this.carrusel[0]}" data-fancybox="gallery_${this.filter}" data-caption="${data_caption}" >
            <img src="${this.carrusel[0]}" alt="">
            <div class="img-caption">
                <h5 class="fg-theme">${this.title}</h5>
                <div class="img-tec">
                ${tec}
                </div>
            </div>
            <div style="display:none">
                ${carousel_img}
            </div>
        </div>`

        portfolio_container.appendChild(card);
        this.clear();

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
addSkill("HTML", "fa-brands fa-html5","intermedio");
addSkill("CSS", "fa-brands fa-css3-alt","intermedio");
addSkill("JAVASCRIPT", "fa-brands fa-js","intermedio");
addSkill("BOOTSTRAP", "fa-brands fa-bootstrap","intermedio");
addSkill("PHP", "fa-brands fa-php","intermedio");
addSkill("PYTHON", "fa-brands fa-python","intermedio");
addSkill("EXCEL VBA", "fa-solid fa-file-excel","intermedio");

//PORTAFOLIO
var portfolio = new Portafolio();

//1. GESTOR PACIENTES EME COLOMBIA VBA
portfolio.setTitle("GESTOR PACIENTES")
    .setId("carousel_proyect_eme_excel")
    .setFilter("VBA_EXCEL")
    .setDescripcion("Es un aplicativo de Excel, formulario de captura de información para siniestros SOAT, en base a la información solicitada por siras, creación de una base de datos para control y seguimiento de auditoría, facturación, pagos y glosas")

    .addTec("EXCEL","fa-solid fa-file-excel color-7")

    .addCarrusel("img/carouserl_proyectos/eme_excel/item-2.jpg")
    .addCarrusel("img/carouserl_proyectos/eme_excel/item-1.jpg")
    .addCarrusel("img/carouserl_proyectos/eme_excel/item-3.jpg")
    .addCarrusel("img/carouserl_proyectos/eme_excel/item-4.jpg")
    .addCarrusel("img/carouserl_proyectos/eme_excel/item-5.jpg")
    .addCarrusel("img/carouserl_proyectos/eme_excel/item-6.jpg")
    .push();
    
// agregar btns de filtrado
portfolio.setBtnFilter();
new WOW().init();
