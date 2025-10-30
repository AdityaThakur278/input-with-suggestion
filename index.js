import { debounce, getFruits } from "./utils.js";

const suggestionContainer = document.getElementById("suggestion-container");
const inputElement = document.getElementById("search-input");

const handleFetchSuggestion = debounce(async (search) => {
  const fruits = await getFruits(search);

  if(!search) {
    suggestionContainer.innerHTML = null;
    return;
  }

  const container = document.createDocumentFragment();
  fruits.forEach(fruit => {
    const listItem = document.createElement("div");
    listItem.classList.add("list-item");
    listItem.innerHTML = fruit;
    container.appendChild(listItem);
  });
  suggestionContainer.innerHTML = null;
  suggestionContainer.appendChild(container);
});

const handleSearch = (event) => {
  const value = event.target.value;

  handleFetchSuggestion(value);
};

inputElement.addEventListener("input", handleSearch);