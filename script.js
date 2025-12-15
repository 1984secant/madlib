let who = document.getElementById("n");
let whereType = document.getElementById("placeType");
let where = document.getElementById("place");
let v = document.getElementById("verb");
let ad = document.getElementById("adj");
let fd = document.getElementById("food");
let who2 = document.getElementById("n2");
let what = document.getElementById("obj");
let vd = document.getElementById("ved");
let vd2 = document.getElementById("ved2");
let ad2 = document.getElementById("adj");
let sbm = document.getElementById("submit");


sbm.addEventListener('click', madlib)

function madlib() {
    document.getElementById("mads").innerHTML = " " + who + " enters a " + whereType + "that\’s called" + where + ". Inside that place, they go and" + verb + " a " + ad + fd + ". While approaching the register, their friend "+ who +" enters the building. "+ who2 +" approaches "+ who +" and asks for their" + what+", only to get "+ vd+" by "+ who + ". The cashier takes a look at the scene and pays it no mind, waiting for "+ who +" to finally get to the register. The cashier\’s nametag reads "+ ad2 +" rather than a usual name, which makes "+ who + "raise an eyebrow. Finally the food that was originally picked up was " + who + ", and "+ who + " leaves the building. Typical";
}
