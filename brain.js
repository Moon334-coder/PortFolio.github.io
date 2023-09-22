let moon = document.querySelector("#Mode");

moon.addEventListener('click', function() {
    if (moon.classList.contains('bxs-moon')) {
        moon.classList.remove('bxs-moon');
        moon.classList.add('bxs-sun');
        moon.style.color = 'grey';
        document.body.style.backgroundColor = "black"; 
        
    } else {
        moon.classList.remove('bxs-sun');
        moon.classList.add('bxs-moon');
        moon.style.color = 'grey'; 
        document.body.style.backgroundColor = "white"; 
    }
});

let SWITCH = document.querySelector("#point");
let btn = document.querySelector("#Menu");

btn.addEventListener('click', function() { 
    if (SWITCH.style.display === "none") {
        SWITCH.style.display = "block";
    } else {
        SWITCH.style.display = "none";
    }
});

let Animate = document.querySelector(".try");
if(document.body.style.backgroundColor == "white")
{
    Animate.style.backgroundColor = "white";
}
else if(document.body.style.backgroundColor == "black")
{
    Animate.style.backgroundColor = "black";
}

