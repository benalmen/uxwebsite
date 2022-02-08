


$(document).ready(function() {

var btnstart = '29vw';
var btnopened = '100vw';
var btnclosed = '10vw';

var wbtnwidth = $(".btnwork").css('width');

var bbtnwidth = $(".btnbio").css('width');

var cbtnwidth = $(".btncontact").css('width');

$(".btnwork").click(
    
    function() {

        if (wbtnwidth = btnstart) {
            $(this).animate({width: btnopened},300);

            $(".btntext").animate({left: "90vw"},300);

            $(".btnbio").animate({width: btnclosed},300);
            $(".btncontact").animate({width: btnclosed},300);

            $(".siteheader").animate({top: "1vh", right: "13vw"},700);
            $("#name").animate({fontSize: "2rem"},300);
            $("#jobtitle").animate({fontSize: "1rem"},300);
            $("#linkgroup").animate({lineHeight: "2.5rem"},300);

            $(".workframe").fadeIn(0);
            $(".workframe").delay(300).animate({bottom: "0vh"},700);
        }
        else if (wbtnwidth = btnopened) {
            $(".workframe").animate({bottom: "-100vh"},700);
            $(".workframe").delay(700).fadeOut(0);

            $(".siteheader").animate({top: "calc(50vh - 100px)",right: "30vw"},700);
            $("#name").animate({fontSize: "3rem"},300);
            $("#jobtitle").animate({fontSize: "1.2rem"},300);
            $("#linkgroup").animate({lineHeight: "3rem"},300);

            $(".btnwork, .btnbio, .btncontact").delay(500).animate({width: btnstart},300);
            $(".btntext").delay(500).animate({left: "71vw"},300);
        }
        else if (wbtnwidth = btnclosed) {
            $(".bioframe, .contactframe").animate({bottom: "-100vh"},700);
            $(".bioframe, .contactframe").delay(700).fadeOut(0);

            $(".btnwork, .btnbio, .btncontact").delay(500).animate({width: btnstart},300);
            $(".btntext").delay(500).animate({left: "71vw"},300);

            $(this).delay(800).animate({width: btnopened},300);

            $(".btntext").delay(800).animate({left: "90vw"},300);

            $(".btnbio").delay(800).animate({width: btnclosed},300);
            $(".btncontact").delay(800).animate({width: btnclosed},300);

            $(".siteheader").delay(800).animate({top: "1vh", right: "13vw"},700);
            $("#name").delay(800).animate({fontSize: "2rem"},300);
            $("#jobtitle").delay(800).animate({fontSize: "1rem"},300);
            $("#linkgroup").delay(800).animate({lineHeight: "2.5rem"},300);

            $(".workframe").delay(800).fadeIn(0);
            $(".workframe").delay(1100).animate({bottom: "0vh"},700);
        }

    });

});


























// ***GENERAL NAV ANIMATIONS***

