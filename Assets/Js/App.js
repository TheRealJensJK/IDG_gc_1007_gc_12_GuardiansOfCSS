// Credits: Sivert Gullberg Hansen

window.addEventListener('load', function () {
    // Starting introduction animation
    loadPage();

    // Preloading images for smoother viewing (no missing images when playing animation)
    preloadImage("Assets/Img/slide0_background--desktop.png");
    preloadImage("Assets/Img/slide0_background--mobile.png");
    preloadImage("Assets/Img/slide0_background--tablet.png");
    preloadImage("Assets/Img/slide0_people.svg");
    preloadImage("Assets/Img/slide0_tree.svg");
    preloadImage("Assets/Img/slide1_eyes.svg");
    preloadImage("Assets/Img/smiledesktop.svg");
    preloadImage("Assets/Img/skydesktop.svg");
    preloadImage("Assets/Img/sanddesktop.svg");
    preloadImage("Assets/Img/Slide11_Man.svg");
    preloadImage("Assets/Img/Slide12_Fill.svg");
    preloadImage("Assets/Img/Slide12_ManyColours.png");
    preloadImage("Assets/Img/Slide13_YellowBrown.png");
    preloadImage("Assets/Img/Slide14_Black.png");
    preloadImage("Assets/Img/Slide15_White.png");
    preloadImage("Assets/Img/fallenpencilsdesktop.svg");
    preloadImage("Assets/Img/handwithcrayondesktop.svg");
    preloadImage("Assets/Img/Heartsdesktop.svg");
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
    removeById("slide2", "fadeIn");
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
        removeById("slide2__smile","anim_smile");
        document.getElementById("slide2").getElementsByTagName("p")[0].classList.remove("fadeIn");
    }, 1000);
}

// Slide 2
function slide3() {
    // Hide previous slide
    removeById("slide1", "fadeIn");
    addById("slide1", "fadeOut");
    removeById("slide3", "fadeIn");
    addById("slide3", "fadeOut");
    // Display slide
    removeById("slide2", "fadeOut");
    removeById("slide2", "hidden");
    addById("slide2", "fadeIn");

    // Slide1
    setTimeout(() => {
        removeById("scene1__eyes", "fadeIn");
        removeById("TopEye_Right", "anim_eye_blink");
        removeById("TopEye_Left", "anim_eye_blink");
        removeById("Eyeball_Right", "anim_eye_close");
        removeById("Eyeball_Left", "anim_eye_close");
        removeById("scene1__eyes", "anim_eyes_colour");
        removeByClassName("slide1__background",0, "anim_fade_background");

        document.getElementById("slide1").getElementsByTagName("p")[0].classList.remove("fadeIn");
    }, 1000);

    // Slide2
    setTimeout(() => {
        addById("slide2__smile","anim_smile");
        document.getElementById("slide2").getElementsByTagName("p")[0].classList.add("fadeIn");
        document.body.classList.add("black_background");
    }, 1000);

    // Slide 3
    setTimeout(() => {
        removeById("slide3__greyTree", "fadeIn");
        document.getElementById("slide3").getElementsByTagName("p")[0].classList.remove("fadeIn");
    }, 1000);
}

// Slide 3
function slide4() {
    scrollDelay = 4000;
    // Hide previous slide
    removeById("slide2", "fadeIn");
    addById("slide2", "fadeOut");
    removeById("slide4", "fadeIn");
    addById("slide4", "fadeOut");
    // Display slide
    removeById("slide3", "fadeOut");
    removeById("slide3", "hidden");
    addById("slide3", "fadeIn");

    // Slide2
    setTimeout(() => {
        removeById("slide2__smile","anim_smile");
        document.getElementById("slide2").getElementsByTagName("p")[0].classList.remove("fadeIn");
    }, 1000);

    // Slide3
    setTimeout(() => {
        addById("slide3__greyTree", "fadeIn");
        document.getElementById("slide3").getElementsByTagName("p")[0].classList.add("fadeIn");
    }, 1000);

    // Slide4
    setTimeout(() => {
        removeById("slide4__tree", "fadeIn");
        document.getElementById("slide4").getElementsByTagName("p")[0].classList.remove("fadeIn");
    }, 1000);
}

