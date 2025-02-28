const red = document.getElementById("red");
const blue = document.getElementById("blue");
const green = document.getElementById("green");
const yellow = document.getElementById("yellow");
const gray = document.getElementById("gray");
const orange = document.getElementById("orange");
const purple = document.getElementById("purple");

red.addEventListener("click",()=>{
    document.body.style.backgroundColor = "red";
})
red.addEventListener("dblclick",()=>{
    document.body.style.backgroundColor = "white";
})

blue.addEventListener("click",()=>{
    document.body.style.backgroundColor = "blue";
})
blue.addEventListener("dblclick", () => {
  document.body.style.backgroundColor = "white";
});

green.addEventListener("click",()=>{
    document.body.style.backgroundColor = "green"
})
green.addEventListener("dblclick", () => {
  document.body.style.backgroundColor = "white";
});

yellow.addEventListener("click",()=>{
    document.body.style.backgroundColor = "yellow"
})
yellow.addEventListener("dblclick", () => {
  document.body.style.backgroundColor = "white";
});

gray.addEventListener("click",()=>{
    document.body.style.backgroundColor = "gray"
})
gray.addEventListener("dblclick", () => {
  document.body.style.backgroundColor = "white";
});

orange.addEventListener("click",()=>{
    document.body.style.backgroundColor = "orange"
})
orange.addEventListener("dblclick", () => {
  document.body.style.backgroundColor = "white";
});

purple.addEventListener("click",()=>{
    document.body.style.backgroundColor = "purple";
})
purple.addEventListener("dblclick", () => {
  document.body.style.backgroundColor = "white";
});