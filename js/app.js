document.addEventListener("DOMContentLoaded", () => {
  console.log("JavaScript loaded");

  const textInputTitle = document.querySelector("#title");
  textInputTitle.addEventListener("input", handleInputTitle);

  const textInputAuthor = document.querySelector("#author");
  textInputAuthor.addEventListener("input", handleInputAuthor);

  const select = document.querySelector("#category");
  select.addEventListener("change", handleSelect);

  const form = document.querySelector("#new-item-form");
  form.addEventListener("submit", handleSubmitForm);
});

const handleInputTitle = function (event) {
  let title = event.target.value;
  const resultForm = document.querySelector("#reading-list");
  // resultForm.textContent = `${title}`;
};

const handleInputAuthor = function (event) {
  let author = event.target.value;
  const resultForm = document.querySelector("#reading-list");
  // resultForm.textContent = `${author}`;
};

const handleSelect = function (event) {
  let selected = event.target.value;
  const resultForm = document.querySelector("#reading-list");
  // resultForm.textContent = `${selected}`;
};

const handleSubmitForm = function (event) {
  event.preventDefault();
  const resultForm = document.querySelector("#reading-list");
  resultForm.textContent = `${this.title.value} ${this.author.value} ${this.selected}`;
  document.getElementById("new-item-form").reset();
};
