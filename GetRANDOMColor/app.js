let btn = document.querySelector("button");

Click = function(){
    let h3 = document.querySelector("h3");
    let div=document.querySelector(".colorbox");

    let randomColor = getRandomColor();

    h3.innerText = randomColor;
    div.style.backgroundColor = randomColor;
    h3.style.color = randomColor;
    btn.style.backgroundColor = randomColor;

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


