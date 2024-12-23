import { menuArray } from "./data.js";



function getMenuHtml(){
    return menuArray.map((menu)=>{
        const { name, ingredients, id, price, emoji } = menu
        return `
        <div class="item">
                <div class="image">${emoji}</div>
                <div class="info">
                    <h1>${ name }</h1>
                    <p>${ ingredients }</p>
                    <h2>${ price }</h2>
                </div>
                <button class="add-item" data-id='${id}'>+</button> 
        </div>
        `
    })
}
document.getElementById('item-section').innerHTML = getMenuHtml()


document.addEventListener('click',(e)=>{
if (e.target.dataset.id){
    handleBtnClick(e.target.dataset.id)
}
else if (e.target.id = 'complete-btn'){
    handleCompleteBtn()
}
})
function selectedItem(id){
    const selectedItem =  menuArray.filter((menu)=> menu.id == id)
    return selectedItem[0]
}
let allSelectedItem = []
function handleBtnClick(id){
    allSelectedItem.push(selectedItem(id))
    const totalPrice = allSelectedItem.reduce((total, current) => total + current.price, 0)
    const orederHtml = allSelectedItem.map(item =>{
        return `
        <div class="chart-item">
            <p>${item.name}</p>
            <p>${item.price}</p>
        </div>`
    })
    const order = document.getElementById('ordering')
    order.innerHTML = `<h1 style="text-align: center;">order</h1>
    `+orederHtml.join('') +`

    <div class="line"></div>
        <div class="total-price">${ totalPrice }</div>
        <button id="complete-btn">complete</button>
        `

    order.style.display = 'block'
}

function handleCompleteBtn(){
    document.getElementById('form').style.display = 'block'
    document.getElementById('ordering').style.direction = 'none'
}
document.addEventListener('submit',(e)=>{
    e.preventDefault()
    document.getElementById('ordering').innerHTML = `thanks for purcharse our product`
    document.getElementById('ordering').style.display = 'block'
    document.getElementById('form').style.display = 'none'
})