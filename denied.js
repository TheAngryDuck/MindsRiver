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



