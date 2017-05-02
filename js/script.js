/********************************************************************************

 TABLE OF CONTENTS

 WINDOW
    Open window
    Close window
 FLOATING LABEL
 SCROLL FUNCTIONS
 ONCLICK

 ********************************************************************************/



/********************************************************************************

 WINDOW

 ********************************************************************************/

/********************************************************************************
 Open window
 ********************************************************************************/
$(document).on('click', '.btn-wdw', function(){
    //set all windows to close
    $('.wdw').removeClass('open');


    //open the target window
    var wdwClassToOpen = this.id; //get the id
    var wdwSelector = $('.'+wdwClassToOpen);
    //open matching window
    wdwSelector.addClass('open');

    //if there is a halfwidth image, animate it
    $('.'+wdwClassToOpen + ' .image-half-width').addClass('animated slideInLeft');

});


/********************************************************************************
 Open profile
 ********************************************************************************/

$(document).on('click', '.btn-wdw-profile', function(){
    fnOpenProfile();
});

function fnOpenProfile() {
    $('.wdw').removeClass('open');
    $('.wdw-profile').addClass('open');
    $('nav.main').removeClass("nav-small");
}

/********************************************************************************
 Open login
 ********************************************************************************/

$(document).on('click', '.btn-wdw-login', function(){
    fnOpenLogin();
});

function fnOpenLogin() {
    $('.wdw').removeClass('open');
    $('.wdw-login').addClass('open');
    $('nav.main').removeClass("nav-small");
    $('.wdw-login .image-half-width').addClass('animated slideInLeft');
}

/********************************************************************************
 Open register
 ********************************************************************************/

$(document).on('click', '.btn-wdw-register', function(){
    fnOpenRegister();
});

function fnOpenRegister() {
    $('.wdw').removeClass('open');
    $('.wdw-register').addClass('open');
    $('nav.main').removeClass("nav-small");
}

/********************************************************************************
 Open results
 ********************************************************************************/
$(document).on('click', '.btn-wdw-results', function(){
    fnOpenResults();
});

function fnOpenResults() {
    $('.wdw').removeClass('open');
    $('.wdw-results').addClass('open');
    $('nav.main').removeClass("nav-small");
}

/********************************************************************************
 Close window
 ********************************************************************************/

$(document).on('click', '.btn-close', function(){
    //get the parent class which is not wdw
    var wdwClassList = this.parentNode.classList;

    for(var i = 0; i < wdwClassList.length; i++){
        if (wdwClassList[i].match("^wdw-")) { // class begins with wdw-
            var wdwClassToClose = wdwClassList[i]; //save this class
        }
    }

    //close wdw with matching class
    $('.'+wdwClassToClose).removeClass('open');

});

/********************************************************************************

 FLOATING LABEL

 ********************************************************************************/
//add active class to label on focus of input
$(document).on('click', '.floating-label', function(){
    $( this ).siblings( "label" ).addClass('active');
});

/* FORM LABELS FLOAT WHEN INPUT != EMPTY */
//check once immediately, then setInterval
var is_chrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;

function fnCheckInputEmpty() {
    var sAllLabels = $(".floating-label");
    //loop through every element with class .floating-label
    sAllLabels.each(function() {
        var hasValue = $(this).val().length > 0;//Normal
        if(!hasValue){
            if(is_chrome)
            {
                hasValue = $(":-webkit-autofill", this).length > 0;//Chrome
            }

        }
        if (hasValue) {
            $(this).siblings( "label" ).addClass('active');
        }
    });
}

fnCheckInputEmpty();
setInterval(fnCheckInputEmpty, 1000);

$('input.floating-label').blur(function()
{
    if( !$(this).val() ) {
        $(this).siblings( "label" ).removeClass('active');
    }else{
        $(this).siblings( "label" ).addClass('active');
    }
});

/********************************************************************************

 SCROLL FUNCTIONS

 ********************************************************************************/

var windowHeight = $(window).height();   // Get the window height.

$(document).on("scroll", function () { // Do this on scroll in .wdw
    fnMenuEffectScroll(this);

}).on("resize", function(){ // If the user resizes the window
    windowHeight = $(this).height(); // you'll need the new height value
});

$('.wdw').on("scroll", function () { // Do this on scroll in .wdw
    fnMenuEffectScroll(this);
});


function fnMenuEffectScroll(that) {
    if ($(that).scrollTop() > (windowHeight/10) ) {
        $('nav.main').addClass("nav-small");
    } else {
        $('nav.main').removeClass("nav-small");
    }
}


/********************************************************************************
 Smooth scrolling
 ********************************************************************************/

$(document).on('click', 'a', function(event){
    var attr = $(this).attr('data-smooth-scroll');
     this.blur();

// For some browsers, `attr` is undefined; for others,
// `attr` is false.  Check for both.
    if (typeof attr !== typeof undefined && attr !== false) {
        event.preventDefault();

        $('.wdw.open').animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top-100
        }, 500);
        console.log("animating window");

    }
});



/********************************************************************************

 ON CLICK

 ********************************************************************************/

$(document).on('click', '.btn-home', function(){
    //close all windows
    $('.wdw').removeClass('open');
    $('.wdw-flight').addClass('open');
    $('nav.main').removeClass("nav-small");
});

$(document).on('click', '.btn-menu', function(){
    $('.menu').css('display','flex');
});

$(document).on('click', '.menu-item', function(){
    $('.menu').hide();
});
$(document).on('click', '.btn-close-menu', function(){
    $('.menu').hide();
});

//
//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//
//
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
//               Buddha bless the code
//