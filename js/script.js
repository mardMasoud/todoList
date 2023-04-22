let todoList = document.querySelector(".list-group");
let inputElm = document.querySelector("input");
const alertElm = document.querySelector(".alert");
const formElm = document.querySelector("form");
let iElms = document.querySelectorAll("i");
let liElm;
formElm.addEventListener("submit", function (e) {
  e.preventDefault();
});


iElms.forEach(function (ic) {
  ic.addEventListener("click", function () {
    ic.parentElement.remove();
  });
});
function addTodo(){

}
inputElm.addEventListener("keydown", function (e) {
  alertElm.innerHTML=''
  let inputValue=e.target.value
 // e.target.value=''
  if (e.keyCode === 13) {
    e.target.value=''
   
    if (inputValue) {
      liElm = document.createElement("li");
      liElm.className =
        "list-group-item d-flex justify-content-between align-items-center";

      let spanElm = document.createElement("span");
      spanElm.textContent = inputValue;
     
      let newiconDel = document.createElement("i");
      newiconDel.className = "fa fa-trash-o delete";
      liElm.append(spanElm,newiconDel);
      newiconDel.addEventListener("click", function () {
        newiconDel.parentElement.remove();
      });
      
      

      todoList.append(liElm);
     
    } else {alertElm.innerHTML = "input is empty";
  
  }
  }
});
