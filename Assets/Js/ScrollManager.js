var lastScrollTop = 0; // Used to see scrolling direciton
var readyToScroll = false; // Is the user allowed to scroll?
var scrollDelay = 5000; // Milliseconds - How long will we temporarily disable users scroll?
var introDelay = 10000; // Milliseconds - How long will we temporarily disable users scroll?
var scrollIndex = 0; // Which slide are we on?

// Check if the user scrolls with the mousewheel
document.addEventListener("scroll", function () {
    var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
    if (st > lastScrollTop && readyToScroll) {
        // downscroll code
        readyToScroll = false;
        scrollIndex += 1;
        readyScrolling(scrollDelay);
    } else if (readyToScroll && scrollIndex - 1 != -1) {
        // upscroll code
        readyToScroll = false;
        scrollIndex -= 1;
        readyScrolling(scrollDelay);
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

// Stop user from scrolling until introduction has finished
window.onload = readyScrolling(introDelay);

// Loading Bar Function
function move(time) {
    var duration = time; // it should finish in 5 seconds !
    var st = new Date().getTime();
    var bar = document.getElementById("loadingOverlay__progress__bar");

    var interval = setInterval(function () {
        var diff = Math.round(new Date().getTime() - st),
            val = Math.round(diff / duration * 100);
        val = val > 100 ? 100 : val;
        bar.style.width = val + "%";
        if (diff >= duration) {
            clearInterval(interval);
        }
    }, 100);
}