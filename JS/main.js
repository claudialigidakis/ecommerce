document.querySelector(".text").addEventListener("click", function() {
  console.log('yes')
  //this is where we will move things into cart
});

let form = document.querySelector('form')

document.querySelector('form').addEventListener("submit", function(event) {
  event.preventDefault()
  form.innerHTML = "Congrats you are now in the loop for all future SharkBite News!"
})

let newProductCard = '<button class="button">' + '<span>' + btnContent + '</span>' + '</button>' + '<button class="btn">' + '<i class="fa fa-edit">' + '</i>' + '</button>' + '<button class="btn">' + '<i class="fa fa-remove">' + '</i>' + '</button>' + '<br>';

  favoriteBtns.push(newBtn)
  document.querySelector("#demo").innerHTML = favoriteBtns.join(" ");
console.log(document.querySelector('.rowProducts').value)
