const newPersonBtn = document.getElementById('new-person')
const modalWindow = document.getElementById('modal')
const closeModal = document.getElementById('close-modal')
const appendPerson = document.getElementById('append-person')
const overlay = document.getElementById('overlay')
const board = document.getElementById('board')
const userTable = document.createElement('table')
board.appendChild(userTable)

// data
const data = []

// function open modal
const showModalWindow = () => {
   modalWindow.classList.add('show')
   overlay.classList.add('show', 'overlay')
}
// function close modal
const closeModalWindow = () => {
   modalWindow.classList.remove('show')
   overlay.classList.remove('show', 'overlay')
}

// open modal
newPersonBtn.addEventListener('click', () => {
   showModalWindow()
})

// close modal
closeModal.addEventListener('click', () => {
   closeModalWindow()
})
document.addEventListener('keydown', (e) => {
   if (e.key === 'Escape' && !modalWindow.classList.contains('hidden')) {
      closeModalWindow()
   }
})
appendPerson.addEventListener('click', () => {
   let userId = document.getElementById('id').value
   let userName = document.getElementById('name').value
   let userLastname = document.getElementById('last-name').value
   let userCountry = document.getElementById('country').value
   let userCity = document.getElementById('city').value

   data.push(new NewUser(userId, userName, userLastname, userCountry, userCity))
   closeModalWindow()


   // draw table

   for (let i = 0; i < data.length; i++) {
      let trElement = document.createElement('tr')
      userTable.appendChild(trElement)
      let tdElement = document.createElement('td')
      trElement.appendChild(tdElement)
   }
   console.log(data)
})

// function create user

function NewUser(id, name, lastName, country, city) {

   this.id = id
   this.name = name
   this.lastName = lastName
   this.country = country
   this.city = city
}