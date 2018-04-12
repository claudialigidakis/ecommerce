// document.querySelector(".text").addEventListener("click", function() {
//   console.log('yes')
//   //this is where we will move things into cart
// });

let form = document.querySelector('form')

document.querySelector('form').addEventListener("submit", function(event) {
  event.preventDefault()
  form.innerHTML = "Congrats you are now in the loop for all future SharkBite News!"
})
