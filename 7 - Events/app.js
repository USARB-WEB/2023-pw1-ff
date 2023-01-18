document.getElementById('calculateButton').addEventListener('click', () => {
    const sum = Number(document.getElementById('x').value) + Number(document.getElementById('y').value);
    document.getElementById('sum').innerHTML = sum;
})

document.getElementById('hoveredDiv').addEventListener('mouseover', () => {
    document.getElementById('hoveredDiv').style.backgroundColor = 'violet';
    document.getElementById('hoveredDiv').innerHTML = 'Mouse over me'
})


setTimeout(() => {
    document.body.style.backgroundColor = 'green'
}, 3000)

setInterval(() => {
    document.getElementById('counter').value = Number(document.getElementById('counter').value) + 1;
}, 1000)


document.body.addEventListener('keypress', (event) => {
    console.log(event);
    document.getElementById('keyboardListener').innerHTML = event.key;
})