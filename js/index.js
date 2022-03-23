$(document).ready(function() {


// Title & Nav Opened/Closed

    var space1open = "0%";
    var space2open = "45%";
    var space3open = "0%";

    var space1close = "30%";
    var space2close = "25px";
    var space3close = "10%";

    var speed1 = 300;

    function titleopen() {
        $(".space1").animate({height: space1open},speed1,"linear");
        $(".space3").animate({height: space3open},speed1,"linear");
        $(".space2").animate({height: space2open},speed1,"linear");
    };

    function titleclose() {
        $(".space1").animate({height: space1close},speed1,"linear");
        $(".space3").animate({height: space3close},speed1,"linear");
        $(".space2").animate({height: space2close},speed1,"linear");
    };

// Nav Button Width Change

    var close = "225px";
    var mid = "58px";
    var open = "3000px";

    function btnopen() {
        $(this).animate({width: open},speed1,"linear");
    };

    function btnclose() {
        $(this).animate({width: close},speed1,"linear");
    };

    function btnmid() {
        $(this).animate({width: mid},speed1,"linear");
    };

// Nav Button Color Change

    function workcoloron() {

    };

    function workcoloroff() {

    };

});
// ^ document close



















