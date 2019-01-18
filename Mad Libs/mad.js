 var userInput1; var userInput2; var userInput3; var userInput4;
 var userInput5; var userInput6; var userInput7; var userInput8;
 var userInput9; var userInput10; var userInput11; var userInput12;
 var userInput13;


$(document).ready(function(){
    $("#button").click(function(){
        showInfo();
    })
 });

 function getInfo() {
    userInput1 = $("#userInput1").val();
    userInput2 = $("#userInput2").val();
    userInput3 = $("#userInput3").val();
    userInput4 = $("#userInput4").val();
    userInput5 = $("#userInput5").val();
    userInput6 = $("#userInput6").val();
    userInput7 = $("#userInput7").val();
    userInput8 = $("#userInput8").val();
    userInput9 = $("#userInput9").val();
    userInput10 =$("#userInput10").val();
    userInput11 =$("#userInput11").val();
    userInput12 =$("#userInput12").val();
    userInput13 =$("#userInput13").val();

}
function showInfo() {
  getInfo();
    var message = "Tommy the gangsta " + userInput1 + " was walking up the street to his " + userInput2 + " in the " + 
    userInput3 + ". But just as he came inside he saw that all his gangsta " + userInput4 + " had been replaced with " +
    userInput5 +  " stuff. He was so mad that he kicked his " + userInput6 + " and fell into the " + userInput7 + " Then, when he got out he started searching all of the " + userInput8 + ". But after 5 hours of looking around he saw a " + userInput9 + " walking around with all his bling. So, Tommy stopped the fool, and " + userInput10 + "  all the items that the " + userInput9 + " had stolen from him. 'Whats your problem you " + userInput11 + "!! If you wanna be a gangsta buy your own bling, and clothes, don`t steal mine' Tommy " + userInput12 + ". And then he went home and lived " + userInput13 + " ever after."
  
    $("#output").text(message).show();
}