// Slide 4
function slide5() {
    scrollDelay = 4000;
    // Hide previous slide
    removeById("slide3", "fadeIn");
    addById("slide3", "fadeOut");
    removeById("slide5", "fadeIn");
    addById("slide5", "fadeOut");
    // Display slide
    removeById("slide4", "fadeOut");
    removeById("slide4", "hidden");
    addById("slide4", "fadeIn");

    // Slide3
    setTimeout(() => {
        removeById("slide3__greyTree", "fadeIn");
        document.getElementById("slide3").getElementsByTagName("p")[0].classList.remove("fadeIn");
    }, 1000);

    // Slide4
    setTimeout(() => {
        addById("slide4__tree", "fadeIn");
        document.getElementById("slide4").getElementsByTagName("p")[0].classList.add("fadeIn");
    }, 1000);

    // Slide5
    setTimeout(() => {
        removeById("slide5__tree", "fadeIn");
        document.getElementById("slide5").getElementsByTagName("p")[0].classList.remove("fadeIn");
    }, 1000);
}

// Slide 5
function slide6() {
    scrollDelay = 4000;
    // Hide previous slide
    removeById("slide4", "fadeIn");
    addById("slide4", "fadeOut");
    removeById("slide6", "fadeIn");
    addById("slide6", "fadeOut");
    // Display slide
    removeById("slide5", "fadeOut");
    removeById("slide5", "hidden");
    addById("slide5", "fadeIn");

    // Slide4
    setTimeout(() => {
        removeById("slide4__tree", "fadeIn");
        document.getElementById("slide4").getElementsByTagName("p")[0].classList.remove("fadeIn");
    }, 1000);

    // Slide5
    setTimeout(() => {
        addById("slide5__tree", "fadeIn");
        document.getElementById("slide5").getElementsByTagName("p")[0].classList.add("fadeIn");
        
        
    }, 1000);

    // Slide6
    setTimeout(() => {
        removeById("slide6__tree", "fadeIn");
        document.getElementById("slide6").getElementsByTagName("p")[0].classList.remove("fadeIn");
    }, 1000);
}

// Slide 6
function slide7() {
    scrollDelay = 4000;
    // Hide previous slide
    removeById("slide5", "fadeIn");
    addById("slide5", "fadeOut");
    removeById("slide7", "fadeIn");
    addById("slide7", "fadeOut");
    // Display slide
    removeById("slide6", "fadeOut");
    removeById("slide6", "hidden");
    addById("slide6", "fadeIn");

    // Slide5
    setTimeout(() => {
        removeById("slide5__tree", "fadeIn");
        document.getElementById("slide5").getElementsByTagName("p")[0].classList.remove("fadeIn");
    }, 1000);

    // Slide6
    setTimeout(() => {
        addById("slide6__tree", "fadeIn");
        document.getElementById("slide6").getElementsByTagName("p")[0].classList.add("fadeIn");
    }, 1000);

    // Slide8
    setTimeout(() => {
        removeById("slide8__sky", "fadeIn");
        removeById("cloud", "anim_sky");
        document.getElementById("slide7").getElementsByTagName("p")[0].classList.remove("fadeIn");
    }, 1000);
}

// Slide 7
function slide8() {
    // Hide previous slide
    removeById("slide6", "fadeIn");
    addById("slide6", "fadeOut");
    removeById("slide8", "fadeIn");
    addById("slide8", "fadeOut");
    // Display slide
    removeById("slide7", "fadeOut");
    removeById("slide7", "hidden");
    addById("slide7", "fadeIn");

    // Slide6
    setTimeout(() => {
        removeById("slide6__tree", "fadeIn");
        document.getElementById("slide6").getElementsByTagName("p")[0].classList.remove("fadeIn");
    }, 1000);

    // Slide7
    setTimeout(() => {
        addById("slide8__sky", "fadeIn");
        addById("cloud", "anim_sky");
        document.getElementById("slide7").getElementsByTagName("p")[0].classList.add("fadeIn");
    }, 1000);

    // Slide 8
    setTimeout(() => {
        document.getElementById("slide8").getElementsByTagName("p")[0].classList.remove("fadeIn");
        removeById("slide9__sand","fadeIn");
        removeById ("lines", "anim_sand");
    }, 1000);
}

