let count = 0
let countp = document.getElementById('count-el')
let savep = document.getElementById('save-el')

function increment(){
    count += 1;
    countp.textContent = count;
}
function save(){
    console.log("clicked")
    let upPara = ` ${count} -`;
    savep.textContent += upPara;
    count = 0;
    countp.textContent = 0;
}