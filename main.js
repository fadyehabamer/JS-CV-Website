let maincolors = localStorage.getItem("main_colors");
if (maincolors !== null) {
    document.documentElement.style.setProperty("--main--color", localStorage.getItem("main_colors"))
}

// nav bar toggle
var ul_nav = document.querySelector(".links");
var a_nav = document.querySelectorAll(".links li a");
a_nav.forEach(element => {
    element.addEventListener("click", function () {
        ul_nav.querySelector(".active").classList.remove("active")
        element.classList.add("active")
    })
})




//settings box toggle open and close
const settingstoggle = document.querySelector(".toggle-settings")
settingstoggle.onclick = function () {
    this.querySelector(".fa-cog").classList.toggle("fa-spin");
    const isopen = document.querySelector(".settings-box").classList.toggle("open")
    this.setAttribute("aria-expanded", isopen)
}



//switch colors
const colorslist = document.querySelectorAll(".colors-list li")
for (let i = 0; i < colorslist.length; i++) {
    colorslist[i].addEventListener("click", (e) => {
        document.documentElement.style.setProperty("--main--color", e.target.dataset.color);
        localStorage.setItem("main_colors", e.target.dataset.color);

        e.target.parentElement.querySelectorAll(".active").forEach(element => {
            element.classList.remove("active")
        });
        e.target.classList.add("active")
    });
}


// switch random background 

let backgroundoption = true
let backgroundinterval;

const randomback = document.querySelectorAll(".random-background span ")
for (let i = 0; i < randomback.length; i++) {
    randomback[i].addEventListener("click", (e) => {
        e.target.parentElement.querySelectorAll(".active").forEach(element => {
            element.classList.remove("active")
        });
        e.target.classList.add("active")

        if (e.target.dataset.option === "yes") {
            backgroundoption = true;
            randomize()
        } else {
            backgroundoption = false
            clearInterval(backgroundinterval)
        }

    });
}

function randomize() {
    if (backgroundoption === true) {
        // clear any running timer so clicking "Yes" repeatedly doesn't stack intervals
        clearInterval(backgroundinterval)
        backgroundinterval = setInterval(function () {
            var landingpage = document.querySelector(".landing-page")
            var landingimgs = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"]
            let random = Math.floor(Math.random() * landingimgs.length)
            landingpage.style.backgroundImage = `url(imgs/${landingimgs[random]})`;
        }, 5000)
    }
}


// progress animation
let ourskills = document.querySelector(".skills");
window.onscroll = function () {

    let ourskillsoffset = ourskills.offsetTop;
    let ourskillsouterheight = ourskills.offsetHeight;
    let windowheight = window.innerHeight;
    let windowscrolltop = window.pageYOffset;

    if (windowscrolltop >= (ourskillsoffset + ourskillsouterheight - windowheight)) {
        let allskills = document.querySelectorAll(".skill-box .skillprogress span")
        for (let i = 0; i < allskills.length; i++) {
            allskills[i].style.width = allskills[i].dataset.progress
        }
    }
}


// pop up gallery
let ourgallery = document.querySelectorAll(".gallery .img-box img")
ourgallery.forEach(img => {
    img.addEventListener("click", (e) => {

        //craete overlay
        let overlay = document.createElement("div");
        overlay.className = "pop-up-overlay"

        document.body.appendChild(overlay)

        let popup_box = document.createElement("div")
        popup_box.className = "popup_box"

        let pop_img = document.createElement("img")
        pop_img.src = img.src;

        popup_box.appendChild(pop_img);
        document.body.appendChild(popup_box)


        //close span 
        let closebutton = document.createElement("span")
        let closebuttontext = document.createTextNode("X")
        closebutton.appendChild(closebuttontext)

        closebutton.className = "close-button"
        closebutton.setAttribute("role", "button")
        closebutton.setAttribute("tabindex", "0")
        closebutton.setAttribute("aria-label", "Close image")
        popup_box.appendChild(closebutton)
        closebutton.focus()

    })
})

//close pop up
document.addEventListener("click", function (e) {
    if (e.target.className == "close-button") {
        e.target.parentElement.remove()
        document.querySelector(".pop-up-overlay").remove()
    }
})




// smoooth scroll 
const bullets = document.querySelectorAll(".nav-bullets .bullet")
const alllinks = document.querySelectorAll(".links a")


function scroll(elements) {
    elements.forEach(ele => {
        // read the target from the element the listener is on (not e.target, which can be
        // a child such as the bullet tooltip) and skip links without data-section (Home)
        if (!ele.dataset.section) return;
        ele.addEventListener("click", () => {
            const target = document.querySelector(ele.dataset.section);
            if (target) {
                target.scrollIntoView({
                    behavior: "smooth"
                })
            }
        })
    });
}
scroll(bullets);
scroll(alllinks);


//show hide bullets
let optionbullets = document.querySelector(".showbullets")
let bulletsspan = document.querySelectorAll(".showbullets span");
let bulletscontainer = document.querySelector(".nav-bullets")

bulletsspan.forEach(span => {
    span.addEventListener("click", (e) => {
        optionbullets.querySelector(".active").classList.remove("active")
        span.classList.add("active")
        if (span.dataset.option === "show") {
            bulletscontainer.style.display = "block";
        } else {
            bulletscontainer.style.display = "none";
        }
    })
})


//toggle menu

let tooglebutton = document.querySelector(".toggle-menu")
let menulinks = document.querySelector(".links");

tooglebutton.onclick = function (e) {
    e.stopPropagation()
    this.classList.toggle("menu-active")
    menulinks.classList.toggle("open")

}

//click anywhere outside menu and toggle button
document.addEventListener("click", (e) => {
    if (e.target !== tooglebutton && e.target !== menulinks) {
        tooglebutton.classList.remove("menu-active")
        menulinks.classList.remove("open")
    }
})


// keyboard support: let Enter / Space activate the div/span/li controls marked role="button"
document.addEventListener("keydown", (e) => {
    const control = e.target.closest && e.target.closest('[role="button"]')
    if (control && (e.key === "Enter" || e.key === " ")) {
        e.preventDefault()
        control.click()
    }
    // Escape closes the gallery pop-up
    if (e.key === "Escape") {
        const closebutton = document.querySelector(".popup_box .close-button")
        if (closebutton) closebutton.click()
    }
})


// typed.js
var options = {
    strings: ["Creative", "Powerful", "Talented"],
    typeSpeed: 80,
    fadeOut: true,
    loop: true,
    showCursor: true
};

var typed = new Typed('.element', options);