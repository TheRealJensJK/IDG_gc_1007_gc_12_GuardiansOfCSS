// Credits: Sivert Gullberg Hansen

var lastScrollTop = 0; // Used to see scrolling direciton
var readyToScroll = false; // Is the user allowed to scroll?
var scrollDelay = 5000; // Milliseconds - How long will we temporarily disable users scroll?
var introDelay = 10000; // Milliseconds - How long will we temporarily disable users scroll?
var scrollIndex = 0; // Which slide are we on?
var maxSlides = 19; // How many slides do we have?

// Check if the user scrolls with the mousewheel, page up/down keys or the arrow keys
document.addEventListener("scroll", function () {
    var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
    if (st > lastScrollTop && readyToScroll && scrollIndex + 1 != maxSlides + 1) {
        // downscroll code
        scrollDown();
    } else if (st < lastScrollTop && readyToScroll && scrollIndex - 1 != -1) {
        // upscroll code
        scrollUp();
    }
    lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
}, false);

// Disallow user to scroll
function disableScroll() {
    window.onscroll = function () {
        window.scrollTo(0, 1);
    };
}

// Allow user to scroll
function enableScroll() {
    window.onscroll = function () {};
}

// Temporarily prevent user from scrolling and activate loading bar
function readyScrolling(time) {
    disableScroll();
    move(time);
    setTimeout(function () {
        readyToScroll = true;
        enableScroll();
    }, time);
}

// Scroll down function
function scrollDown() {
    readyToScroll = false;
    scrollIndex += 1;
    document.getElementById("loadingOverlay__slide").innerHTML = scrollIndex + " / " + (maxSlides + 1);
    scrollToSlide(scrollIndex);
    readyScrolling(scrollDelay);
}

// Scroll up function
function scrollUp() {
    readyToScroll = false;
    scrollIndex -= 1;
    document.getElementById("loadingOverlay__slide").innerHTML = scrollIndex + " / 30";
    scrollToSlide(scrollIndex);
    readyScrolling(scrollDelay);
}

function scrollToSlide(index) {
    var fn = "slide" + index;
    window[fn]();
}

// Stop user from scrolling until introduction has finished
window.addEventListener('load', function () {
    readyScrolling(introDelay);
    document.getElementById("loadingOverlay__slide").innerHTML = scrollIndex + " / " + (maxSlides + 1);
});

// Loading Bar Function
function move(time) {
    var duration = time; // it should finish in 5 seconds !
    var st = new Date().getTime();
    var bar = document.getElementById("loadingOverlay__progress__bar");
    bar.classList.remove("loadingOverlay__progress__bar--ready");

    var interval = setInterval(function () {
        var diff = Math.round(new Date().getTime() - st),
            val = Math.round(diff / duration * 100);
        val = val > 100 ? 100 : val;
        bar.style.width = val + "%";
        if (diff >= duration) {
            bar.classList.add("loadingOverlay__progress__bar--ready");
            clearInterval(interval);
        }
    }, 50);
}