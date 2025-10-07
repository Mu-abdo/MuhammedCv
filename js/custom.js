// Menu links
let getAbout = document.getElementById("getAbout");
let getResume = document.getElementById("getResume");
let getContact = document.getElementById("getContact");
let getPortfolio = document.getElementById("getPortfolio");
let getmySkills = document.getElementById("getmySkills");


// Sections
let about = document.getElementById("about");
let resume = document.getElementById("resume");
let contact = document.getElementById("contact");
let portfolio = document.getElementById("portfolio");
let myskills = document.getElementById("myskills");

function removeClass() {
    // Links
    getAbout.classList.remove('selected');
    getResume.classList.remove('selected');
    getContact.classList.remove('selected');
    getPortfolio.classList.remove('selected');
    getmySkills.classList.remove('selected');
    // Sections
    about.classList.remove('view');
    resume.classList.remove('view');
    contact.classList.remove('view');
    portfolio.classList.remove('view');
    myskills.classList.remove('view');
}

getAbout.addEventListener('click', function (e) {
    if (window.innerWidth > 1040) {
        e.preventDefault();
        removeClass();
        about.classList.add('view');
        getAbout.classList.add('selected');
    }

});
getResume.addEventListener('click', function (e) {
    if (window.innerWidth > 1040) {
        e.preventDefault();
        removeClass();
        resume.classList.add('view');
        getResume.classList.add('selected');
    }
})
getContact.addEventListener('click', function (e) {
    if (window.innerWidth > 1040) {
        e.preventDefault();
        removeClass();
        contact.classList.add('view');
        getContact.classList.add('selected');
    }
})
getPortfolio.addEventListener('click', function (e) {
    if (window.innerWidth > 1040) {
        e.preventDefault();
        removeClass();
        portfolio.classList.add('view');
        getPortfolio.classList.add('selected');
    }
})
getmySkills.addEventListener('click', function (e) {
    if (window.innerWidth > 1040) {
        e.preventDefault();
        removeClass();
        myskills.classList.add('view');
        getmySkills.classList.add('selected');
    }
})
