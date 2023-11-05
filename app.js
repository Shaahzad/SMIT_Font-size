var para = document.querySelector("p")
console.log(para)

let size = 16


function increase(){
para.style.fontSize = `${++size}px`
}
function decrease(){
    para.style.fontSize = `${--size}px`
}

