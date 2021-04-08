// Credits: Sivert Gullberg Hansen

window.addEventListener('load', function () {
    // Starting introduction animation
    loadPage();

    // Preloading images for smoother viewing (no missing images when playing animation)
    preloadImage("Assets/Img/slide0_background--desktop.png")
    preloadImage("Assets/Img/slide0_background--mobile.png")
    preloadImage("Assets/Img/slide0_background--tablet.png")
});

// Preloader function
function preloadImage(url) {
    var img = new Image();
    img.src = url;
}

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

// Introduction animation
function loadPage() {
    addById("preloader", "fadeOut");
    addByClassName("introduction__title", 0, "anim_title");
    addByClassName("introduction__author", 0, "anim_author");
    addByClassName("introduction__author", 1, "anim_author");
    addByClassName("introduction__information", 0, "anim_information");
    addByClassName("introduction__information", 1, "anim_information");
    addByClassName("introduction__arrow", 0, "anim_arrow");
}

// Introduction-slide
function slide0() {
    scrollDelay = 9000;
    removeById("int0", "fadeOut");
    removeById("int1", "fadeOut");
    removeById("slide0", "fadeIn");
    addById("slide0", "fadeOut");

    // Introduction
    setTimeout(function () {
        toggleByClassName("introduction__title", 0, "anim_title");
        toggleByClassName("introduction__author", 0, "anim_author");
        toggleByClassName("introduction__author", 1, "anim_author");
        toggleByClassName("introduction__information", 0, "anim_information");
        toggleByClassName("introduction__information", 1, "anim_information");
        toggleByClassName("introduction__arrow", 0, "anim_arrow");
    }, 1000);
    // Slide0
    setTimeout(function () {
        // Hide people animation
        removeById("scene0__people", "anim_people");
        // Hide narrator-text
        document.getElementById("slide0").getElementsByTagName("p")[0].classList.toggle("fadeIn");
    }, 1000);
}

// Slide 0
function slide1() {
    scrollDelay = 6000;
    // Hide previous slide
    addById("int0", "fadeOut");
    addById("int1", "fadeOut");
    removeById("slide1", "fadeIn");
    addById("slide1", "fadeOut");
    // Display slide
    removeById("slide0", "fadeOut");
    removeById("slide0", "hidden");
    addById("slide0", "fadeIn");

    // Introduction
    setTimeout(() => {
        // Reset animations
        removeByClassName("introduction__title", 0, "anim_title");
        removeByClassName("introduction__author", 0, "anim_author");
        removeByClassName("introduction__author", 1, "anim_author");
        removeByClassName("introduction__information", 0, "anim_information");
        removeByClassName("introduction__information", 1, "anim_information");
        removeByClassName("introduction__arrow", 0, "anim_arrow");
    }, 1000);

    // Slide0
    setTimeout(() => {
        // Play people animation
        addById("scene0__people", "anim_people");
        // Fade in narrator-text
        document.getElementById("slide0").getElementsByTagName("p")[0].classList.add("fadeIn");
    }, 1000);

    // Slide1
    setTimeout(() => {
        removeById("scene1__eyes", "anim_eyes_fade");
        removeById("TopEye_Right", "anim_eye_blink");
        removeById("TopEye_Left", "anim_eye_blink");
        removeById("Eyeball_Right", "anim_eye_close");
        removeById("Eyeball_Left", "anim_eye_close");
        removeById("scene1__eyes", "anim_eyes_colour");
        removeByClassName("slide1__background",0, "anim_fade_background");
        document.body.classList.remove("black_background");
        // Hide narrator-text
        document.getElementById("slide1").getElementsByTagName("p")[0].classList.remove("fadeIn");
    }, 1000);
}

