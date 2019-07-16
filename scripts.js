let color = [];
let randomColor;
let element;

for (let i = 0; i < 6; i++) {
    color.push(['rgb(' + (Math.floor(Math.random() * 256)) + ', '
     + (Math.floor(Math.random() * 256)) + ', '
     + (Math.floor(Math.random() * 256)) + ')']);

    element = document.querySelector("#color" + i);
    element.style.backgroundColor = color[i];
    randomColor = color[Math.floor(Math.random() * color.length)]
    document.querySelector('#color').innerHTML = randomColor;
}

function boxClick(id, backgroundColor) {

    let randomColorString = JSON.stringify(randomColor).replace(/[\[\]']+/g, '').replace(/['"]+/g, '');

    if (randomColorString == backgroundColor) {
        for(i = 0; i <= 5; i++){
            document.querySelector('#color' + i).style.backgroundColor = randomColor;
            document.querySelector('#color' + i).style.display = 'block';
        }
    } else {
        document.querySelector('#' + id).style.display = 'none';
    }
};

function reload() {
    window.location.reload();
}


