localStorage.name = "alice";
// alert(localStorage.name);
let f_name = "Joh";
let user = localStorage.setItem("first name: ", f_name);

let FirstName = document.getElementById("input-field");
let item = document.getElementById("item");
let list_items = document.getElementById("list-items");
let list_item = document.getElementById("list-item");
let result = document.querySelector(".output");
let submit = document.querySelector("#sub");
let 

const display = () => {
  result.innerHTML = FirstName.value;
};
submit.addEventListener("click", display);
