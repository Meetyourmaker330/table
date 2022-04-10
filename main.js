const newPersonBtn = document.getElementById('new-person')
const modalWindow = document.getElementById('modal')
const closeModal = document.getElementById('close-modal')
const appendPerson = document.getElementById('append-person')
const overlay = document.getElementById('overlay')
const btnDeleteLastUser = document.getElementById('delete-last-user')
let editUserBtn = document.getElementById('edit')
let userName = document.getElementById('name')
let userLastname = document.getElementById('last-name')
let userCountry = document.getElementById('country')
let userCity = document.getElementById('city')
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
   editUserBtn.classList.add('none')
   appendPerson.style.display = 'block'
   userName.value = ''
   userLastname.value = ''
   userCountry.value = ''
   userCity.value = ''
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
      newUser(userArr.length + 1, userName.value, userLastname.value, userCountry.value, userCity.value)
      drawTable()
      closeModalWindow()
      console.log(userArr)

   }

})
// delete last user
btnDeleteLastUser.addEventListener('click', () => {
   userArr.pop()
   drawTable()
})


const newUser = (id, name, lastName, country, city, ) => {
   userArr.push({
      id: id,
      name: name,
      lastName: lastName,
      country: country,
      city: city,
      editUser: `<a href="#" class="link-dark edit-user" onclick="editUser(${id})">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
  <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
</svg>
      </a>`,
      removeUser: `<button type="button" class="btn-close" onClick="removeUser(${id})"></button>`,
   })
}



// draw table 
const drawTable = () => {
   let tableHtml = ''
   userArr.forEach(elem => {
      tableHtml += `
      <tr class="align-middle">
        <td class="table-warning td-user">${elem.id}</td>
        <td class="table-warning td-user">${elem.name}</td>
        <td class="table-warning td-user">${elem.lastName}</td>
        <td class="table-warning td-user">${elem.country}</td>
        <td class="table-warning td-user">${elem.city}</td>
        <td class="table-warning td-user">${elem.editUser}</td>
        <td class="table-warning td-user">${elem.removeUser}</td>
      </tr>`
   })
   document.getElementById('tbody').innerHTML = tableHtml
}

// remove user
const removeUser = (id) => {
   if (userArr.length > 0) {

      for (let index = 0; index < userArr.length; index++) {
         let user = userArr[index];
         if (user.id === id) {
            userArr.splice(index, 1)
            drawTable()
         }
      }

   }
}



let user


editUserBtn.addEventListener('click', (item) => {
   item = user

   userArr.forEach((el, index) => {
      let elem = el
      if (elem.id === item) {
         elem.name = document.getElementById('name').value
         elem.lastName = document.getElementById('last-name').value
         elem.country = document.getElementById('country').value
         elem.city = document.getElementById('city').value
         drawTable()
         closeModalWindow()
      }
   })
})




function editUser(id) {
   editUserBtn.classList.remove('none')
   user = id
   if (userArr.length >= 1) {
      userArr.forEach(item => {
         if (item.id === user) {
            document.getElementById('name').value = item.name
            document.getElementById('last-name').value = item.lastName
            document.getElementById('country').value = item.country
            document.getElementById('city').value = item.city


            appendPerson.style.display = 'none'
            showModalWindow()
         }
      })
   }


   return user
}