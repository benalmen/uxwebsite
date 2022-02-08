

$(document).ready(function() {


var opened = "block";
var closed = "none";

var white = "white"
var black = "black"

// MAIN CLOSE Function

function close() {
        $("nav").animate({top:"50vh"},700);

        $(".frame").animate({bottom: "-100vh"},700);

        $(".workframe").delay(700).fadeOut(0);
        $(".bioframe").delay(700).fadeOut(0);
        $(".contactframe").delay(700).fadeOut(0);

        $(".siteheader").animate({bottom:"50vh"},700);
        $("#jobtitle").animate({fontSize: "120%",right:"30vw"})
        $("#name").animate({fontSize: "3rem",right:"30vw"},700);
        $("#linkgroup").animate({lineHeight: "3rem",right:"30vw"},700);

        $(".btnwork, .btnbio, .btncontact").delay(600).animate({width: "29vw"},300);
        $(".btntext").delay(600).animate({left: "71vw"},300);
};

// BUTTON Functions

// WORK BUTTON

function workopen() {
    $(".btnwork").animate({width: "100vw"},300);

    $(".btntext").animate({left: "90vw"},300);

    $(".btnbio").animate({width: "10vw"},300);
    $(".btncontact").animate({width: "10vw"},300);

    $(".siteheader").delay(300).animate({bottom: "90vh"},700);
    $("#jobtitle").delay(300).animate({fontSize: "0%"})
    $("#name").delay(300).animate({fontSize: "100%", left: "1vw"},700);
    $("#linkgroup").delay(300).animate({lineHeight: "2.5rem", right: "13vw"},700);

    $(".workframe").fadeIn(0);
    $(".workframe").delay(300).animate({bottom: "0vh"},700);

    $("nav").delay(300).animate({top: "15vh"},700)
};
function quickwork() {
    $(".btnbio, .btncontact").animate({width: "10vw"},200);
    $(".btnwork").animate({width: "100vw"},200);

    $(".frame").delay(200).animate({bottom: "-100vh"},300);
    $(".bioframe").delay(200).fadeOut(0);
    $(".contactframe").delay(200).fadeOut(0);

    $(".workframe").fadeIn(0);
    $(".workframe").animate({bottom: "0vh"},300);
};

// BIO BUTTON

function bioopen() {
    $(".btnbio").animate({width: "100vw"},300);

    $(".btntext").animate({left: "90vw"},300);

    $(".btnwork").animate({width: "10vw"},300);
    $(".btncontact").animate({width: "10vw"},300);

    $(".siteheader").delay(300).animate({bottom: "90vh", right: "13vw"},700);
    $("#jobtitle").delay(300).animate({fontSize: "0%"})
    $("#name").delay(300).animate({fontSize: "100%"},700);
    $("#linkgroup").delay(300).animate({lineHeight: "2.5rem"},700);

    $(".bioframe").fadeIn(0);
    $(".bioframe").delay(300).animate({bottom: "0vh"},700);

    $("nav").delay(300).animate({top: "15vh"},700)
};
function quickbio() {
    $(".btnwork, .btncontact").animate({width: "10vw"},200);
    $(".btnbio").animate({width: "100vw"},200);

    $(".frame").delay(200).animate({bottom: "-100vh"},300);
    $(".workframe").delay(200).fadeOut(0);
    $(".contactframe").delay(200).fadeOut(0);

    $(".bioframe").fadeIn(0);
    $(".bioframe").animate({bottom: "0vh"},300);
};

// CONTACT BUTTON

function contactopen() {
    $(".btncontact").animate({width: "100vw"},300);

    $(".btntext").animate({left: "90vw"},300);

    $(".btnwork").animate({width: "10vw"},300);
    $(".btnbio").animate({width: "10vw"},300);

    $(".siteheader").delay(300).animate({bottom: "90vh", right: "13vw"},700);
    $("#jobtitle").delay(300).animate({fontSize: "0%"})
    $("#name").delay(300).animate({fontSize: "100%"},700);
    $("#linkgroup").delay(300).animate({lineHeight: "2.5rem"},700);

    $(".contactframe").fadeIn(0);
    $(".contactframe").delay(300).animate({bottom: "0vh"},700);

    $("nav").delay(300).animate({top: "15vh"},700)
};
function quickcontact() {
    $(".btnwork, .btnbio").animate({width: "10vw"},200);
    $(".btncontact").animate({width: "100vw"},200);

    $(".frame").delay(200).animate({bottom: "-100vh"},300);
    $(".workframe").delay(200).fadeOut(0);
    $(".bioframe").delay(200).fadeOut(0);

    $(".contactframe").fadeIn(0);
    $(".contactframe").animate({bottom: "0vh"},300);
};

// CLOSE Click

$(".close").click(close);

// WORK BUTTON Clicks

$(".btnwork").click(function() {
    if ($(".workframe").css("display") == opened) {
        close();
    }
    else if ($(".workframe").css("display") == closed && ($(".bioframe").css("display") == opened || $(".contactframe").css("display") == opened)) {
        quickwork();
    }
    else if ($(".workframe").css("display") == closed && $(".bioframe").css("display") == closed && $(".contactframe").css("display") == closed) {
        workopen();
    }
});

// BIO BUTTON Clicks

$(".btnbio").click(function() {
    if ($(".bioframe").css("display") == opened) {
        close();
    }
    else if ($(".bioframe").css("display") == closed && ($(".workframe").css("display") == opened || $(".contactframe").css("display") == opened)) {
        quickbio();
    }
    else if ($(".bioframe").css("display") == closed && $(".workframe").css("display") == closed && $(".contactframe").css("display") == closed) {
        bioopen();
    }
});

// CONTACT BUTTON Clicks

$(".btncontact").click(function() {
    if ($(".contactframe").css("display") == opened) {
        close();
    }
    else if ($(".contactframe").css("display") == closed && ($(".workframe").css("display") == opened || $(".bioframe").css("display") == opened)) {
        quickcontact();
    }
    else if ($(".contactframe").css("display") == closed && $(".workframe").css("display") == closed && $(".bioframe").css("display") == closed) {
        contactopen();
    }
});


// Dark Mode

function godark() {
    $(".lightswitch").fadeIn(0);
    $(".darkswitch").fadeOut(0);
    $("body").css({"background-color" : black});
    $("body").css({"color" : white});
    $(".default").css({"background-color" : black});
    $(".default").css({"color" : white});
    $(".inverse").css({"background-color" : white});
    $(".inverse").css({"color" : black});
};

function golight() {
    $(".darkswitch").fadeIn(0);
    $(".lightswitch").fadeOut(0);
    $("body").css({"background-color" : white});
    $("body").css({"color" : black});
    $(".default").css({"background-color" : white});
    $(".default").css({"color" : black});
    $(".inverse").css({"background-color" : black});
    $(".inverse").css({"color" : white});
};

$(".darkswitch").click(godark);
$(".lightswitch").click(golight);

});
