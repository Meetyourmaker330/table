const newPersonBtn = document.getElementById('new-person')
const modalWindow = document.getElementById('modal')
const closeModal = document.getElementById('close-modal')
const appendPerson = document.getElementById('append-person')
const overlay = document.getElementById('overlay')
const btnDeleteLastUser = document.getElementById('delete-last-user')
const btnDeleteUser = document.getElementById('delete-user')
const removeUser = document.getElementById('remove')
let userName = document.getElementById('name')
let userLastname = document.getElementById('last-name')
let userCountry = document.getElementById('country')
let userCity = document.getElementById('city')

// data
const userArr = []


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
      // userArr.push(new NewUser(userArr.length, userName.value, userLastname.value, userCountry.value, userCity.value))
      newUser(userArr.length, userName.value, userLastname.value, userCountry.value, userCity.value)
      drawTable()
      closeModalWindow()
      findBtn()

   }
   console.log(userArr)

})
// delete last user
btnDeleteLastUser.addEventListener('click', () => {
   userArr.pop()
   drawTable()
})

// function create user
// let userInstance = null

// function NewUser(id, name, lastName, country, city, removeButton) {
//    if (userInstance) {
//       return userInstance
//    }
//    instance = this
//    this.id = id
//    this.name = name
//    this.lastName = lastName
//    this.country = country
//    this.city = city
//    this.removeButton = `<button type="button" class="btn-close btn-remove" id="remove"></button>`

//    return userInstance

// }

const newUser = (id, name, lastName, country, city, ) => {
   userArr.push({
      id: id,
      name: name,
      lastName: lastName,
      country: country,
      city: city,
      removeButton: `<button type="button" class="btn-close btn-remove" id="remove"></button>`
   })
}


// draw table 
// userArr.push(new NewUser(0, 'Bob', 'No-homo', 'Belarus', 'Minsk'))
// userArr.push(new NewUser(1, 'Andrew', 'No-homo', 'Belarus', 'Minsk'))
// userArr.push(new NewUser(2, 'Dick', 'No-homo', 'Belarus', 'Minsk'))
// userArr.push(new NewUser(3, 'Jack', 'No-homo', 'Belarus', 'Minsk'))

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
        <td class="table-warning">${elem.removeButton}</td>
      </tr>`
   })
   document.getElementById('tbody').innerHTML = tableHtml
}

const findBtn = () => {
   let btnRemove = document.querySelectorAll('.btn-close')
   for (let i = 0; i < userArr.length; i++) {
      let deleteRow = btnRemove[i]
      deleteRow.addEventListener('click', () => {

         console.log(userArr[i])
         let valueIndex = userArr.indexOf(userArr[i])
         console.log(valueIndex)
         console.log(userArr)
         // if (i === valueIndex) {
         //    userArr.splice(valueIndex)
         //    console.log(userArr)
         // }
      })

   }
}

// const findKey = (obj) => {
//    for (key in userArr) {
//       if(key)
//    }
// }
// findKey()



// const removeUserFunc = () => {
//    userArr.find((elem, index) => {
//       if (index === findBtn()) {
//          userArr.splice(removeBtn, 1)
//          console.log(index)
//          drawTable()
//       }
//    })
// }
// removeUserFunc()
console.log(userArr)