// Slide 1
function slide2() {
    scrollDelay = 6000;
    // Hide previous slide
    removeById("slide0", "fadeIn")
    addById("slide0", "fadeOut");
    removeById("slide2", "fadeIn")
    addById("slide2", "fadeOut");
    // Display slide
    removeById("slide1", "fadeOut");
    removeById("slide1", "hidden");
    addById("slide1", "fadeIn");

    // Slide0
    setTimeout(() => {
        // Hide people animation
        removeById("scene0__people", "anim_people");
        // Hide narrator-text
        document.getElementById("slide0").getElementsByTagName("p")[0].classList.remove("fadeIn");
    }, 1000);

    // Slide1
    setTimeout(() => {
        addById("scene1__eyes", "fadeIn");
        addById("TopEye_Right", "anim_eye_blink");
        addById("TopEye_Left", "anim_eye_blink");
        addById("Eyeball_Right", "anim_eye_close");
        addById("Eyeball_Left", "anim_eye_close");
        addById("scene1__eyes", "anim_eyes_colour");
        addByClassName("slide1__background",0, "anim_fade_background");
        document.body.classList.add("black_background");
        // Fade in narrator-text
        document.getElementById("slide1").getElementsByTagName("p")[0].classList.add("fadeIn");
    }, 1000);

    // Slide2
    setTimeout(() => {

    }, 1000);
}

// Slide 2
function slide3() {
    // Hide previous slide
    removeById("slide1", "fadeIn")
    addById("slide1", "fadeOut");
    removeById("slide3", "fadeIn")
    addById("slide3", "fadeOut");
    // Display slide
    removeById("slide2", "fadeOut");
    removeById("slide2", "hidden");
    addById("slide2", "fadeIn");

    // Slide1
    setTimeout(() => {
        removeById("slide1__eyes", "anim_people");
        // Fade in narrator-text
        document.getElementById("slide1").getElementsByTagName("p")[0].classList.remove("fadeIn");
    }, 1000);

    // Slide2
    setTimeout(() => {
        addById("slide2__smile", "anim_smile");
        // Fade in narrator-text
        document.getElementById("slide2").getElementsByTagName("p")[0].classList.add("fadeIn");
    }, 1000);

    // Slide 3
    setTimeout(() => {

    }, 1000);
}


// Slide 11
function slide12() {
    // Hide previous slide
    removeById("slide10", "fadeIn")
    addById("slide10", "fadeOut");
    removeById("slide12", "fadeIn")
    addById("slide12", "fadeOut");
    // Display slide
    removeById("slide11", "fadeOut");
    removeById("slide11", "hidden");
    addById("slide11", "fadeIn");

    // Slide10
    setTimeout(() => {
        
        document.getElementById("slide10").getElementsByTagName("p")[0].classList.remove("fadeIn");
    }, 1000);

    // Slide11
    setTimeout(() => {
        addById("slide11__man", "fadeIn");

        document.body.classList.add("black_background"); // REMOVE THIS BEFORE RELEASE (Used to debug Slide11)

        // Fade in narrator-text
        document.getElementById("slide11").getElementsByTagName("p")[0].classList.add("fadeIn");
    }, 1000);

    // Slide12
    setTimeout(() => {
        removeById("slide12__fill", "anim_man_fill_fadeIn");
        removeById("slide12__man", "anim_man_outline_colour");
        document.getElementById("slide12").getElementsByTagName("p")[0].classList.remove("fadeIn");
    }, 1000);
}

// Slide 12
function slide13() {
    // Hide previous slide
    removeById("slide11", "fadeIn")
    addById("slide11", "fadeOut");
    removeById("slide13", "fadeIn")
    addById("slide13", "fadeOut");
    // Display slide
    removeById("slide12", "fadeOut");
    removeById("slide12", "hidden");
    addById("slide12", "fadeIn");

    // Slide11
    setTimeout(() => {
        removeById("slide11__man", "anim_man_fadeIn");

        // Fade in narrator-text
        document.getElementById("slide11").getElementsByTagName("p")[0].classList.remove("fadeIn");
    }, 1000);

    // Slide12
    setTimeout(() => {
        addById("slide12__fill", "anim_man_fill_fadeIn");
        addById("slide12__man", "anim_man_outline_colour");

        // Fade in narrator-text
        document.getElementById("slide12").getElementsByTagName("p")[0].classList.add("fadeIn");
    }, 1000);

    // Slide13
    setTimeout(() => {
        document.getElementById("slide13").getElementsByTagName("p")[0].classList.remove("fadeIn");
    }, 1000);
}

