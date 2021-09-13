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
    let lenght = array.lenght;
    let number = Math.floor(Math.random * lenght);
    element.innerHTML = array[number];
}