// Slide 8
function slide9() {
    // Hide previous slide
    removeById("slide7", "fadeIn");
    addById("slide7", "fadeOut");
    removeById("slide9", "fadeIn");
    addById("slide9", "fadeOut");
    // Display slide
    removeById("slide8", "fadeOut");
    removeById("slide8", "hidden");
    addById("slide8", "fadeIn");

    // Slide7
    setTimeout(() => {
        removeById("slide8__sky", "fadeIn");
        removeById("cloud", "anim_sky");
        document.getElementById("slide7").getElementsByTagName("p")[0].classList.remove("fadeIn");
    }, 1000);

    // Slide8
    setTimeout(() => {
        document.getElementById("slide8").getElementsByTagName("p")[0].classList.add("fadeIn");
        addById("slide9__sand","fadeIn");
        addById ("lines", "anim_sand");
    }, 1000);

    // Slide 9
    setTimeout(() => {
        removeById("appleSvg","fadeIn");
        document.getElementById("slide9").getElementsByTagName("p")[0].classList.remove("fadeIn");
    }, 1000);
}


// Slide 9
function slide10() {
    scrollDelay = 6000;
    // Hide previous slide
    removeById("slide8", "fadeIn");
    addById("slide8", "fadeOut");
    removeById("slide10", "fadeIn");
    addById("slide10", "fadeOut");
    // Display slide
    removeById("slide9", "fadeOut");
    removeById("slide9", "hidden");
    addById("slide9", "fadeIn");

    // Slide8
    setTimeout(() => {
        document.getElementById("slide8").getElementsByTagName("p")[0].classList.remove("fadeIn");
    }, 1000);

    // Slide9
    setTimeout(() => {
        addById("appleSvg", "fadeIn");
        document.getElementById("slide9").getElementsByTagName("p")[0].classList.add("fadeIn");
    }, 1000);

    // Slide10
    setTimeout(() => {
        removeById("slide11__man", "fadeIn");
        document.getElementById("slide10").getElementsByTagName("p")[0].classList.remove("fadeIn");
    }, 1000);
}

// Slide 10
function slide11() {
    // Hide previous slide
    removeById("slide9", "fadeIn");
    addById("slide9", "fadeOut");
    removeById("slide11", "fadeIn");
    addById("slide11", "fadeOut");
    // Display slide
    removeById("slide10", "fadeOut");
    removeById("slide10", "hidden");
    addById("slide10", "fadeIn");

    // Slide9
    setTimeout(() => {
        document.getElementById("slide9").getElementsByTagName("p")[0].classList.remove("fadeIn");
    }, 1000);

    // Slide10
    setTimeout(() => {
        addById("slide11__man", "fadeIn");
        // Fade in narrator-text
        document.getElementById("slide10").getElementsByTagName("p")[0].classList.add("fadeIn");
    }, 1000);

    // Slide11
    setTimeout(() => {
        removeById("slide12__fill", "anim_man_fill_fadeIn");
        removeById("slide12__man", "anim_man_outline_colour");
        document.getElementById("slide11").getElementsByTagName("p")[0].classList.remove("fadeIn");
    }, 1000);
}

// Slide 11
function slide12() {
    // Hide previous slide
    removeById("slide10", "fadeIn");
    addById("slide10", "fadeOut");
    removeById("slide12", "fadeIn");
    addById("slide12", "fadeOut");
    // Display slide
    removeById("slide11", "fadeOut");
    removeById("slide11", "hidden");
    addById("slide11", "fadeIn");

    // Slide10
    setTimeout(() => {
        removeById("slide11__man", "anim_man_fadeIn");

        // Fade in narrator-text
        document.getElementById("slide10").getElementsByTagName("p")[0].classList.remove("fadeIn");
    }, 1000);

    // Slide11
    setTimeout(() => {
        addById("slide12__fill", "anim_man_fill_fadeIn");
        addById("slide12__man", "anim_man_outline_colour");

        // Fade in narrator-text
        document.getElementById("slide11").getElementsByTagName("p")[0].classList.add("fadeIn");
    }, 1000);

    // Slide12
    setTimeout(() => {
        document.getElementById("slide12").getElementsByTagName("p")[0].classList.remove("fadeIn");
    }, 1000);
}

