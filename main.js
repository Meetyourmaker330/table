const newPersonBtn = document.getElementById('new-person')
const modalWindow = document.getElementById('modal')
const closeModal = document.getElementById('close-modal')
const appendPerson = document.getElementById('append-person')
const overlay = document.getElementById('overlay')
const btnDeleteLastUser = document.getElementById('delete-last-user')
const btnDeleteUser = document.getElementById('delete-user')
let userName = document.getElementById('name')
let userLastname = document.getElementById('last-name')
let userCountry = document.getElementById('country')
let userCity = document.getElementById('city')


// data
const userArr = [{
      id: '0',
      name: 'Guf',
      lastName: 'Iz Centra',
      сountry: 'Rashka',
      сity: 'Moscow',
   },
   {
      id: `1`,
      name: 'Slim',
      lastName: 'Iz Centra',
      сountry: 'Rashka',
      сity: 'Moscow',
   },
   {
      id: '2',
      name: 'Ptaha',
      lastName: 'Iz Centra',
      сountry: 'Rashka',
      сity: 'Moscow',
   },

]


// function open modal
const showModalWindow = () => {
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

   if (userName.value === '' || userLastname.value === '' || userCountry.value === '' || userCity.value === '') {
      alert('Заполните все поля')
   } else {
      userArr.push(new NewUser(userArr.length + 1, userName.value, userLastname.value, userCountry.value, userCity.value))
      drawTable()
      closeModalWindow()
   }

})

// delete last user
btnDeleteLastUser.addEventListener('click', () => {
   deleteLastUser()
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
drawTable()


const deleteLastUser = () => {

}