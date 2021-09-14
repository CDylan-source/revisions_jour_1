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
const input = document.querySelector('input');

let i = 0;

let juste_prix = Math.round(Math.random() * 1000);
console.log(juste_prix);

form.addEventListener('submit', function(e){
    e.preventDefault();
    i++;
    let value = input.value;
    if(value < 0 || value > 1000){
        p.innerHTML = "Un nombre entre 0 et 1000 est requis";
        input.value = "";
    }
    else if(value < juste_prix){
        p.innerHTML = "C'est plus que " + value;
        input.value = "";
    }
    else if(value > juste_prix){
        p.innerHTML = "C'est moins que " + value;
        input.value = "";
    }
    else if(value == juste_prix){
        window.alert("Bravo tu l'as trouvé en " + i + " coup(s) !")
        p.innerHTML = "Tu peux retenter si tu veux&nbsp!";
        juste_prix = Math.round(Math.random() * 1000);
        console.log(juste_prix);
        input.value = "";
        i = 0;
    }
    else{
        p.innerHTML = "Mais ce n'est pas un nombre&nbsp!"
        input.value = "";
    }
})