const newPersonBtn = document.getElementById('new-person')
const modalWindow = document.getElementById('modal')
const closeModal = document.getElementById('close-modal')
const appendPerson = document.getElementById('append-person')
const overlay = document.getElementById('overlay')
const btnDeleteLastUser = document.getElementById('delete-last-user')
const btnDeleteUser = document.getElementById('delete-user')
let userId = document.getElementById('id')
let userName = document.getElementById('name')
let userLastname = document.getElementById('last-name')
let userCountry = document.getElementById('country')
let userCity = document.getElementById('city')


// data
const userArr = []

// function open modal
const showModalWindow = () => {
   // userId.value = ''
   // userName.value = ''
   // userLastname.value = ''
   // userCountry.value = ''
   // userCity.value = ''

   modalWindow.classList.add('show')
   overlay.classList.add('overlay')
}
// function close modal
const closeModalWindow = () => {
   modalWindow.classList.remove('show')
   overlay.classList.remove('overlay')
}

// open modal
newPersonBtn.addEventListener('click', () => {
   showModalWindow()
})

// close modal
overlay.addEventListener('click', closeModalWindow)
closeModal.addEventListener('click', () => {
   closeModalWindow()
})
document.addEventListener('keydown', (e) => {
   if (e.key === 'Escape' && modalWindow.classList.contains('show')) {
      closeModalWindow()
   }
})

// add user
appendPerson.addEventListener('click', () => {

   if (userId.value === '' || userName.value === '' || userLastname.value === '' || userCountry.value === '' || userCity.value === '') {
      alert('Заполните все поля')
   } else {
      userArr.push(new NewUser(userId.value, userName.value, userLastname.value, userCountry.value, userCity.value))
      drawTable()
      closeModalWindow()
   }

})

// delete last user
btnDeleteLastUser.addEventListener('click', () => {
   let tbody = document.getElementById('tbody')
   tbody.removeChild(tbody.lastChild)
   userArr.pop()
})

// function create user

function NewUser(id, name, lastName, country, city) {

   this.id = id
   this.name = name
   this.lastName = lastName
   this.country = country
   this.city = city
}


// draw table 

const drawTable = () => {
   let tableHtml = ''
   userArr.forEach(elem => {
      tableHtml += `
      <tr class="align-middle" id="row-users">
        <td class="table-warning">${elem.id}</td>
        <td class="table-warning">${elem.name}</td>
        <td class="table-warning">${elem.lastName}</td>
        <td class="table-warning">${elem.country}</td>
        <td class="table-warning">${elem.city}</td>
      </tr>`
   })
   document.getElementById('tbody').innerHTML = tableHtml
}