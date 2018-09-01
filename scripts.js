let color = [];
let randomColor;
let element;

for (let i = 0; i < 6; i++) {
    color.push(['rgb(' + (Math.floor(Math.random() * 256)) + ', ' + (Math.floor(Math.random() * 256)) + ', ' + (Math.floor(Math.random() * 256)) + ')']);
    element = document.getElementById("color" + i);
    element.style.backgroundColor = color[i];
    randomColor = color[Math.floor(Math.random() * color.length)]
    document.getElementById('color').innerHTML = randomColor;
}

function boxClick(id, backgroundColor) {

    let randomColorString = JSON.stringify(randomColor).replace(/[\[\]']+/g, '').replace(/['"]+/g, '');
    console.log(backgroundColor);
    console.log(randomColorString);

    if (randomColorString == backgroundColor) {
        document.getElementById("color0").style.backgroundColor = randomColor;
        document.getElementById("color0").style.display = 'block';
        document.getElementById("color1").style.backgroundColor = randomColor;
        document.getElementById("color1").style.display = 'block';
        document.getElementById("color2").style.backgroundColor = randomColor;
        document.getElementById("color2").style.display = 'block';
        document.getElementById("color3").style.backgroundColor = randomColor;
        document.getElementById("color3").style.display = 'block';
        document.getElementById("color4").style.backgroundColor = randomColor;
        document.getElementById("color4").style.display = 'block';
        document.getElementById("color5").style.backgroundColor = randomColor;
        document.getElementById("color5").style.display = 'block';
    } else {
        document.getElementById(id).style.display = 'none';
    }
};

function reload() {
    window.location.reload();
}


