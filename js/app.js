document.addEventListener("DOMContentLoaded", () => {
  console.log("JavaScript loaded");

  const textInputTitle = document.querySelector("#title");
  textInputTitle.addEventListener("input", handleInputTitle);

  const textInputAuthor = document.querySelector("#author");
  textInputAuthor.addEventListener("input", handleInputAuthor);

  const selectedCategory = document.querySelector("#category");
  selectedCategory.addEventListener("change", handleSelect);

  const form = document.querySelector("#new-item-form");
  form.addEventListener("submit", handleSubmitForm);
});

const handleInputTitle = function (event) {
  let title = event.target.value;
};

const handleInputAuthor = function (event) {
  let author = event.target.value;
};

const handleSelect = function (event) {
  let selected = "Book";
  selected = event.target.value;
  console.log(selected);
};

const handleSubmitForm = function (event) {
  event.preventDefault();
  const resultForm = document.querySelector("#reading-list");
  resultForm.textContent = `${this.title.value} ${this.author.value} `;
  console.log(this.selected.value);
  document.getElementById("new-item-form").reset();
};
