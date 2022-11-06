function lightFont(){
    var x = document.getElementById("mainChar");
    style = window.getComputedStyle(x, null).getPropertyValue('font-weight');
    currentSize = parseFloat(style);
    x.style.fontWeight = (currentSize-100);
}
function darkFont(){
    var x = document.getElementById("mainChar");
    style = window.getComputedStyle(x, null).getPropertyValue('font-weight');
    currentSize = parseFloat(style);
    x.style.fontWeight = (currentSize+100);
}
function itFont(){
    var Hid = document.getElementById("mainChar");
    Hid.style.fontStyle = "italic";
}
function norFont(){
    var Hid = document.getElementById("mainChar");
    Hid.style.fontStyle = "normal";
  
}
function changeMain(newMain){
    String = newMain;
    document.getElementById("mainChar").innerHTML = newMain;
}