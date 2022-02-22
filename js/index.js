

$(document).ready(function() {

var modalopened = "block";
var modalclosed = "none";

var white = "white";
var black = "black";
var khaki = "khaki";
var salmon = "lightsalmon";
var coral = "lightcoral";

var btnwidthstart = "225px";
var btnwidthclosed = "58px";
var btnwidthopened = "3000px";

var buttonspeed = 300;
var modalspeed = 300;

var space1start = "30%";
var space2start = "25px";
var space3start = "10%";

var space1open = "0%";
var space2open = "45%";
var space3open = "0%";

// ***DARK MODE***

function godark() {
    $(".lightswitch").fadeIn(0);
    $(".darkswitch").fadeOut(0);
    $(".main").toggleClass("mainlight maindark");
    $(".linkedin").toggleClass("linkedinlight linkedindark");
    $(".btn").toggleClass("btnlight btndark");
    $(".btnworklight").toggleClass("btnworklight btnworkdark");
    $(".btnbiolight").toggleClass("btnbiolight btnbiodark");
    $(".btncontactlight").toggleClass("btncontactlight btncontactdark");
};

function golight() {
    $(".darkswitch").fadeIn(0);
    $(".lightswitch").fadeOut(0);
    $(".main").toggleClass("mainlight");
    $(".main").toggleClass("maindark");
    $(".linkedin").toggleClass("linkedinlight");
    $(".linkedin").toggleClass("linkedindark");
    $(".btn").toggleClass("btnlight btndark");
    $(".btnworkdark").toggleClass("btnworklight btnworkdark");
    $(".btnbiodark").toggleClass("btnbiolight btnbiodark");
    $(".btncontactdark").toggleClass("btncontactlight btncontactdark");
};

$(".darkswitch").click(godark);
$(".lightswitch").click(golight);



// ***MENU ANIMATIONS***

// function library

function btnstostart() {
    $(".space1").animate({height: space1start},buttonspeed,"linear");
    $(".space3").animate({height: space3start},buttonspeed,"linear");
    $(".space2").animate({height: space2start},buttonspeed,"linear");
    $(".btnwork").animate({width: btnwidthstart},buttonspeed,"linear");
    $(".btnbio").animate({width: btnwidthstart},buttonspeed,"linear");
    $(".btncontact").animate({width: btnwidthstart},buttonspeed,"linear");
};

function btnstoworkopen() {
    $(".space1").animate({height: space1open},buttonspeed,"linear");
    $(".space3").animate({height: space3open},buttonspeed,"linear");
    $(".space2").animate({height: space2open},buttonspeed,"linear");
    $(".btnwork").animate({width: btnwidthopened},buttonspeed,"linear");
    $(".btnbio").animate({width: btnwidthclosed},buttonspeed,"linear");
    $(".btncontact").animate({width: btnwidthclosed},buttonspeed,"linear");
};

function btnstobioopen() {
    $(".space1").animate({height: space1open},buttonspeed,"linear");
    $(".space3").animate({height: space3open},buttonspeed,"linear");
    $(".space2").animate({height: space2open},buttonspeed,"linear");
    $(".btnwork").animate({width: btnwidthclosed},buttonspeed,"linear");
    $(".btnbio").animate({width: btnwidthopened},buttonspeed,"linear");
    $(".btncontact").animate({width: btnwidthclosed},buttonspeed,"linear");
};

function btnstocontactopen() {
    $(".space1").animate({height: space1open},buttonspeed,"linear");
    $(".space3").animate({height: space3open},buttonspeed,"linear");
    $(".space2").animate({height: space2open},buttonspeed,"linear");
    $(".btnwork").animate({width: btnwidthclosed},buttonspeed,"linear");
    $(".btnbio").animate({width: btnwidthclosed},buttonspeed,"linear");
    $(".btncontact").animate({width: btnwidthopened},buttonspeed,"linear");
};


// menu events

$(".btnwork").click(function() {
    if ($(".btnwork").css("width") == btnwidthstart || $(".btnwork").css("width") == btnwidthclosed) {
        btnstoworkopen();
    }
    else {
        btnstostart();
    }
});

$(".btnbio").click(function() {
    if ($(".btnbio").css("width") == btnwidthstart || $(".btnbio").css("width") == btnwidthclosed) {
        btnstobioopen();
    }
    else {
        btnstostart();
    }
});

$(".btncontact").click(function() {
    if ($(".btncontact").css("width") == btnwidthstart || $(".btncontact").css("width") == btnwidthclosed) {
        btnstocontactopen();
    }
    else {
        btnstostart();
    }
});




});















// // MAIN CLOSE Function

// function close() {
//         $("nav").animate({top:"50vh"},700);

//         $(".frame").animate({bottom: "-100vh"},700);

//         $(".workframe").delay(700).fadeOut(0);
//         $(".bioframe").delay(700).fadeOut(0);
//         $(".contactframe").delay(700).fadeOut(0);

//         $(".siteheader").animate({bottom:"50vh"},700);
//         $("#jobtitle").animate({fontSize: "120%",right:"30vw"})
//         $("#name").animate({fontSize: "3rem",right:"30vw"},700);
//         $("#linkgroup").animate({lineHeight: "3rem",right:"30vw"},700);

//         $(".btnwork, .btnbio, .btncontact").delay(600).animate({width: btnwidthstart},300);
//         $(".btntext").delay(600).animate({left: "71vw"},300);
// };

// // BUTTON Functions

// // WORK BUTTON

