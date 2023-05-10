const  container = document.querySelector(".container");
const refreshBtn = document.querySelector(".refresh-btn");
 

const maxColorPalette = 32;


const generatePalatte = ()=>{
    container.innerHTML = "";
  
for(let i=0;i< maxColorPalette; i++ ){

    let randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
    
    
    randomHex= `#${randomHex.padStart(6, "0")}`
    
const color = document.createElement("li");
    color.classList.add("color");
    color.innerHTML= ` <div class="rect-box" style="background: ${randomHex}"></div>
    <span class="hex-value">${randomHex}</span>
`
color.addEventListener("click",()=>{
    copyColor(color, randomHex)
})
container.appendChild(color);

}

}

generatePalatte();
const copyColor = (element, hexVal)=>{
    console.log(element,hexVal)
     const clickedColor =element.querySelector(".hex-value");
navigator.clipboard.writeText(hexVal).then(()=>{
clickedColor.innerHTML = "Copied";
setTimeout(()=>{ clickedColor.innerHTML = hexVal},1000)
});
}






refreshBtn.addEventListener("click", generatePalatte)
