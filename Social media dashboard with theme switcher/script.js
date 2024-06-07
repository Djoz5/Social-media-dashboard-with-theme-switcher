const body = document.querySelector('body')
const bodyBackground = document.querySelector('.background-body')
const boxOne = document.querySelector('.section1-box')
const boxTwo = document.querySelector('.section2-box')
const input = document.querySelector('input')
const box1 = document.getElementById("box1")
const box2 = document.getElementById("box2")
const box3 = document.getElementById("box3")
const box4 = document.getElementById("box4")
const littleBox1 = document.getElementById("little-box1")
const littleBox2 = document.getElementById("little-box2")
const littleBox3 = document.getElementById("little-box3")
const littleBox4 = document.getElementById("little-box4")
const littleBox5 = document.getElementById("little-box5")
const littleBox6 = document.getElementById("little-box6")
const littleBox7 = document.getElementById("little-box7")
const littleBox8 = document.getElementById("little-box8")

let grid = [box1, box2, box3, box4, littleBox1, littleBox2, littleBox3, littleBox4, littleBox5, littleBox6, littleBox7, littleBox8]

input.addEventListener("click", function(){
    if(document.querySelector('input').checked){
        body.style.background = "white"
        bodyBackground.style.background = "hsl(225, 100%, 98%)";
        body.style.color = "black";
        for(let i = 0; i < grid.length; i++){
            grid[i].style.background = "hsl(227, 47%, 96%)"
        }
     }else{
        body.style.background = ""
        bodyBackground.style.background = "";
        boxTwo.style.background = "";
        body.style.color = ""
        for(let i = 0; i < grid.length; i++){
            grid[i].style.background = ""
        }
     }
})
