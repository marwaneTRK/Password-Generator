const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?", 
"/"];


const generatorBtn = document.querySelector(".gen")
const result = document.querySelector(".result")
let res = ""
let state = false

function hope(){
// state = !state;
const size = parseInt(document.getElementById('lengthInput').value) 

  state = !state;
    if (size > 0 && state) {
        for (let i = 0; i < size; i++) {
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