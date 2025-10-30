import { FRUITS } from "./data.js";

export const getFruits = (search) => {
  return new Promise((res) => {
    setTimeout(() => {
      const fruits = FRUITS.filter(name => {
        return name.substring(0, search.length).toLowerCase() === search.toLowerCase();
      });

      res(fruits);
    }, 1000);
  })
};

export const debounce = (fn, delay = 400) => {
  let timerId;

  return function(...args) {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      fn(...args);
    }, delay);
  }
};
