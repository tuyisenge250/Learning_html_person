const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h",
"i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", 
"1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$",
"%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",
".","?",
"/"];
let generatorel1 = document.getElementById("generator-el1") 
let generatorel2 = document.getElementById("generator-el2")
let generatorBtn = document.getElementById("generator-btn")
 
function generateChar(){
    let randomIndex = Math.floor(Math.random() * characters.length)
    return characters[randomIndex]
}

function passwordGenerator(){
    let password = []
    for(let i = 0; i < 15; i++){
        password.push(generateChar())
    }
    return password
}
generatorBtn.addEventListener("click",()=>{
    generatorel1.textContent = passwordGenerator().join("")
    generatorel2.textContent = passwordGenerator()
})

