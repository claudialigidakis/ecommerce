//declare HTML form boxes
const info = document.querySelector('.info')
const shippingInfo = document.querySelector('.shippingInfo')
const billingInfo = document.querySelector('.billingInfo')

//declare HTML form links
const firstName = document.querySelector('.firstName')
const lastName = document.querySelector('.lastName')
const email = document.querySelector('.email')
//link arrows
const infoUp = document.querySelector('.infoUp')
const infoDown = document.querySelector('.infoDown')
const shipUp = document.querySelector('.shipUp')
const shipDown = document.querySelector('.shipDown')
const billUp = document.querySelector('.billUp')
const billDown = document.querySelector('.billDown')

//functions
const validateInfo = (key) => {
  if (firstName.value !== '' && lastName.value !== '' &&
    email.value !== '') {
      if(key.keyCode == 13 || key.keyCode == 9){
        info.classList.add('d-none')
        shippingInfo.classList.remove('d-none')
    }
  }
}

//Info form listners
firstName.addEventListener('keydown', validateInfo)
lastName.addEventListener('keydown', validateInfo)
email.addEventListener('keydown', validateInfo)
infoDown.addEventListener('click',() => {
  info.classList.add('d-none')
  shippingInfo.classList.remove('d-none')
})

//shipping info listeners
shipDown.addEventListener('click',() => {
  shippingInfo.classList.add('d-none')
  billingInfo.classList.remove('d-none')
})
shipUp.addEventListener('click',() => {
  info.classList.remove('d-none')
  shippingInfo.classList.add('d-none')
