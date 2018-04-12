//declare HTML form boxes
const info = document.querySelector('.info')
const shippingInfo = document.querySelector('.shippingInfo')
const billingInfo = document.querySelector('.billingInfo')
const confirmInfo = document.querySelector('.confirmInfo')

//link navigator buttons
const infoShow = document.querySelector('.infoShow')
const shipShow = document.querySelector('.shipShow')
const billShow = document.querySelector('.billShow')
const confirmShow = document.querySelector('.confirmShow')

// checkbox
const rememberMe = document.querySelector('#rememberMe')
const sameBilling = document.querySelector('#sameBilling')

//navigation info listeners
infoShow.addEventListener('click',(event) => {
  event.preventDefault()
  info.classList.remove('d-none')
  shippingInfo.classList.add('d-none')
  billingInfo.classList.add('d-none')
  confirmInfo.classList.add('d-none')
})
shipShow.addEventListener('click',(event) => {
  event.preventDefault()
  info.classList.add('d-none')
  shippingInfo.classList.remove('d-none')
  billingInfo.classList.add('d-none')
  confirmInfo.classList.add('d-none')
})
billShow.addEventListener('click',(event) => {
  event.preventDefault()
  info.classList.add('d-none')
  shippingInfo.classList.add('d-none')
  billingInfo.classList.remove('d-none')
  confirmInfo.classList.add('d-none')
})
confirmShow.addEventListener('click',(event) => {
  event.preventDefault()
  info.classList.add('d-none')
  shippingInfo.classList.add('d-none')
  billingInfo.classList.add('d-none')
  confirmInfo.classList.remove('d-none')
})

//listen for form and record user user
  const user = {}
  const userPay = {}
document.querySelector('form').addEventListener('submit', (event) => {
  event.preventDefault()

  user.name = event.target['first-name'].value
  user.email = event.target['email'].value
  user.rememberMe = event.target['rememberMe'].checked
  user.shipAddress = event.target['shipAddress'].value
  user.shipZip = event.target['shipCity'].value
  user.shipState = event.target['shipState'].value
  user.shipZip = event.target['shipZip'].value
  user.sameBilling = event.target['sameBilling'].checked
  userPay.billAddress = event.target['billAddress'].value
  userPay.billCity = event.target['billCity'].value
  userPay.billZip = event.target['billCity'].value
  userPay.billState = event.target['billState'].value
  userPay.billZip = event.target['billZip'].value
  if(user.rememberMe) localStorage.setItem('data',JSON.stringify(user))
})

document.querySelector('#sameBilling').addEventListener("click", () => {
  if(document.target['sameBilling'].checked){
    document.target['billAddress'].value = document.target['shipAddress'].value
    document.target['billCity'].value = document.target['shipCity'].value
    document.target['billCity'].value = document.target['shipCity'].value
    document.target['billState'].value = document.target['shipState'].value
    document.target['billZip'].value = document.target['shipZip'].value
  }
})

JSON.parse(localStorage.getItem('data'))

// const rememberMeFunct = (user.rememberMe) => {
//
//     document.target['first-name'].value =
//     document.target['email'].value
//     document.target['rememberMe'].checked
//     document.target['shipAddress'].value
//     document.target['shipCity'].value
//     document.target['shipState'].value
//     document.target['sameBilling'].checked
//   }
// }
