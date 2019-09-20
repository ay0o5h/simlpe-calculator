$(document).ready(function(){
 $(".maintwo").hide();
 $(".btn-light").click(function(){
     $(".maintwo").show();
 var inpute=document.getElementById('in').value;
 $("#btn7").click(function(){
     var btn7=document.getElementById('btn7').value;
     $("#in").val(inpute += btn7);

 });
 $("#btn8").click(function(){
    var btn8=document.getElementById('btn8').value;
    $("#in").val(inpute += btn8);

});
$("#btn9").click(function(){
    var btn9=document.getElementById('btn9').value;
    $("#in").val(inpute += btn9);

});
$("#del").click(function(){
    var del=document.getElementById('del').value;
    $("#in").val(inpute = del);

});
$("#btn4").click(function(){
    var btn4=document.getElementById('btn4').value;
    $("#in").val(inpute += btn4);

});
$("#btn5").click(function(){
   var btn5=document.getElementById('btn5').value;
   $("#in").val(inpute += btn5);

});
$("#btn6").click(function(){
   var btn6=document.getElementById('btn6').value;
   $("#in").val(inpute += btn6);

});
$("#btne").click(function(){
    var btne=document.getElementById('btne').value=eval(inpute);
    $("#in").val(btne);

});
$("#btn1").click(function(){
    var btn1=document.getElementById('btn1').value;
    $("#in").val(inpute += btn1);

});
$("#btn2").click(function(){
   var btn2=document.getElementById('btn2').value;
   $("#in").val(inpute += btn2);

});
$("#btn3").click(function(){
   var btn3=document.getElementById('btn3').value;
   $("#in").val(inpute += btn3);

});
$("#btnd").click(function(){
   var btnd=document.getElementById('btnd').value;
   $("#in").val(inpute +=btnd);

});
$("#btn0").click(function(){
    var btn0=document.getElementById('btn0').value;
    $("#in").val(inpute += btn0);
    

});
$("#btnp").click(function(){
    var btnp=document.getElementById('btnp').value;
    $("#in").val(inpute += btnp);
    

});
 $("#btnm").click(function(){
    var btnm=document.getElementById('btnm').value;
    $("#in").val(inpute += btnm);
    

});
$("#btnn").click(function(){
    var btnn=document.getElementById('btnn').value;
    $("#in").val(inpute += btnn);
    

});
 })
})
