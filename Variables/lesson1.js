/*
    Scope

    Global Variables - The variable can be used throughout the entire document/script

    Local Variables - The variables cab only be used in the section it was defined


*/
//Active

//****NOT NEEDED FOR HTML TRIGGERING */
$(document).ready(function(){
   $("button").click(function(){
       showInfo();
   })
});
//*************** */

//Definitions
var userName;

function getInfo() {
    userName = $("#userName").val();
}

function showInfo() {
    getInfo();
    var message = "Hello " + userName + ", glad to meet you";

    
    $("#output").text(message).show().animate({'top': '0px', "opacity": '1'}, slow);
    
}