$(document).ready(function(){

// HEADER ANIMATION

var fixoriginal = $(".siteheader").css("top");

$(".btn").click(function(){
    $(".siteheader").animate({top: "1vh", right: "13vw"},700);
    $("#name").animate({fontSize: "2rem"},300);
    $("#jobtitle").animate({fontSize: "1rem"},300);
    $("#linkgroup").animate({lineHeight: "2.5rem"},300);
});

$(".close").click(function(){
    $(".siteheader").animate({top: "calc(50vh - 100px)",right: "30vw"},700);
    $("#name").animate({fontSize: "3rem"},300);
    $("#jobtitle").animate({fontSize: "1.2rem"},300);
    $("#linkgroup").animate({lineHeight: "3rem"},300);
});

// WORK BUTTON ANIMATION

// function workopen(){

//     $(".btntext").animate({left: "90vw"},300);
    
//     $(".btnwork").animate({width: "100vw"},300);
//     $(".btnwork").css("z-index","0");

//     $(".btnbio").animate({width: "10vw"},300);
//     $(".btnbio").css("z-index","2");

//     $(".btncontact").animate({width: "10vw"},300);
//     $(".btncontact").css("z-index","2");

//     $(".workframe").fadeIn(0);
//     $(".frame").delay(300).animate({bottom: "0vh"},700);
// };

// $(".btnwork").click(workopen);

// BIO BUTTON ANIMATION

function bioopen(){

    $(".btntext").animate({left: "90vw"},300);

    $(".btnbio").animate({width: "100vw"},300);
    $(".btnbio").css("z-index","0");

    $(".btnwork").animate({width: "10vw"},300);
    $(".btnwork").css("z-index","2");

    $(".btncontact").animate({width: "10vw"},300);
    $(".btncontact").css("z-index","2");

    $(".bioframe").fadeIn(0);
    $(".frame").delay(200).animate({bottom: "0vh"},700);
};

$(".btnbio").click(bioopen);

// CONTACT BUTTON ANIMATION

function contactopen(){

    $(".btntext").animate({left: "90vw"},300);

    $(".btncontact").animate({width: "100vw"},300);
    $(".btncontact").css("z-index","0");

    $(".btnwork").animate({width: "10vw"},300);
    $(".btnwork").css("z-index","2");

    $(".btnbio").animate({width: "10vw"},300);
    $(".btnbio").css("z-index","2");

    $(".contactframe").fadeIn(0);
    $(".frame").delay(200).animate({bottom: "0vh"},700);
};

$(".btncontact").click(contactopen);

// ***CLOSE BUTTONS***

// WORK CLOSE

// function workclose(){

//     $(".frame").animate({bottom: "-100vh"},700);

//     $(".btntext").delay(500).animate({left: "71vw"},300);
//     $(".btnwork").delay(500).animate({width: "29vw"},300);
//     $(".btnbio").delay(500).animate({width: "29vw"},300);
//     $(".btncontact").delay(500).animate({width: "29vw"},300);

//     $(".btnbio").css("z-index","0");
//     $(".btncontact").css("z-index","0");

//     $(".btnwork, .btnbio, .btncontact").css("color","white");

//     $(".workframe").delay(700).fadeOut(0);
// };

// $(".workclose").click(workclose);

// BIO CLOSE

function bioclose(){
    
    $(".frame").animate({bottom: "-100vh"},700);

    $(".btntext").delay(500).animate({left: "71vw"},300);
    $(".btnwork").delay(500).animate({width: "29vw"},300);
    $(".btnbio").delay(500).animate({width: "29vw"},300);
    $(".btncontact").delay(500).animate({width: "29vw"},300);

    $(".btnwork").css("z-index","0");
    $(".btncontact").css("z-index","0");

    $(".btnwork, .btnbio, .btncontact").css("color","white");

    $(".bioframe").delay(700).fadeOut(0);
};

$(".bioclose").click(bioclose);

// CONTACT CLOSE

function contactclose(){

    $(".frame").animate({bottom: "-100vh"},700);

    $(".btntext").delay(500).animate({left: "71vw"},300);
    $(".btnwork").delay(500).animate({width: "29vw"},300);
    $(".btnbio").delay(500).animate({width: "29vw"},300);
    $(".btncontact").delay(500).animate({width: "29vw"},300);

    $(".btnwork").css("z-index","0");
    $(".btnbio").css("z-index","0");

    $(".btnwork, .btnbio, .btncontact").css("color","white");

    $(".contactframe").delay(700).fadeOut(0);
};

$(".contactclose").click(contactclose);

// OTHER NAV BUTTON CLOSE FUNCTION

// var workstate = $(".btnwork").css("width");
// var biostate = $(".btnbio").css("width");
// var contactstate = $(".btncontact").css("width");
// var open = "100vw";

// if (workstate = open) {
//     $(".btnwork").click(workclose);
// }
// else if (workstate = open) {
//     $(".btnbio").click(workclose);
//     $(".btnbio").click(bioopen);
// }
// else if (workstate = open) {
//     $(".btncontact").click(workclose);
//     $(".btncontact").click(contactopen);
// }
// else if (biostate = open) {
//     $(".btnwork").click(workclose);
//     $(".btnwork").click(bioopen);
// }
// else if (workstate = open) {
//     $(".btnbio").click(workclose);
// }
// else if (workstate = open) {
//     $(".btncontact").click(workclose);
//     $(".btncontact").click(contactopen);
// }
// else if (contactstate = open) {
//     $(".btnbio").click(workclose);
//     $(".btnbio").click(bioopen);
// }
// else if (workstate = open) {
//     $(".btnwork").click(workclose);
//     $(".btnwork").click(contactopen);
// }
// else if (workstate = open) {
//     $(".btncontact").click(workclose);
// }

// });


function workbutton(){

    var currentstate = $(".workframe").css("display");
    var open = "block";
    var closed = "none";

    if (currentstate = closed) {
        $(this).click(workopen);
    }
    else if (currentstate = open) {
        $(this).click(workclose);
    }

    function workopen(){

        $(".btntext").animate({left: "90vw"},300);
        
        $(".btnwork").animate({width: "100vw"},300);
        $(".btnwork").css("z-index","0");
    
        $(".btnbio").animate({width: "10vw"},300);
        $(".btnbio").css("z-index","2");
    
        $(".btncontact").animate({width: "10vw"},300);
        $(".btncontact").css("z-index","2");
    
        $(".workframe").fadeIn(0);
        $(".frame").delay(300).animate({bottom: "0vh"},700);
    };


    function workclose(){

        $(".frame").animate({bottom: "-100vh"},700);
    
        $(".btntext").delay(500).animate({left: "71vw"},300);
        $(".btnwork").delay(500).animate({width: "29vw"},300);
        $(".btnbio").delay(500).animate({width: "29vw"},300);
        $(".btncontact").delay(500).animate({width: "29vw"},300);
    
        $(".btnbio").css("z-index","0");
        $(".btncontact").css("z-index","0");
    
        $(".btnwork, .btnbio, .btncontact").css("color","white");
    
        $(".workframe").delay(700).fadeOut(0);
    };
};



$(".btnwork").click(workbutton);
});









// var modalw = document.getElementById("workmodal");

// var btnw = document.getElementById("navwork");


// var spanw = document.getElementById("workclose");

// var wmod = document.getElementbyId("wmod");

// btnw.onclick = function() {
//     modalw.style.display = "block";
//     wmod.animate({bottom: '0'});
// }


// spanw.onclick = function() {
//     wmod.animate({bottom: '-100vh'});
//     modalw.style.display = "none";
// }


// window.onclick = function(event) {
//     if (event.target == wmod) {
//         modalw.style.display = "none";
//     }
// }




// var modalb = document.getElementById("biomodal");
// var btnb = document.getElementById("navbio");
// var spanb = document.getElementById("bioclose");

// btnb.onclick = function() {
//     modalb.style.display = "block";
// }

// spanb.onclick = function() {
//     modalb.style.display = "none";
// }

// window.onclick = function(event) {
//     if (event.target == modalb) {
//     modalb.style.display = "none";
//     }
// }



// var modalc = document.getElementById("contactmodal");
// var btnc = document.getElementById("navcontact");
// var spanc = document.getElementId("contactclose");

// btnc.onclick = function() {
//     modalc.style.display = "block";
// }

// spanc.onclick = function() {
//     modalc.style.display = "none";
// }

// window.onclick = function(event) {
//     if (event.target == modalc) {
//         modalc.style.display = "none";
//     }
// }
