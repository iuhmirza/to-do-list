const toDoList = document.querySelector('#to-do-list')
const content = document.querySelector('#list-element-content')
const pad = document.querySelector('#pad')
const writing = document.querySelector('#writing')

const addButton = document.querySelector('#addButton')
addButton.addEventListener('mousedown', addToList)

listElements = document.querySelectorAll('li')
listElements.forEach(item => {
    item.addEventListener('mousedown', () => {
        item.classList.toggle('completed')
        item.addEventListener('mousedown', () => {
            item.remove()
        })
    })
})

function addToList() {
    const listElement = document.createElement('li')
    listElement.textContent = content.value
    if(content.value!="") {
        listElement.addEventListener('mousedown', () => {
            listElement.classList.toggle('completed')
            listElement.addEventListener('mousedown', () => {
                listElement.remove()
            })
        })
        toDoList.appendChild(listElement)
        content.value = ""
    }
    if(pad.clientHeight < writing.offsetHeight + listElement.offsetHeight) {
        addButton.removeEventListener('mousedown', addToList)
        addButton.addEventListener('mousedown', comparePadSize)
    }
}

function comparePadSize() {
    if(!(pad.clientHeight < writing.offsetHeight + listElement.offsetHeight)){
        addToList()
        addButton.addEventListener('mousedown', addToList)
    }
}