// Slide 12
function slide13() {
    // Hide previous slide
    removeById("slide11", "fadeIn");
    addById("slide11", "fadeOut");
    removeById("slide13", "fadeIn");
    addById("slide13", "fadeOut");
    // Display slide
    removeById("slide12", "fadeOut");
    removeById("slide12", "hidden");
    addById("slide12", "fadeIn");

    // Slide11
    setTimeout(() => {
        removeById("slide12__fill", "anim_man_fill_fadeIn");
        removeById("slide12__man", "anim_man_outline_colour");
        document.getElementById("slide11").getElementsByTagName("p")[0].classList.remove("fadeIn");
    }, 1000);

    // Slide12
    setTimeout(() => {
        addById("slide13__fill", "anim_man_fill_fadeIn");

        // Fade in narrator-text
        document.getElementById("slide12").getElementsByTagName("p")[0].classList.add("fadeIn");
    }, 1000);

    // Slide13
    setTimeout(() => {
        removeById("slide14__fill", "anim_man_fill_fadeIn");
        removeById("slide14__man", "anim_man_outline_colour_dark");
        document.getElementById("slide13").getElementsByTagName("p")[0].classList.remove("fadeIn");
    }, 1000);
}

// Slide 13
function slide14() {
    // Hide previous slide
    removeById("slide12", "fadeIn");
    addById("slide12", "fadeOut");
    removeById("slide14", "fadeIn");
    addById("slide14", "fadeOut");
    // Display slide
    removeById("slide13", "fadeOut");
    removeById("slide13", "hidden");
    addById("slide13", "fadeIn");

    // Slide12
    setTimeout(() => {
        removeById("slide13__fill", "anim_man_fill_fadeIn");
        document.getElementById("slide12").getElementsByTagName("p")[0].classList.remove("fadeIn");
    }, 1000);

    // Slide13
    setTimeout(() => {
        addById("slide14__fill", "anim_man_fill_fadeIn");
        addById("slide14__man", "anim_man_outline_colour_dark");

        // Fade in narrator-text
        document.getElementById("slide13").getElementsByTagName("p")[0].classList.add("fadeIn");
    }, 1000);

    // Slide14
    setTimeout(() => {
        removeById("slide15__fill", "anim_man_fill_fadeIn");
        document.getElementById("slide14").getElementsByTagName("p")[0].classList.remove("fadeIn");
    }, 1000);
}

// Slide 14
function slide15() {
    // Hide previous slide
    removeById("slide13", "fadeIn");
    addById("slide13", "fadeOut");
    removeById("slide15", "fadeIn");
    addById("slide15", "fadeOut");
    // Display slide
    removeById("slide14", "fadeOut");
    removeById("slide14", "hidden");
    addById("slide14", "fadeIn");

    // Slide13
    setTimeout(() => {
        removeById("slide14__fill", "anim_man_fill_fadeIn");
        removeById("slide14__man", "anim_man_outline_colour_dark");
        document.getElementById("slide13").getElementsByTagName("p")[0].classList.remove("fadeIn");
    }, 1000);

    // Slide14
    setTimeout(() => {
        addById("slide15__fill", "anim_man_fill_fadeIn");
        document.getElementById("slide14").getElementsByTagName("p")[0].classList.add("fadeIn");
    }, 1000);

    // Slide15
    setTimeout(() => {
        removeById ("slide16__crayons", "anim_crayons");
        document.getElementById("slide15").getElementsByTagName("p")[0].classList.remove("fadeIn");
    }, 1000);
}

