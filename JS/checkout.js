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
document.querySelector('form').addEventListener('submit', (event) => {
  event.preventDefault()

  const user = {}
  user.name = event.target['first-name'].value
  user.email = event.target['email'].value
  user.rememberMe = event.target['rememberMe'].value
  user.shipAddress = event.target['shipAddress'].value
  user.shipZip = event.target['shipCity'].value
  user.shipState = event.target['shipState'].value
  user.shipZip = event.target['shipZip'].value
  user.sameBilling = event.target['sameBilling'].value
  user.billAddress = event.target['shipAddress'].value
  user.billZip = event.target['shipCity'].value
  user.billState = event.target['shipState'].value
  user.billZip = event.target['shipZip'].value
})

const rememberMeFunct = () {

}