// Slide 13
function slide14() {
    // Hide previous slide
    removeById("slide12", "fadeIn")
    addById("slide12", "fadeOut");
    removeById("slide14", "fadeIn")
    addById("slide14", "fadeOut");
    // Display slide
    removeById("slide13", "fadeOut");
    removeById("slide13", "hidden");
    addById("slide13", "fadeIn");

    // Slide12
    setTimeout(() => {
        removeById("slide12__fill", "anim_man_fill_fadeIn");
        removeById("slide12__man", "anim_man_outline_colour");
        document.getElementById("slide12").getElementsByTagName("p")[0].classList.remove("fadeIn");
    }, 1000);

    // Slide13
    setTimeout(() => {
        addById("slide13__fill", "anim_man_fill_fadeIn");

        // Fade in narrator-text
        document.getElementById("slide13").getElementsByTagName("p")[0].classList.add("fadeIn");
    }, 1000);

    // Slide14
    setTimeout(() => {
        removeById("slide14__fill", "anim_man_fill_fadeIn");
        removeById("slide14__man", "anim_man_outline_colour_dark");
        document.getElementById("slide14").getElementsByTagName("p")[0].classList.remove("fadeIn");
    }, 1000);
}

// Slide 14
function slide15() {
    // Hide previous slide
    removeById("slide13", "fadeIn")
    addById("slide13", "fadeOut");
    removeById("slide15", "fadeIn")
    addById("slide15", "fadeOut");
    // Display slide
    removeById("slide14", "fadeOut");
    removeById("slide14", "hidden");
    addById("slide14", "fadeIn");

    // Slide13
    setTimeout(() => {
        removeById("slide13__fill", "anim_man_fill_fadeIn");
        document.getElementById("slide13").getElementsByTagName("p")[0].classList.remove("fadeIn");
    }, 1000);

    // Slide14
    setTimeout(() => {
        addById("slide14__fill", "anim_man_fill_fadeIn");
        addById("slide14__man", "anim_man_outline_colour_dark");

        // Fade in narrator-text
        document.getElementById("slide14").getElementsByTagName("p")[0].classList.add("fadeIn");
    }, 1000);

    // Slide15
    setTimeout(() => {
        removeById("slide15__fill", "anim_man_fill_fadeIn");
        document.getElementById("slide15").getElementsByTagName("p")[0].classList.remove("fadeIn");
    }, 1000);
}

// Slide 15
function slide16() {
    // Hide previous slide
    removeById("slide14", "fadeIn")
    addById("slide14", "fadeOut");
    removeById("slide16", "fadeIn")
    addById("slide16", "fadeOut");
    // Display slide
    removeById("slide15", "fadeOut");
    removeById("slide15", "hidden");
    addById("slide15", "fadeIn");

    // Slide14
    setTimeout(() => {
        removeById("slide14__fill", "anim_man_fill_fadeIn");
        removeById("slide14__man", "anim_man_outline_colour_dark");
        document.getElementById("slide14").getElementsByTagName("p")[0].classList.remove("fadeIn");
    }, 1000);

    // Slide15
    setTimeout(() => {
        addById("slide15__fill", "anim_man_fill_fadeIn");

        // Fade in narrator-text
        document.getElementById("slide15").getElementsByTagName("p")[0].classList.add("fadeIn");
    }, 1000);

    // Slide16
    setTimeout(() => {
        document.getElementById("slide16").getElementsByTagName("p")[0].classList.remove("fadeIn");
    }, 1000);
}