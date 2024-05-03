class ArrayManager {
    constructor() {
        this.data = Array();
    }

    addElement(element) {
        this.data.push(element);
    }

    getElements() {
        return this.data;
    }
}

class Skills extends ArrayManager {
    constructor() {
        super();
    }

    addSkill(title, image) {
        var skill = Array();
        skill["title"] = title;
        skill["img"] = image;

        this.addElement(skill);
    }
}

class Portafolio extends ArrayManager {

    constructor() {
        super();
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
        var item = Array();

        item["id"] = this.id;
        item["title"] = this.title;
        item["descripcion"] = this.descripcion;
        item["tec"] = this.tec;
        item["filter"] = this.filter;
        item["carrusel"] = this.carrusel;

        this.addElement(item);

    }





}

function createSkillItem(item) {

    skill_content.innerHTML +=
        `<div class="skill-item text-center col-md-4">
        <img src="${item.img}" alt="${item.title}" class="icon">
        <h6 class="font-weight-bold">${item.title}</h6>
    </div>`;
}

function createPortafolioItem(item) {
    var tec = item.tec.map((e) => `<h5><span class="m-1 px-3 badge rounded-pill text-bg-secondary">${e}</span></h5>`).join(" ");

    var btn_indicators = item.carrusel.map((e, i) => `<button class="active" type="button" data-bs-target="#${item.id}" data-bs-slide-to="${i}" aria-label="Slide ${i + 1}"></button>`).join(" ");
    var carousel_img = item.carrusel.map((e, i) =>
        `<div class="carousel-item ${i==0?"active":""}">
            <a href="${e}" data-lightbox="${item.id}">
                <img src="${e}" class="d-block w-100"
                    alt="item-${i}.png">
            </a>
        </div>`).join(" ");

    portfolio_container.innerHTML +=
        `<div class="row php portfolio-item m-2">
        <h2 class="text-center font-weight-bold portafolio-title my-3">${item.title}</h2>
        <div class="col-md-5 ">
            <div class="description">
                <h3 class="modal-title fs-5">Descripción:</h3>
                <p>${item.descripcion}</p>
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

        <div id="${item.id}" class="carousel slide col-md-7" data-bs-theme="dark">
            <div class="carousel-indicators">
                ${btn_indicators}
            </div>
            <div class="carousel-inner">
                ${carousel_img}
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#${item.id}"
                data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#${item.id}"
                data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    </div>`


}

//HABILIDADES
var skills = new Skills();
skills.addSkill("HTML", "img/skills/html.png");
skills.addSkill("CSS", "img/skills/css.png");
skills.addSkill("JAVASCRIPT", "img/skills/js.png");
skills.addSkill("BOOTSTARP", "img/skills/bootstrap.png");
skills.addSkill("PHP", "img/skills/php.png");
skills.addSkill("PYTHON", "img/skills/python.png");
skills.addSkill("EXCEL VBA", "img/skills/EXCEL.png");

//PORTAFOLIO
var portfolio = new Portafolio();

//1. GESTOR PACIENTES EME COLOMBIA VBA
portfolio.setTitle("GESTOR PACIENTES EME COLOMBIA VBA")
    .setId("carousel_proyect_eme_excel3")
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


//RECORRER ITEMS
skills.getElements().forEach((item) => {
    createSkillItem(item);
});

portfolio.getElements().forEach((item) => {
     createPortafolioItem(item);
});


