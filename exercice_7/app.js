window.addEventListener('load', function(){
    document.querySelector('body>div').className = "deroule";
    document.querySelector('h1').className = "deroule_h1";
    document.querySelector('p').className = "deroule_p";
    document.querySelector('p:nth-of-type(2)').className = "deroule_p";
    document.querySelector('p:nth-of-type(3)').className = "deroule_p";
    document.querySelector('form').className = "deroule_form";
});

const p = document.querySelector('form p');
const form = document.querySelector('form');