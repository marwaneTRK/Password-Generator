const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?", 
"/"];


const generatorBtn = document.querySelector(".gen")
const result = document.querySelector(".result")
let res = ""
let state = false
const size = (document.getElementById('lengthInput')) 
const box = document.getElementById('box')

size.addEventListener('input', ()=>{
const min = parseInt(size.min)
const max = parseInt(size.max)

if (size.value < min) size.value = min
if (size.value > max) size.value = max

})

// fitler 52 index
function hope(){
// state = !state;
let validSize = parseInt(size.value)

  state = !state;
    if (validSize > 0 && state) {
        for (let i = 0; i < validSize; i++) {
    res +=  characters[Math.floor(Math.random() * characters.length)]   
}
  state = !state;


result.textContent = res
}
if (state === false){
    res = " "
}

}

console.log(res);