window.onload = loadPage();

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
    addByClassName("introduction__preloader", 0, "hidden");
    addByClassName("introduction__title", 0, "anim_title");
    addByClassName("introduction__author", 0, "anim_author");
    addByClassName("introduction__author", 1, "anim_author");
    addByClassName("introduction__information", 0, "anim_information");
    addByClassName("introduction__information", 1, "anim_information");
    addByClassName("introduction__arrow", 0, "anim_arrow");
}

function slide0() {
    scrollDelay = 10000;
    removeById("int0", "hidden");
    removeById("int1", "hidden");
    addById("slide0", "hidden");

    toggleByClassName("introduction__title", 0, "anim_title");
    toggleByClassName("introduction__author", 0, "anim_author");
    toggleByClassName("introduction__author", 1, "anim_author");
    toggleByClassName("introduction__information", 0, "anim_information");
    toggleByClassName("introduction__information", 1, "anim_information");
    toggleByClassName("introduction__arrow", 0, "anim_arrow");
}

function slide1() {
    scrollDelay = 3000;
    addById("int0", "hidden");
    addById("int1", "hidden");
    removeById("slide0", "hidden");

    toggleByClassName("introduction__title", 0, "anim_title");
    toggleByClassName("introduction__author", 0, "anim_author");
    toggleByClassName("introduction__author", 1, "anim_author");
    toggleByClassName("introduction__information", 0, "anim_information");
    toggleByClassName("introduction__information", 1, "anim_information");
    toggleByClassName("introduction__arrow", 0, "anim_arrow");
}