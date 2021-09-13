const create = document.getElementById('create');
create.appendChild(document.createElement("p"));
const firstname = "Dylan";
const lastname = "Chapuis";
create.lastChild.innerHTML = "Votre nom est <span>" + lastname + "</span> et votre prénom est <span>" + firstname + "</span>";

const square = document.querySelector('#unique_event div');
console.log(square);
square.addEventListener('click', function(){
    square.classList = "round";
});


const dice = document.querySelector('#multiple_events button');
let films = Array('Matrix', 'Terminator 2', "Légendes d'automne", 'Mr Nobody', 'La vie rêvée de Walter Mitty');
console.log(films);
function choice(array, element){
    let length = array.length;
    let number = Math.floor(Math.random() * length);
    element.innerHTML = array[number];
}
const results = document.querySelector('#multiple_events p')
dice.addEventListener('click', function(e){
    choice(films, results)});


const input = document.querySelector('#value input');
const button = document.querySelector('#value button');
const p = document.querySelector('#value p');
const min = new RegExp('[a-zéàùêâûôèîçäëïüö]');
const maj = new RegExp('[A-ZÉÀÙÊÂÛÔÎÈÇÄËÏÜÖ]');
button.addEventListener('click', function(){
    if(input.value == ""){
        p.innerHTML = "Vous n'avez rien rentré dans l'input";
    }
    else{
        p.innerHTML = "";
        for(i = 0; i < input.value.length; i++){
            if(min.test(input.value[i])){
                p.innerHTML += input.value[i].toUpperCase();
            }
            else if(maj.test(input.value[i])){
                p.innerHTML += input.value[i].toLowerCase();
            }
            else{
                p.innerHTML += input.value[i];
            }
        }
    }
});