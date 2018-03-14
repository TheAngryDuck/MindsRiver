

//////////F12 disable code////////////////////////
document.onkeypress = function (event) {
    event = (event || window.event);
    if (event.keyCode === 123) {
        alert('NO!');
        return false;
    }
}


document.onmousedown = function (event) {
    event = (event || window.event);
    if (event.keyCode === 123) {
        alert('NO!');
        return false;
    }
}


document.onkeydown = function (event) {
        event = (event || window.event);
        if (event.keyCode === 123) {
            alert('NO!');
            return false;
        }
    }


    /////////////////////end///////////////////////
var message="No no no :)";
///////////////////////////////////
function clickIE() {
    if (document.all) {
        alert(message);
        return false;
}}
function clickNS(e) {
    if (document.layers||(document.getElementById&&!document.all)) {
    if (e.which===2||e.which===3) {
        alert(message);
        return false;
    }}}
if (document.layers) {
    document.captureEvents(Event.MOUSEDOWN);document.onmousedown=clickNS;
} else{
    document.onmouseup=clickNS;
    document.oncontextmenu=clickIE;
}
document.oncontextmenu=new Function("return false")