// Slide 15
function slide16() {
    // Hide previous slide
    removeById("slide14", "fadeIn");
    addById("slide14", "fadeOut");
    removeById("slide16", "fadeIn");
    addById("slide16", "fadeOut");
    // Display slide
    removeById("slide15", "fadeOut");
    removeById("slide15", "hidden");
    addById("slide15", "fadeIn");

    // Slide14
    setTimeout(() => {
        removeById("slide15__fill", "anim_man_fill_fadeIn");
        document.getElementById("slide14").getElementsByTagName("p")[0].classList.remove("fadeIn");
    }, 1000);

    // Slide15
    setTimeout(() => {
        addById ("slide16__crayons", "anim_crayons");
        document.getElementById("slide15").getElementsByTagName("p")[0].classList.add("fadeIn");
    }, 1000);

    // Slide 16
    setTimeout(() => {
        removeById ("slide17__glove", "fadeIn");
        removeById ("greencrayon", "anim_greencrayon");
        removeById ("pinkcrayon", "anim_pinkcrayon");
        removeById ("orangecrayon", "anim_orangecrayon");
        removeById ("redcrayon", "anim_redcrayon");
        removeById ("yellowcrayon", "anim_yellowcrayon");
        document.getElementById("slide16").getElementsByTagName("p")[0].classList.remove("fadeIn");
    }, 1000);
}

// Slide 16
function slide17() {
    // Hide previous slide
    removeById("slide15", "fadeIn");
    addById("slide15", "fadeOut");
    removeById("slide17", "fadeIn");
    addById("slide17", "fadeOut");
    // Display slide
    removeById("slide16", "fadeOut");
    removeById("slide16", "hidden");
    addById("slide16", "fadeIn");

    // Slide15
    setTimeout(() => {
        removeById ("slide16__crayons", "anim_crayons");
        document.getElementById("slide15").getElementsByTagName("p")[0].classList.remove("fadeIn");
    }, 1000);

    // Slide16
    setTimeout(() => {
        addById ("slide17__glove", "fadeIn");
        addById ("greencrayon", "anim_greencrayon");
        addById ("pinkcrayon", "anim_pinkcrayon");
        addById ("orangecrayon", "anim_orangecrayon");
        addById ("redcrayon", "anim_redcrayon");
        addById ("yellowcrayon", "anim_yellowcrayon");

        document.getElementById("slide16").getElementsByTagName("p")[0].classList.add("fadeIn");
    }, 1000);

    // Slide 17
    setTimeout(() => {
        removeById ("slide18__love", "anim_love");
        document.getElementById("slide17").getElementsByTagName("p")[0].classList.remove("fadeIn");
    }, 1000);
}

// Slide 17
function slide18() {
    // Hide previous slide
    removeById("slide16", "fadeIn");
    addById("slide16", "fadeOut");
    removeById("credits", "fadeIn");
    addById("credits", "fadeOut");

    // Display slide
    removeById("slide17", "fadeOut");
    removeById("slide17", "hidden");
    addById("slide17", "fadeIn");

    // Slide16
    setTimeout(() => {
        removeById ("slide17__glove", "fadeIn");
        removeById ("greencrayon", "anim_greencrayon");
        removeById("pinkcrayon", "anim_pinkcrayon");
        removeById ("orangecrayon", "anim_orangecrayon");
        removeById("redcrayon", "anim_redcrayon");
        removeById("yellowcrayon", "anim_yellowcrayon");
        document.getElementById("slide16").getElementsByTagName("p")[0].classList.remove("fadeIn");
    }, 1000);

    // Slide17
    setTimeout(() => {
        addById ("slide18__love", "anim_love");
        document.getElementById("slide17").getElementsByTagName("p")[0].classList.add("fadeIn");

    }, 1000);

    // Credits
    setTimeout(() => {
        removeByClassName("credits__title", 0, "anim_title");
        removeByClassName("credits__name", 0, "anim_author");
        removeByClassName("credits__name", 1, "anim_author");
        removeByClassName("credits__name", 2, "anim_author");
    }, 1000);
}

// Slide 18 (Credits)
function slide19() {
    // Hide previous slide
    removeById("slide17", "fadeIn");
    addById("slide17", "fadeOut");

    // Display slide
    removeById("credits", "fadeOut");
    removeById("credits", "hidden");
    addById("credits", "fadeIn");

    // Slide17
    setTimeout(() => {
        removeById ("slide18__love", "anim_love");
        document.getElementById("slide17").getElementsByTagName("p")[0].classList.remove("fadeIn");
    }, 1000);

    // Credits
    setTimeout(() => {
        addByClassName("credits__title", 0, "anim_title");
        addByClassName("credits__name", 0, "anim_author");
        addByClassName("credits__name", 1, "anim_author");
        addByClassName("credits__name", 2, "anim_author");
    }, 1000);
}