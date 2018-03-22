

//////////F12 disable code////////////////////////
document.onkeypress = function (event) {
    event = (event || window.event);
    if (event.keyCode === 123) {
        alert('This is not intended for this page. Tread at your own risk!');
        return false;
    }
}



document.onmousedown = function (event) {
    event = (event || window.event);
    if (event.keyCode === 123) {
        alert('This is not intended for this page. Tread at your own risk!');
        return false;
    }
}



document.onkeydown = function (event) {
        event = (event || window.event);
        if (event.keyCode === 123) {
            alert('This is not intended for this page. Tread at your own risk!');
            return false;
        }
    }



    /////////////////////end///////////////////////
var message="This is not intended for this page. Tread at your own risk!";
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

document.oncontextmenu=new Function("return false");
document.onkeydown = function(e) {
    if(event.keyCode === 123) {
        alert("This is not intended for this page. Tread at your own risk!");
        return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode === 'I'.charCodeAt(0)){
        alert("This is not intended for this page. Tread at your own risk!");
        return false;

    }
    if(e.ctrlKey && e.shiftKey && e.keyCode === 'J'.charCodeAt(0)){
        alert("This is not intended for this page. Tread at your own risk!");
        return false;
    }
    if(e.ctrlKey && e.keyCode === 'U'.charCodeAt(0)){
        alert("This is not intended for this page. Tread at your own risk!");
        return false;
    }
    if (e.ctrlKey && e.keyCode === 'V'.charCodeAt(0)){
        alert("This is not intended for this page. Tread at your own risk!");
        return false;
    }
}



