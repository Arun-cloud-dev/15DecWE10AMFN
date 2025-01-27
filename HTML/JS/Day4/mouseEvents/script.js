const button = document.getElementById("mouseButton");

const hoverBox = document.getElementById("hoverBox");



//click event 

button.addEventListener("click", () => {
    alert("Button clicked ")
})



hoverBox.addEventListener("mouseover", () => {
    hoverBox.style.background = "yellow"
})



hoverBox.addEventListener("mouseout", () => {
  hoverBox.style.background = "lightgreen";
});