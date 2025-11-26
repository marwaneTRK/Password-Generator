const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?", 
"/"];



const generatorBtn = document.querySelector(".gen")
const result = document.querySelector(".result")

let res = ""

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

let validSize = parseInt(size.value)

  
    if (validSize > 0  && !box.checked) {
        for (let i = 0; i < validSize; i++) {
    res +=  characters[Math.floor(Math.random() * characters.length)]   
}
result.textContent = res

}else if (validSize > 0  && box.checked ){
        for (let i = 0; i < validSize; i++) {
    res +=  characters[Math.floor(Math.random() * 52)] 

}
result.textContent = res

}else if(validSize ===0){
    res =""
}

    res = " "


}

function copyText() {
    const text = document.querySelector(".result").textContent;

    if (text === "") return; // nothing to copy

    navigator.clipboard.writeText(text)
        .then(() => {
            alert("Copied!");
        })
        .catch(err => {
            console.log("Copy failed", err);
        });
}












        var c = document.getElementById("c");
        var ctx = c.getContext("2d");

        c.height = window.innerHeight;
        c.width = window.innerWidth;

        var matrix = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";
        matrix = matrix.split("");

        var font_size = 10;
        var columns = c.width/font_size; 
        var drops = [];
        
        for(var x = 0; x < columns; x++)
            drops[x] = 1; 

        function draw()
        {
            
            ctx.fillStyle = "rgba(0, 0, 0, 0.04)";
            ctx.fillRect(0, 0, c.width, c.height);

            ctx.fillStyle = "#10B981";
            ctx.font = font_size + "px arial";
            for(var i = 0; i < drops.length; i++)
            {
                var text = matrix[Math.floor(Math.random()*matrix.length)];
                ctx.fillText(text, i*font_size, drops[i]*font_size);

                if(drops[i]*font_size > c.height && Math.random() > 0.975)
                    drops[i] = 0;

                drops[i]++;
            }
        }

        setInterval(draw, 35);
