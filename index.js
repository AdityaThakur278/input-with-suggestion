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
    listItem.setAttribute("data-key", fruit);
    container.appendChild(listItem);
  });
  suggestionContainer.innerHTML = null;
  suggestionContainer.appendChild(container);
});

const handleSearch = (event) => {
  const value = event.target.value;

  handleFetchSuggestion(value);
};

const handleSuggestionSelect = (event) => {
  const { key } = event.target.dataset || {};

  suggestionContainer.innerHTML = null;

  inputElement.value = key;
};

inputElement.addEventListener("input", handleSearch);

suggestionContainer.addEventListener("click", handleSuggestionSelect)