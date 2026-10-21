
const grid = document.getElementById("grid"); 
const input = document.getElementById("squares"); 
const button = document.getElementById("generate");
const reset = document.getElementById("reset"); 
const eraser = document.getElementById("eraser");
const colorPicker = document.getElementById("color"); 


let val = 16; 
let isDrawing = false; 
let flag = false; 

document.addEventListener("mousedown", () => {
    isDrawing = true;
});

document.addEventListener("mouseup", () => {
    isDrawing = false;
});


function createGrid(x){

    grid.innerHTML = ""; 
    for(let i = 0; i<x*x; i++){

        const temp = document.createElement("div"); 
        temp.classList.add("cell"); 
        temp.style.height = 520/x + "px"; 
        temp.style.width = 520/x + "px";
        
       function paintCell(cell) {
        if (!cell.classList.contains("cell")) return;

            cell.style.backgroundColor =
            eraser.checked ? "white" : colorPicker.value;

        }

        grid.addEventListener("mouseover", (e) => {
            if (isDrawing) {
                paintCell(e.target);
            }
        });

        grid.addEventListener("mousedown", (e) => {
            if (e.button === 0) {
                paintCell(e.target);
            }
        });

        grid.appendChild(temp); 
    }

}

button.addEventListener("click",()=>{
    const n = Number(input.value); 
    val = n; 
    flag = eraser.checked; 
    if(Number.isInteger(n) && n>=1 && n<=64){
        createGrid(n); 
    }
    else{
        alert("invalid dimenstion keep b/w 1 to 64");
    }
}); 




reset.addEventListener("click",()=>{
    createGrid(val); 
}); 




createGrid(32); 