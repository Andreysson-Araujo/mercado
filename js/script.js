const prodForm = document.querySelector("#todo-form");
const prodInput = document.querySelector("#add-input");
const prodList = document.querySelector("#listagem");
const editForm = document.querySelector("#edit-form");
const editInput = document.querySelector("#edit-input");
const cancelEditBtn = document.querySelector("#cancel-edit-btn");

//Funções
const savaProd = (text) => {
  const prod = document.createElement("div");
  prod.classList.add("prod");

  const prodName = document.createElement("h3");
  prodName.innerText = text;
  prod.appendChild(prodName);

  console.log(prod);
};

//Eventos

prodForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const inputValue = prodInput.value;

  if (inputValue) {
    savaProd(inputValue);
  }
});
