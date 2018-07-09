function google_link() {
    location.href = "http://google.com";
}
function show_image() {
    var w = window.open();
    w.document.write("<img src = 'image/USA_Declaration.jpg'>");
    w.document.close();
}
function five_properties() {
    var human = new Object();
    human.name = "Женя";
    human.age = 30;
    human.height = 183;
    human.waight = 83;
    human.color_eyes = "Green";
    console.log(human);
    var elemDiv = document.createElement("div.human");
    var str = new String();
    for(var x  in human) {
        str += x  + ": " + human[x] + "<br>";
    }
    elemDiv.innerHTML = str;
    document.body.appendChild(elemDiv);
}

