const newPersonBtn = document.getElementById('new-person')
const modalWindow = document.getElementById('modal')
const closeModal = document.getElementById('close-modal')
const appendPerson = document.getElementById('append-person')
const overlay = document.getElementById('overlay')


// data
const userArr = []

// function open modal
const showModalWindow = () => {
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
   let userId = document.getElementById('id').value
   let userName = document.getElementById('name').value
   let userLastname = document.getElementById('last-name').value
   let userCountry = document.getElementById('country').value
   let userCity = document.getElementById('city').value

   if (userId === '' || userName === '' || userLastname === '' || userCountry === '' || userCity === '') {
      alert('Заполните все поля')
   } else {
      userArr.push(new NewUser(userId, userName, userLastname, userCountry, userCity))
      drawTable()
      drawHeadingTable()
      closeModalWindow()
   }

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
      <tr class="align-middle">
        <td class="table-warning">${elem.id}</td>
        <td class="table-warning">${elem.name}</td>
        <td class="table-warning">${elem.lastName}</td>
        <td class="table-warning">${elem.country}</td>
        <td class="table-warning">${elem.city}</td>
      </tr>`
   })
   document.getElementById('tbody').innerHTML = tableHtml
}

const drawHeadingTable = () => {
   let headingTable = ''
   headingTable += `
   <tr class="table-info align-middle">
   <th scope="col">ID</th>
   <th scope="col">Name</th>
   <th scope="col">Last Name</th>
   <th scope="col">Country</th>
   <th scope="col">City</th>
   </tr>
   `
   document.getElementById('thead').innerHTML = headingTable
}