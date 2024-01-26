const myButton = document.querySelector('#myButton');
const nameInput = document.querySelector('#nameInput');
const list = document.querySelector('#list');


myButton.addEventListener('click', (event) => {
    const newItem = document.createElement('li');
    // element.classList - добавляет или удаляет классы для элемента
    newItem.classList.add('item');
    newItem.textContent = nameInput.value;
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Удалить";
    deleteButton.addEventListener("click", () => {
        list.removeChild(newItem);
    })
    newItem.appendChild(deleteButton);
    list.appendChild(newItem);
    deleteButton.classList.add("DELETE")
    nameInput.value = "";
})


