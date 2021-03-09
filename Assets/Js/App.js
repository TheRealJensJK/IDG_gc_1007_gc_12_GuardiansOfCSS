// Credits: Sivert Gullberg Hansen

window.addEventListener('load', function () {
    loadPage();
});

function addByClassName(name, index, className) {
    document.getElementsByClassName(name)[index].classList.add(className);
}

function removeByClassName(name, index, className) {
    document.getElementsByClassName(name)[index].classList.remove(className);
}

function toggleByClassName(name, index, className) {
    document.getElementsByClassName(name)[index].classList.toggle(className);
}

function addById(name, className) {
    document.getElementById(name).classList.add(className);
}

function removeById(name, className) {
    document.getElementById(name).classList.remove(className);
}

function toggleById(name, className) {
    document.getElementById(name).classList.toggle(className);
}

function loadPage() {
    addById("preloader", "fadeOut");
    addByClassName("introduction__title", 0, "anim_title");
    addByClassName("introduction__author", 0, "anim_author");
    addByClassName("introduction__author", 1, "anim_author");
    addByClassName("introduction__information", 0, "anim_information");
    addByClassName("introduction__information", 1, "anim_information");
    addByClassName("introduction__arrow", 0, "anim_arrow");
}

function slide0() {
    scrollDelay = 10000;
    removeById("int0", "fadeOut");
    removeById("int1", "fadeOut");
    removeById("slide0", "fadeIn");
    addById("slide0", "fadeOut");

    // Slide0
    setTimeout(function () {
        toggleByClassName("introduction__title", 0, "anim_title");
        toggleByClassName("introduction__author", 0, "anim_author");
        toggleByClassName("introduction__author", 1, "anim_author");
        toggleByClassName("introduction__information", 0, "anim_information");
        toggleByClassName("introduction__information", 1, "anim_information");
        toggleByClassName("introduction__arrow", 0, "anim_arrow");
    }, 1000);
    // Slide1
    setTimeout(function () {
        toggleById("scene0__people", "anim_people");
        document.getElementById("scene0").getElementsByClassName("slide__narration")[0].classList.toggle("fadeIn");
    }, 1000);
}

function slide1() {
    scrollDelay = 3000;
    addById("int0", "fadeOut");
    addById("int1", "fadeOut");
    removeById("slide0", "hidden");
    addById("slide0", "fadeIn");

    // Slide0
    setTimeout(function () {
        toggleByClassName("introduction__title", 0, "anim_title");
        toggleByClassName("introduction__author", 0, "anim_author");
        toggleByClassName("introduction__author", 1, "anim_author");
        toggleByClassName("introduction__information", 0, "anim_information");
        toggleByClassName("introduction__information", 1, "anim_information");
        toggleByClassName("introduction__arrow", 0, "anim_arrow");
    }, 1000);

    // Slide1
    setTimeout(function () {
        toggleById("scene0__people", "anim_people");
        document.getElementById("slide0").getElementsByTagName("p")[0].classList.add("fadeIn");
    }, 1000);
}