/********************************************************************************

 TABLE OF CONTENTS

 WINDOW
    Open window
    Close window
 FLOATING LABEL
 SCROLL FUNCTIONS

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


/********************************************************************************

 SCROLL FUNCTIONS

 ********************************************************************************/

var windowHeight = $(window).height();   // Get the window height.
$('.wdw').on("scroll", function () { // Do this on scroll in .wdw
    if ($(this).scrollTop() > (windowHeight/10) ) {
        console.log("scrolling state");
        $('nav.main').addClass("nav-small");
    } else {
        $('nav.main').removeClass("nav-small");
    }
}).on("resize", function(){ // If the user resizes the window
    windowHeight = $(this).height(); // you'll need the new height value
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