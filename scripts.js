const toDoList = document.querySelector('#to-do-list')
const content = document.querySelector('#list-element-content')
const pad = document.querySelector('#pad')

const writing = document.querySelector('#list-element-content')
writing.addEventListener('keydown', (event) => {
    if(event.keyCode === 13) {
        addToList()
    }
})

const plus = document.querySelector('#addButton')
plus.addEventListener('mousedown', addToList)

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
    if((content.value!="")
        && !(toDoList.offsetHeight > pad.offsetHeight*(0.6))) {
            strikeAndRemove(listElement)
            toDoList.appendChild(listElement)
            content.value = ""
    }
}

