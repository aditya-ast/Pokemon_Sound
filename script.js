var numberOfPokemon=document.querySelectorAll(".pokemon").length;
for(var i=0; i<numberOfPokemon; i++)
{
    document.querySelectorAll(".pokemon")[i].addEventListener("click",function(){

        var buttonInnerHtml=this.innerHtml;

        makeSound(buttonInnerHtml);
        buttonAnimation(buttonInnerHtml);
    })
}




document.addEventListener("keypress", function (event) {
    makeSound(event.key)
});
function makeSound(key) {
    switch (key) {
        case "p":
            new Audio("Sound/Pokemon Sound - Pikachu.mp3").play();
            break;
        case "c":
            new Audio("Sound/Charmander.mp3").play();
            break;
        case "s":
            new Audio("Sound/Squirtle Squirtle.mp3").play();
            break;
        case "b":
            new Audio("Sound/Bulbasaur.mp3").play();
            break;
        case "j":
            new Audio("Sound/Jigglypuff.mp3").play();
            break;
        case "t":
            new Audio("Sound/Togepi pokemon.mp3").play();
            break;
        case "l":
            new Audio("Sound/Psyduck.mp3").play();
            break;
    }
}