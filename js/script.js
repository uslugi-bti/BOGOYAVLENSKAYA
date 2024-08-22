if (document.querySelector(".main__devimg")) {
    function padding() {
        let windowWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        let containerWidth = document.querySelector(".container").clientWidth - 30;
        let padding;
        if (windowWidth >= 767) {
            padding = (windowWidth - containerWidth) / 2;
            document.querySelector(".main__devimg").style.paddingRight = padding + "px";
            document.querySelector(".main-help__title").style.marginRight = padding + "px";
            document.querySelector(".main-help__list").style.marginRight = padding + "px";
            document.querySelector(".main-devimg__phone").style.marginRight = padding + "px";
        } else {
            document.querySelector(".main__devimg").style.paddingRight = 0;
            document.querySelector(".main-help__title").style.marginRight = 15 + "px";
            document.querySelector(".main-help__list").style.marginRight = 15 + "px";
            document.querySelector(".main__devimg").style.marginLeft = 0;
            document.querySelector(".main-help__title").style.marginLeft = 15 + "px";
            document.querySelector(".main-help__list").style.marginLeft = 15 + "px";
        }
        if (windowWidth < 970) {
            document.querySelector(".main__develepment").style.marginRight = padding + "px";
        } else {
            document.querySelector(".main__develepment").style.marginRight = 0 + "px";
            document.querySelector(".main__develepment").style.marginLeft = 0 + "px";
        }
    }
    padding();
    window.addEventListener("resize", padding);
}
if (document.querySelector(".blog")) {
    function paddingBlog() {
        let windowWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        let containerWidth = document.querySelector(".container").clientWidth - 30;
        let padding;
        if (windowWidth >= 767) {
            padding = (windowWidth - containerWidth) / 2;
            document.querySelector(".blog__body").style.marginRight = padding + "px";
        } else {
            document.querySelector(".blog__body").style.marginRight = 15 + "px";
        }
    }
    paddingBlog();
    window.addEventListener("resize", paddingBlog);
}

function headerMargin () {
    const first = document.querySelector(".first");
    const header = document.querySelector(".header");
    if (first) {
        first.style.marginTop = header.clientHeight + "px";
    }
}
headerMargin();
window.addEventListener("resize", headerMargin);

const body = document.querySelector("body");
const headerBody = document.querySelector(".header__body");
const headerMenu = document.querySelector(".header__menu");
const headerLinks = document.querySelectorAll(".header__item>a");
for (let i = 0; i < headerLinks.length; i++) {
    headerLinks[i].addEventListener("click", function (event) {
        //event.preventDefault();
        body.classList.remove("header-lock");
        headerBody.classList.remove("active");
        headerMenu.classList.remove("active");
    });
}

headerMenu.addEventListener("click", function () {
    body.classList.toggle("header-lock");
    headerBody.classList.toggle("active");
    headerMenu.classList.toggle("active");
});

const servicesButton = document.querySelector(".header__item>a#services-button");
const aboutButton = document.querySelector(".header__item>a#about-button");

servicesButton.addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = this.getAttribute('href');
});
aboutButton.addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = this.getAttribute('href');
});
const signUp = document.querySelector(".main-develepment__link>a");
const formBlock = document.querySelector(".sign");
if (signUp) {
    signUp.addEventListener("click", function (event) {
        event.preventDefault();
        formBlock.scrollIntoView({ behavior: 'smooth' });
    });
}

const orderButton = document.querySelectorAll(".pricing-item__button>button");
const priceTitle = document.querySelectorAll(".pricing-item__title>h1");
const orderForm = document.querySelectorAll(".sign");
const request = document.querySelectorAll(".sign-form__input>textarea");
const titleToForm = document.querySelector(".pricing__title>h1");
const titleLevel = document.querySelectorAll(".pricing-item__title>h1");

if (orderButton.length > 0 && orderForm.length > 1) {
    for (let i = 0; i < orderButton.length; i++) {
        orderButton[i].addEventListener("click", function () {
            orderForm[1].scrollIntoView({ behavior: 'smooth' });
            let result = titleToForm.innerHTML.split(" ").slice(2).join(" ");
            request[1].value = `${result.charAt(0).toUpperCase() + result.slice(1)} (${titleLevel[i].innerText})`;
        });
    }
}
