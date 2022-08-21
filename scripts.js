const toDoList = document.querySelector('#to-do-list')
const content = document.querySelector('#list-element-content')
const pad = document.querySelector('#pad')
const writing = document.querySelector('#writing')

const addButton = document.querySelector('#addButton')
addButton.addEventListener('mousedown', addToList)

listElements = document.querySelectorAll('li')
listElements.forEach(strikeAndRemove)

function strikeAndRemove(item) {
    item.addEventListener('mousedown', () => {
        item.classList.toggle('completed')
        item.addEventListener('mousedown', () => {
            item.remove()
        })
    })
}

function addToList() {
    const listElement = document.createElement('li')
    listElement.textContent = content.value
    if(content.value!="") {
        strikeAndRemove(listElement)
        toDoList.appendChild(listElement)
        content.value = ""
    }
}

