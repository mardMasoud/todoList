let todoList = document.querySelector(".list-group");
let inputElm = document.querySelector(".form-control");
const alertElm = document.querySelector(".alert");
const formElm = document.querySelector("form");
let iconDel;
let liElm;
formElm.addEventListener("submit", function (e) {
  e.preventDefault();
});
inputElm.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    if (e.target.value != "") {
      liElm = document.createElement("li");
      liElm.classList.add(
        "list-group-item",
        "d-flex",
        "justify-content-between",
        "align-items-center"
      );
      let spanElm = document.createElement("span");
      spanElm.textContent = e.target.value;
      liElm.append(spanElm);
      iconDel = document.createElement("i");
      iconDel.classList.add("fa", "fa-trash-o", "delete");
      liElm.append(iconDel);
      todoList.append(liElm);
    } else alertElm.innerHTML = "input is empty";
  }
});
