function* Superhero() {
    yield "Человек-Паук";
    yield "Железный человек";
    yield "Халк";
    yield "Росомаха";
    yield "Капитан Америка";
}
let superhero = Superhero();
function NEXT() {
    let current = superhero.next();
    let currentHero = current.value;
    if (!current.done){
        let button = document.getElementById("superH");
        button.setAttribute("value", "Следующий супергерой");
        let t = document.createTextNode(currentHero);
        let div = document.getElementById("div");
        let ul = document.getElementById("ul");
        let li = document.createElement("li");
        li.appendChild(t);
        ul.appendChild(li);
        div.appendChild(ul);
    } else {
        let button = document.getElementById("superH");
        button.setAttribute("value", "Закончились супергерои");
    }
}
