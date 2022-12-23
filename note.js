const addBtn = document.querySelector('.add')
const saveBtn = document.querySelector('.save')
const cancelBtn = document.querySelector('.cancel')
const deleteBtns = document.getElementsByClassName('.delete-note')
const deleteAllBtn = document.querySelector('.delete-all')

const noteArea = document.querySelector('.note-area')
const notePanel = document.querySelector('.note-panel')
const category = document.querySelector('#category')
const textArea = document.querySelector('#text')
const error = document.querySelector('.error')

let selectedValue
let cardId = 0

const openPanel = () => {
	notePanel.style.display = 'flex'
}

const closePanel = () => {
	notePanel.style.display = 'none'
	error.style.visibility = 'hidden'
	textArea.value = ''
	category.value = 0
}

const addNote = () => {
	if (category.value !== '0' && textArea.value !== '') {
		createNote()
		closePanel()
		error.style.visibility = 'hidden'
	} else {
		error.style.visibility = 'visible'
	}
}

const createNote = () => {
	const newNote = document.createElement('div')
	newNote.classList.add('note')
	newNote.setAttribute('id', cardId)

	newNote.innerHTML = `
    <div class="note-header">
        <h3 class="note-title">${category.options[category.selectedIndex].text}</h3>
        <button class="delete-note" onclick="deleteNote(${cardId})">
        <i class="fas fa-times icon"></i>
        </button>
    </div>

    <div class="note-body">${textArea.value}</div>
    `

	noteArea.appendChild(newNote)
	cardId++
	checkColor(newNote)
}

const checkColor = note => {
	switch (category.options[category.selectedIndex].text) {
		case 'Zakupy':
			note.style.backgroundColor = 'rgb(72,255,0)'
			break
		case 'Praca':
			note.style.backgroundColor = 'rgb(255,243,0)'
			break
		case 'Inne':
			note.style.backgroundColor = 'rgb(0,170,255)'
			break
	}
}

const deleteNote = id => {
	const noteToDelete = document.getElementById(id)
	noteArea.removeChild(noteToDelete)
}

const deleteAllNotes = () => {
	noteArea.textContent = ""
}

addBtn.addEventListener('click', openPanel)
cancelBtn.addEventListener('click', closePanel)
saveBtn.addEventListener('click', addNote)
deleteAllBtn.addEventListener("click", deleteAllNotes)