
var sett=document.getElementById("sett");
var parent=document.getElementById("parent");

var color1=document.getElementById("color1");
var color2=document.getElementById("color2");
var color3=document.getElementById("color3");
var color4=document.getElementById("color4");



/****************************************************** */

sett.addEventListener("click",function(){
    parent.classList.toggle("par");
});
/******************************************************************** */




/**************************************************************** */
color1.addEventListener("click",function(){
    var x = document.createElement("STYLE");
    var t = document.createTextNode("h2 {color: #ec1839;}");
    x.appendChild(t);

    document.head.appendChild(x);
});

color1.addEventListener("click",function(){
    var x = document.createElement("STYLE");
    var t = document.createTextNode("h2 {color: #ec1839;}");
    x.appendChild(t);

    document.head.appendChild(x);
});

color2.addEventListener("click",function(){
    var x = document.createElement("STYLE");
    var t = document.createTextNode("h2 {color: #2196f3;}");
    x.appendChild(t);

    document.head.appendChild(x);
});

color3.addEventListener("click",function(){
    var x = document.createElement("STYLE");
    var t = document.createTextNode("h2 {color: #fa5b0f;}");
    x.appendChild(t);

    document.head.appendChild(x);
});

color4.addEventListener("click",function(){
    var x = document.createElement("STYLE");
    var t = document.createTextNode("h2 {color: #72b626;}");
    x.appendChild(t);

    document.head.appendChild(x);
});

/************************************************** */








  /*color1.addEventListener("click",function(){
    var head=document.querySelectorAll("h2");

    head.style.color="#ec1839";
});//style="display: block;"*/

/*    var sett=document.getElementById("sett");
    var colors=document.getElementById("colors");*/