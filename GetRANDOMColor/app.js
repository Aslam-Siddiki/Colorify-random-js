let btn = document.querySelector("button");

let Click = function(){
    let h3 = document.querySelector("h3");
    let div=document.querySelector(".colorbox");

    let randomColor = getRandomColor();

    h3.innerText = randomColor;
    h3.style.color = randomColor;
    h3.style.borderColor = randomColor;
    btn.style.backgroundColor = randomColor;
    div.style.backgroundColor = randomColor;

    console.log("color updated",randomColor);
}

function getRandomColor(){
    let red =  Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);
        
    let color = `rgb(${red},${green},${blue})`;
    return color;
}

btn.addEventListener("click",Click);


