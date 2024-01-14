var sortedList = [];
let listTag = document.getElementById("sort-list");

let input = document.getElementById("NewItem");
let addButton = document.getElementById("addButton");

window.onload = function () {
  input.focus();
};

input.addEventListener("keypress", function (event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter" && input.value != "") {
    addButton.click();
  }
});

addButton.addEventListener("click", function () {
  if (input.value != "") {
    //reset the list element
    listTag.innerHTML = "";
    //add the new item to the array
    if (input.value.includes(",") || input.value.includes("\n")) {
      let splitInput = input.value.split(",");
      for (i = 0; i < splitInput.length; i++) {
        sortedList.push(splitInput[i]);
      }
    } else {
      sortedList.push(input.value);
    }
    //sort the list
    sortedList.sort();
    //reset the input field so the user can enter something else
    input.value = null;
    //recreate the list element with list items sorted properly
    for (i = 0; i < sortedList.length; i++) {
      if (sortedList[i] != undefined) {
        addNewItem(listTag, sortedList[i], i);
      }
    }
  }
});

function addNewItem(list, newItem, id) {
  let listElement = document.createElement("div");
  listElement.id = `li${id}`;
  listElement.innerHTML = `
      <button class="deleteButton" onclick="deleteItem(${id})">X</button>
      <li class="sortedListElement">
      ${newItem}
      </li>`;
  list.appendChild(listElement);
}

function deleteItem(id) {
  let elementToRemove = document.getElementById(`li${id}`);
  if (elementToRemove) {
    elementToRemove.remove();
    delete sortedList[id];
  }
  input.focus();
}
