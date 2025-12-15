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
let words = document.querySelectorAll("input[type='text']");

sbm.addEventListener('click', madlib)

function madlib() {
    document.getElementById("mads").innerHTML = " " + who.value + " enters a " + whereType.value + " that\’s called" + where.value + ". Inside that place, they go and" + verb.value + " a " + ad.value + fd.value + ". While approaching the register, their friend "+ who.value +" enters the building. "+ who2.value +" approaches "+ who.value +" and asks for their" + what.value +", only to get "+ vd.value +" by "+ who.value + ". The cashier takes a look at the scene and pays it no mind, waiting for "+ who.value +" to finally get to the register. The cashier\’s nametag reads "+ ad2.value +" rather than a usual name, which makes "+ who.value + "raise an eyebrow. Finally the food that was originally picked up was " + who.value + ", and "+ who.value + " leaves the building. Typical";
console.log(document.getElementById("mads").innerHTML);
}
