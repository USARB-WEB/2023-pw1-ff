document.body.style.backgroundColor  = 'green';

document.getElementById('clickMeButton').addEventListener('click', () => {
    alert('You clicked me. Thank you!')
})


document.getElementById('askMeButton').addEventListener('click', () => {
    const name = prompt("What is your name?")
    alert(`Hello ${name}`)
    if(confirm('Do you want to be a programmer?')){
        alert('Wow. Great!')
    } else {
        alert('OOps!')
    }
})