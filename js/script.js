/********************************************************************************

 TABLE OF CONTENTS

 WINDOW
    Open window
    Close window
 FLOATING LABEL

 ********************************************************************************/


/********************************************************************************

 WINDOW

 ********************************************************************************/

/********************************************************************************
 Open window
 ********************************************************************************/
$(document).on('click', '.btn-wdw', function(){
    //get the id
    var wdwClassToOpen = this.id;
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

$(document).on('click', function(){

});

function floatLabel(inputType){
    $(inputType).each(function(){
        var $this = $(this);
        var text_value = $(this).val();

        // on focus add class "active" to label
        $this.focus(function(){
            $this.next().addClass("active");
        });

        // on blur check field and remove class if needed
        $this.blur(function(){
            if($this.val() === '' || $this.val() === 'blank'){
                $this.next().removeClass();
            }
        });

        // Check input values on postback and add class "active" if value exists
        if(text_value!=''){
            $this.next().addClass("active");
        }
    });

    // Automatically remove floatLabel class from select input on load
    $( "select" ).next().removeClass();
}
// Add a class of "floatLabel" to the input field
floatLabel(".floatLabel");