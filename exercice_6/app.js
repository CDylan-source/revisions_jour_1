window.addEventListener('load', function () {
    document.body.style.backgroundColor = "black";
});

window.addEventListener('keydown', function (e) {
    console.log(e);
    if ((e.code.match(/Key.*/) && e.code != "KeyM") || e.code == "Semicolon") {
        if(e.code == "KeyR"){
            document.body.style.backgroundColor = "darkred";
        }
        else if(e.code ==  "KeyG"){
            document.body.style.backgroundColor = "lightgreen";
        }
        else if(e.code ==  "KeyB"){
            document.body.style.backgroundColor = "lightblue";
        }
        else if(e.code ==  "KeyP"){
            document.body.style.backgroundColor = "hotpink";
        }
        else if(e.code ==  "KeyY"){
            document.body.style.backgroundColor = "yellow";
        }
        else{
            document.body.style.backgroundColor = "white";
        }
    }
    else if(e.code == "ArrowUp"){
        document.querySelector('button').className = "visible";
    }
})