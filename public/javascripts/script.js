window.addEventListener('DOMContentLoaded', function () {

  const button = document.getElementsByClassName('action');
  const background = document.getElementsByClassName('background')[0];
  const popup = document.getElementsByClassName('alert')[0];


  button[0].addEventListener("click", () => {
    console.log("button")
    background.classList.remove("background");
    popup.classList.remove("alert");
    popup.classList.add("hide");

  })


});