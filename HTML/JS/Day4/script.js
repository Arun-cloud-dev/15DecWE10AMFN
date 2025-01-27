//selecting elements

const header = document.getElementById("header");

const list = document.getElementById("list");

const addButton = document.getElementById("addButton")

const removeButton = document.getElementById("removeButton");


// header.textContent = "hello, "
header.style.color = "blue"

//Add an new item to  the list 

addButton.addEventListener("click", () => {
  const newItem = document.createElement("li");
  newItem.textContent = `Item ${list.children.length + 1}`;
  newItem.classList.add("item");
  list.appendChild(newItem);
});

// remove Button remove the last item from the list 


removeButton.addEventListener('click', () => {
    if (list.children.length > 0) {
        list.removeChild(list.lastChild)
    } else {
        alert ("no more Items to be removed")
    }
})


