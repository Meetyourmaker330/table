const newPersonBtn = document.getElementById('new-person')
const modalWindow = document.getElementById('modal')
const closeModal = document.getElementById('close-modal')
const appendPerson = document.getElementById('append-person')
const overlay = document.getElementById('overlay')
const btnDeleteLastUser = document.getElementById('delete-last-user')
let userName = document.getElementById('name')
let userLastname = document.getElementById('last-name')
let userCountry = document.getElementById('country')
let userCity = document.getElementById('city')
// data
const userArr = []





// function open modal
const showModalWindow = () => {
   userName.value = ''
   userLastname.value = ''
   userCountry.value = ''
   userCity.value = ''

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
      newUser(userArr.length, userName.value, userLastname.value, userCountry.value, userCity.value)
      drawTable()
      closeModalWindow()
      console.log(userArr)
      deleteUser()
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
      removeUser: `<button type="button" class="btn-close" data-id="${id}"></button>`,
   })
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
        <td class="table-warning">${elem.removeUser}</td>
      </tr>`
   })
   document.getElementById('tbody').innerHTML = tableHtml
}



// let btnRemove = document.querySelectorAll('.btn-close')
// for (let i = 0; i < btnRemove.length; i++) {
//    deleteRow.addEventListener('click', (e) => {
//       removeUser(e.target.dataset.id);
//       console.log(e)
//    });
// }

// const deleteUser = () => {
//    const removeBtn = document.querySelectorAll('.btn-close')
//    removeBtn.addEventListener('click', function (e) {
//       let targetItem = e.target;
//       if (targetItem.closest('.remove-button')) {
//          removeUser(targetItem.dataset.id);
//       }
//    });
// }

// function removeUser(id) {
//    if (userArr.length > 0) {
//       for (var index = 0; index < userArr.length; index++) {
//          let user = userArr[index];
//          if (user.id === id) {
//             let spliced = userArr.splice(index, 1);
//             console.log("Removed element by id: ", id);
//          }
//       }
//    }
// }

// removeUser()