// function workopen() {
//     $(".btnwork").animate({width: btnwidthopened},300);

//     $(".btntext").animate({left: "90vw"},300);

//     $(".btnbio").animate({width: btnwidthclosed},300);
//     $(".btncontact").animate({width: btnwidthclosed},300);

//     $(".siteheader").delay(300).animate({bottom: "90vh"},700);
//     $("#jobtitle").delay(300).animate({fontSize: "0%"})
//     $("#name").delay(300).animate({fontSize: "100%", left: "1vw"},700);
//     $("#linkgroup").delay(300).animate({lineHeight: "2.5rem", right: "13vw"},700);

//     $(".workframe").fadeIn(0);
//     $(".workframe").delay(300).animate({bottom: "0vh"},700);

//     $("nav").delay(300).animate({top: "15vh"},700)
// };
// function quickwork() {
//     $(".btnbio, .btncontact").animate({width: btnwidthclosed},200);
//     $(".btnwork").animate({width: btnwidthopened},200);

//     $(".frame").delay(200).animate({bottom: "-100vh"},300);
//     $(".bioframe").delay(200).fadeOut(0);
//     $(".contactframe").delay(200).fadeOut(0);

//     $(".workframe").fadeIn(0);
//     $(".workframe").animate({bottom: "0vh"},300);
// };

// // BIO BUTTON

// function bioopen() {
//     $(".btnbio").animate({width: btnwidthopened},300);

//     $(".btntext").animate({left: "90vw"},300);

//     $(".btnwork").animate({width: btnwidthclosed},300);
//     $(".btncontact").animate({width: btnwidthclosed},300);

//     $(".siteheader").delay(300).animate({bottom: "90vh", right: "13vw"},700);
//     $("#jobtitle").delay(300).animate({fontSize: "0%"})
//     $("#name").delay(300).animate({fontSize: "100%"},700);
//     $("#linkgroup").delay(300).animate({lineHeight: "2.5rem"},700);

//     $(".bioframe").fadeIn(0);
//     $(".bioframe").delay(300).animate({bottom: "0vh"},700);

//     $("nav").delay(300).animate({top: "15vh"},700)
// };
// function quickbio() {
//     $(".btnwork, .btncontact").animate({width: btnwidthclosed},200);
//     $(".btnbio").animate({width: btnwidthopened},200);

//     $(".frame").delay(200).animate({bottom: "-100vh"},300);
//     $(".workframe").delay(200).fadeOut(0);
//     $(".contactframe").delay(200).fadeOut(0);

//     $(".bioframe").fadeIn(0);
//     $(".bioframe").animate({bottom: "0vh"},300);
// };

// // CONTACT BUTTON

// function contactopen() {
//     $(".btncontact").animate({width: btnwidthopened},300);

//     $(".btntext").animate({left: "90vw"},300);

//     $(".btnwork").animate({width: btnwidthclosed},300);
//     $(".btnbio").animate({width: btnwidthclosed},300);

//     $(".siteheader").delay(300).animate({bottom: "90vh", right: "13vw"},700);
//     $("#jobtitle").delay(300).animate({fontSize: "0%"})
//     $("#name").delay(300).animate({fontSize: "100%"},700);
//     $("#linkgroup").delay(300).animate({lineHeight: "2.5rem"},700);

//     $(".contactframe").fadeIn(0);
//     $(".contactframe").delay(300).animate({bottom: "0vh"},700);

//     $("nav").delay(300).animate({top: "15vh"},700)
// };
// function quickcontact() {
//     $(".btnwork, .btnbio").animate({width: btnwidthclosed},200);
//     $(".btncontact").animate({width: btnwidthopened},200);

//     $(".frame").delay(200).animate({bottom: "-100vh"},300);
//     $(".workframe").delay(200).fadeOut(0);
//     $(".bioframe").delay(200).fadeOut(0);

//     $(".contactframe").fadeIn(0);
//     $(".contactframe").animate({bottom: "0vh"},300);
// };

// // CLOSE Click

// $(".close").click(close);

// // WORK BUTTON Clicks

// $(".btnwork").click(function() {
//     if ($(".workframe").css("display") == opened) {
//         close();
//     }
//     else if ($(".workframe").css("display") == closed && ($(".bioframe").css("display") == opened || $(".contactframe").css("display") == opened)) {
//         quickwork();
//     }
//     else if ($(".workframe").css("display") == closed && $(".bioframe").css("display") == closed && $(".contactframe").css("display") == closed) {
//         workopen();
//     }
// });

// // BIO BUTTON Clicks

// $(".btnbio").click(function() {
//     if ($(".bioframe").css("display") == opened) {
//         close();
//     }
//     else if ($(".bioframe").css("display") == closed && ($(".workframe").css("display") == opened || $(".contactframe").css("display") == opened)) {
//         quickbio();
//     }
//     else if ($(".bioframe").css("display") == closed && $(".workframe").css("display") == closed && $(".contactframe").css("display") == closed) {
//         bioopen();
//     }
// });

// // CONTACT BUTTON Clicks

// $(".btncontact").click(function() {
//     if ($(".contactframe").css("display") == opened) {
//         close();
//     }
//     else if ($(".contactframe").css("display") == closed && ($(".workframe").css("display") == opened || $(".bioframe").css("display") == opened)) {
//         quickcontact();
//     }
//     else if ($(".contactframe").css("display") == closed && $(".workframe").css("display") == closed && $(".bioframe").css("display") == closed) {
//         contactopen();
//     }
// });



