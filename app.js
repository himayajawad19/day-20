let arremail = [];

let email = document.getElementById("email-el");
let subscribeButton = document.getElementById("subscribe");

subscribeButton.addEventListener("click", function () {
  arremail.push(email.value);
  email.value = " ";
  localStorage.setItem("email", JSON.stringify(arremail));
  inputemails();
});

function inputemails() {
  let emails = "";
  for (let index = 0; index < arremail.length; index++) {
    emails += arremail[index];
  }
}
