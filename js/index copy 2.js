$(document).ready(function() {


// ***************
// ***************
// ***VARIABLE LIBRARY***
// ***************
// ***************
    
var block = "block";
var none = "none";

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

var textmarginstart = "0px";
var textmarginopen = "1600px";

// ***************
// ***************
// ***FUNCTION LIBRARY***
// ***************
// ***************

// ***************
// dark mode function library
// ***************

function godark() {
    $(".lightswitch").fadeIn(0);
    $(".darkswitch").fadeOut(0);
    $(".main").toggleClass("mainlight maindark");
    $(".linkedin").toggleClass("linkedinlight linkedindark");
    $(".btnworklight").toggleClass("btnworklight btnworkdark");
    $(".btnbiolight").toggleClass("btnbiolight btnbiodark");
    $(".btncontactlight").toggleClass("btncontactlight btncontactdark");
    $(".btnworklightclick").toggleClass("btnworklightclick btnworkdarkclick");
    $(".btnbiolightclick").toggleClass("btnbiolightclick btnbiodarkclick");
    $(".btncontactlightclick").toggleClass("btncontactlightclick btncontactdarkclick");
    $(".workframe").toggleClass("workframelight workframedark");
    $(".workmodal").toggleClass("workmodallight workmodaldark");
    $(".worktitlelight").toggleClass("worktitlelight worktitledark");
};

function golight() {
    $(".darkswitch").fadeIn(0);
    $(".lightswitch").fadeOut(0);
    $(".main").toggleClass("mainlight");
    $(".main").toggleClass("maindark");
    $(".linkedin").toggleClass("linkedinlight");
    $(".linkedin").toggleClass("linkedindark");
    $(".btnworkdark").toggleClass("btnworklight btnworkdark");
    $(".btnbiodark").toggleClass("btnbiolight btnbiodark");
    $(".btncontactdark").toggleClass("btncontactlight btncontactdark");
    $(".btnworkdarkclick").toggleClass("btnworkdarkclick btnworklightclick");
    $(".btnbiodarkclick").toggleClass("btnbiodarkclick btnbiolightclick");
    $(".btncontactdarkclick").toggleClass("btncontactdarkclick btncontactlightclick");
    $(".workframe").toggleClass("workframedark workframelight");
    $(".workmodal").toggleClass("workmodaldark workmodallight");
    $(".worktitledark").toggleClass("worktitledark worktitlelight");
};



// ***************
// nav&links function library
// ***************

// ***************
// reset function

function btnstostart() {
    $(".space1").animate({height: space1start},buttonspeed,"linear");
    $(".space3").animate({height: space3start},buttonspeed,"linear");
    $(".space2").animate({height: space2start},buttonspeed,"linear");
    $(".btnwork").animate({width: btnwidthstart},buttonspeed,"linear");
    $(".btnbio").animate({width: btnwidthstart},buttonspeed,"linear");
    $(".btncontact").animate({width: btnwidthstart},buttonspeed,"linear");
    $(".workbtntext").fadeIn(buttonspeed,"linear");
    $(".biobtntext").fadeIn(buttonspeed,"linear");
    $(".contactbtntext").fadeIn(buttonspeed,"linear");
}

function btnstostartshort() {
    $(".btnwork").animate({width: btnwidthstart},buttonspeed,"linear");
    $(".btnbio").animate({width: btnwidthstart},buttonspeed,"linear");
    $(".btncontact").animate({width: btnwidthstart},buttonspeed,"linear");
    $(".workbtntext").fadeIn(buttonspeed,"linear");
    $(".biobtntext").fadeIn(buttonspeed,"linear");
    $(".contactbtntext").fadeIn(buttonspeed,"linear");
}

// ***************
// work button functions

// add selection color work button

function btnworkcolor() {
    if ($(".darkswitch").css("display") == block) {
        $(".btnwork").addClass("btnworklightclick");
    }
    else {
        $(".btnwork").addClass("btnworkdarkclick");
    }
};

// reset color work button

function btnworkcolorreset() {
    if ($(".darkswitch").css("display") == block) {
        $(".btnwork").removeClass("btnworklightclick");
    }
    else {
        $(".btnwork").removeClass("btnworkdarkclick");
    }
};

// activate work button

function btnstoworkopen() {
    $(".space1").animate({height: space1open},buttonspeed,"linear");
    $(".space3").animate({height: space3open},buttonspeed,"linear");
    $(".space2").animate({height: space2open},buttonspeed,"linear");
    $(".btnwork").animate({width: btnwidthopened},buttonspeed,"linear");
    $(".btnbio").animate({width: btnwidthclosed},buttonspeed,"linear");
    $(".btncontact").animate({width: btnwidthclosed},buttonspeed,"linear");
    $(".biobtntext").fadeOut(buttonspeed,"linear");
    $(".contactbtntext").fadeOut(buttonspeed,"linear");
};

function btnstoworkopenshort() {
    $(".btnwork").animate({width: btnwidthopened},buttonspeed,"linear");
    $(".btnbio").animate({width: btnwidthclosed},buttonspeed,"linear");
    $(".btncontact").animate({width: btnwidthclosed},buttonspeed,"linear");
    $(".biobtntext").fadeOut(buttonspeed,"linear");
    $(".contactbtntext").fadeOut(buttonspeed,"linear");
}

// activate work modal

function workmodalopen() {
    $(".workframe").fadeIn();
    $(".pagemodals").animate({bottom: "0"},buttonspeed,"linear");
};

// close work modal

function workmodalclose() {
    $(".pagemodals").animate({bottom: "-100%"},buttonspeed,"linear");
    $(".workframe").delay(buttonspeed).fadeOut();
};

// ***************
// bio button functions

// add selection color bio button

function btnbiocolor() {
    if ($(".darkswitch").css("display") == block) {
        $(".btnbio").addClass("btnbiolightclick");
    }
    else {
        $(".btnbio").addClass("btnbiodarkclick");
    }
};

// reset color bio button

function btnbiocolorreset() {
    if ($(".darkswitch").css("display") == block) {
        $(".btnbio").removeClass("btnbiolightclick");
    }
    else {
        $(".btnbio").removeClass("btnbiodarkclick");
    }
};

// activate bio button

function btnstobioopen() {
    $(".space1").animate({height: space1open},buttonspeed,"linear");
    $(".space3").animate({height: space3open},buttonspeed,"linear");
    $(".space2").animate({height: space2open},buttonspeed,"linear");
    $(".btnwork").animate({width: btnwidthclosed},buttonspeed,"linear");
    $(".btnbio").animate({width: btnwidthopened},buttonspeed,"linear");
    $(".btncontact").animate({width: btnwidthclosed},buttonspeed,"linear");
    $(".workbtntext").fadeOut(buttonspeed,"linear");
    $(".contactbtntext").fadeOut(buttonspeed,"linear");
};

function btnstobioopenshort() {
    $(".btnwork").animate({width: btnwidthclosed},buttonspeed,"linear");
    $(".btnbio").animate({width: btnwidthopened},buttonspeed,"linear");
    $(".btncontact").animate({width: btnwidthclosed},buttonspeed,"linear");
    $(".workbtntext").fadeOut(buttonspeed,"linear");
    $(".contactbtntext").fadeOut(buttonspeed,"linear");
}

// activate bio modal

function biomodalopen() {
    $(".bioframe").fadeIn();
    $(".pagemodals").animate({bottom: "0"},buttonspeed,"linear");
};

// close bio modal

function biomodalclose() {
    $(".pagemodals").animate({bottom: "-100%"},buttonspeed,"linear");
    $(".bioframe").delay(buttonspeed).fadeOut();
};

// ***************
// contact button functions

// add selection color contact button

function btncontactcolor() {
    if ($(".darkswitch").css("display") == block) {
        $(".btncontact").addClass("btncontactlightclick");
    }
    else {
        $(".btncontact").addClass("btncontactdarkclick");
    }
};

// reset color contact button
function btncontactcolorreset() {
    if ($(".darkswitch").css("display") == block) {
        $(".btncontact").removeClass("btncontactlightclick");
    }
    else {
        $(".btncontact").removeClass("btncontactdarkclick");
    }
};

// activate contact button
function btnstocontactopen() {
    $(".space1").animate({height: space1open},buttonspeed,"linear");
    $(".space3").animate({height: space3open},buttonspeed,"linear");
    $(".space2").animate({height: space2open},buttonspeed,"linear");
    $(".btnwork").animate({width: btnwidthclosed},buttonspeed,"linear");
    $(".btnbio").animate({width: btnwidthclosed},buttonspeed,"linear");
    $(".btncontact").animate({width: btnwidthopened},buttonspeed,"linear");
    $(".workbtntext").fadeOut(buttonspeed,"linear");
    $(".biobtntext").fadeOut(buttonspeed,"linear");
};

function btnstobioopenshort() {
    $(".btnwork").animate({width: btnwidthclosed},buttonspeed,"linear");
    $(".btnbio").animate({width: btnwidthclosed},buttonspeed,"linear");
    $(".btncontact").animate({width: btnwidthopened},buttonspeed,"linear");
    $(".workbtntext").fadeOut(buttonspeed,"linear");
    $(".biobtntext").fadeOut(buttonspeed,"linear");
}

// activate contact modal

function contactmodalopen() {
    $(".contactframe").fadeIn();
    $(".pagemodals").animate({bottom: "0"},buttonspeed,"linear");
};

// close contact modal

function contactmodalclose() {
    $(".pagemodals").animate({bottom: "-100%"},buttonspeed,"linear");
    $(".contactframe").delay(buttonspeed).fadeOut();
};

// ***************
// modal function library
// ***************




// ***************
// ***************
// ***EVENT TRIGGERS***
// ***************
// ***************

// ***************
// dark mode event triggers
// ***************

$(".darkswitch").click(godark);
$(".lightswitch").click(golight);

// ***************
// navigation event triggers
// ***************

// ***************
// work button event triggers

$(".btnwork").click(function() {
    if ($(".btnwork").css("width") == btnwidthstart) {
        btnstoworkopen();
        btnworkcolor();
        workmodalopen();
    }
    else if ($(".btnwork").css("width") == btnwidthclosed && $(".btnbio").css("width") == btnwidthopened) {
        biomodalclose();
        btnstostartshort();
        btnbiocolorreset();
        btnstoworkopenshort();
        btnworkcolor();
        workmodalopen();
    }
    else if ($(".btnwork").css("width") == btnwidthclosed && $(".btncontact").css("width") == btnwidthopened) {
        contactmodalclose();
        btnstostartshort();
        btncontactcolorreset();
        btnstoworkopenshort();
        btnworkcolor();
        workmodalopen();
    }
    else {
        workmodalclose();
        btnstostart();
        btnworkcolorreset();
    }
});

// ***************
// bio button event triggers

$(".btnbio").click(function() {
    if ($(".btnbio").css("width") == btnwidthstart) {
        btnstobioopen();
        btnbiocolor();
        biomodalopen();
    }
    else if ($(".btnbio").css("width") == btnwidthclosed && $(".btnwork").css("width") == btnwidthopened) {
        workmodalclose();
        btnstostartshort();
        btnworkcolorreset();
        btnstobioopenshort();
        btnbiocolor();
        biomodalopen();
    }
    else if ($(".btnbio").css("width") == btnwidthclosed && $(".btncontact").css("width") == btnwidthopened) {
        contactmodalclose();
        btnstostartshort();
        btncontactcolorreset();
        btnstobioopenshort();
        btnbiocolor();
        biomodalopen();
    }
    else {
        biomodalclose();
        btnstostart();
        btnbiocolorreset();
    }
});

// ***************
// contact button event triggers

$(".btncontact").click(function() {
    if ($(".btncontact").css("width") == btnwidthstart) {
        btnstocontactopen();
        btncontactcolor();
        contactmodalopen();
    }
    else if ($(".btncontact").css("width") == btnwidthclosed && $(".btnwork").css("width") == btnwidthopened) {
        workmodalclose();
        btnstostartshort();
        btnworkcolorreset();
        btnstocontactopenshort();
        btncontactcolor();
        contactmodalopen();
    }
    else if ($(".btncontact").css("width") == btnwidthclosed && $(".btnbio").css("width") == btnwidthopened) {
        biomodalclose();
        btnstostartshort();
        btnbiocolorreset();
        btnstocontactopenshort();
        btncontactcolor();
        contactmodalopen();
    }
    else {
        contactmodalclose();
        btnstostart();
        btncontactcolorreset();
    }
});

// ***************
// close button event triggers

$(".workclose").click(function() {
    btnstostart();
    btnworkcolorreset();
    workmodalclose();
});

$(".bioclose").click(function() {
    btnstostart();
    btnbiocolorreset();
    biomodalclose();
});

$(".contactclose").click(function() {
    btnstostart();
    btncontactcolorreset();
    contactmodalclose();
});

});
// ^ document close



















