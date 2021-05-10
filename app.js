const viewer = document.querySelector('#viewer');
const buttons = document.querySelectorAll('.buttons');

buttons.forEach((button) => {
    button.addEventListener('click',() => {
        addValue(button.textContent)
    })
})

function addValue(parameter) {
    if(parameter == 'c'){
        const value = viewer.innerHTML
        viewer.innerHTML = value.substring(0,value.length -1)
        return
    }
    if(parameter == 'ca'){
        viewer.innerHTML = ''
        return
    }
    if(parameter == '='){
        viewer.innerHTML = eval(viewer.innerHTML)
        return
    }
    if(viewer.innerHTML.length >= 22){
        return
    }
    viewer.innerHTML += parameter
}