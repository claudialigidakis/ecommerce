const user = {}
const userPay = {}

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

const name = document.querySelector('#name')
const email = document.querySelector('#email')
const shipAddress = document.querySelector('#shipAddress')
const shipCity = document.querySelector('#shipCity')
const shipState = document.querySelector('#shipState')
const shipZip = document.querySelector('#shipZip')
const billAddress = document.querySelector('#billAddress')
const billCity = document.querySelector('#billCity')
const billState = document.querySelector('#billState')
const billZip = document.querySelector('#billZip')

//navigation info listeners
function infoShowFunct(event){
  //event.preventDefault()
  info.classList.remove('d-none')
  shippingInfo.classList.add('d-none')
  billingInfo.classList.add('d-none')
  confirmInfo.classList.add('d-none')
}
infoShow.addEventListener('click',infoShowFunct)
infoShow.addEventListener('focus',infoShowFunct)

function shipShowFunct(event){
  //event.preventDefault()
  info.classList.add('d-none')
  shippingInfo.classList.remove('d-none')
  billingInfo.classList.add('d-none')
  confirmInfo.classList.add('d-none')
}

shipShow.addEventListener('click',shipShowFunct)
shipShow.addEventListener('focus',shipShowFunct)

function billShowFunct(event){
  //event.preventDefault()
  info.classList.add('d-none')
  shippingInfo.classList.add('d-none')
  billingInfo.classList.remove('d-none')
  confirmInfo.classList.add('d-none')
}

billShow.addEventListener('click',billShowFunct)
billShow.addEventListener('focus',billShowFunct)

function confirmShowFunct(event){
  //event.preventDefault()
  info.classList.add('d-none')
  shippingInfo.classList.add('d-none')
  billingInfo.classList.add('d-none')
  confirmInfo.classList.remove('d-none')
}

confirmShow.addEventListener('click',confirmShowFunct)
confirmShow.addEventListener('focus',confirmShowFunct)

//listen for form and record user user
document.querySelector('form').addEventListener('submit', gatherData)

function gatherData(){
  user.name = name.value
  user.email = email.value
  user.rememberMe = rememberMe.checked
  user.shipAddress = shipAddress.value
  user.shipCity = shipCity.value
  user.shipState = shipState.value
  user.shipZip = shipZip.value
  user.sameBilling = sameBilling.checked
  userPay.billAddress = billAddress.value
  userPay.billCity = billCity.value
  userPay.billZip = billCity.value
  userPay.billState = billState.value
  userPay.billZip = billZip.value
  if(user.rememberMe) localStorage.setItem('data',JSON.stringify(user))
}

sameBilling.addEventListener("click", () => {
  gatherData()
  if(sameBilling.checked){
    billAddress.value = user.shipAddress
    billCity.value = user.shipCity
    billState.value = user.shipState
    billZip.value = user.shipZip
  }
  else{
    billAddress.value = ''
    billCity.value = ''
    billState.value = ''
    billZip.value = ''
  }
})

const recipt = document.querySelector('#recipt')
recipt.value = `Shipping Info\n${shipAddress}\n${shipCity}\n${shipState}, ${shipZip} \n\nBilling Address\n${billAddress}\n${billCity}\n${billState}, ${billZip}`

const cardNumberField = document.querySelector('#card-number-field')
cardNumberField.addEventListener('blur', () => {
  if(cardNumberField.value.length < 14 || cardNumberField.value.length>19){
    document.querySelector('#ccError').classList.remove('d-none')
  }
  else{
    document.querySelector('#ccError').classList.add('d-none')
  }
})




JSON.parse(localStorage.getItem('data'))
