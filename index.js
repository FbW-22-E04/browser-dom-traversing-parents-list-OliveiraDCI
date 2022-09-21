"use strict";

const parentsList = [];
let currentElement = document.querySelector("cite");
let currentElementName = currentElement.nodeName;

while (currentElement) {
  let currentElementName = currentElement.nodeName;
  parentsList.unshift(currentElementName.toLowerCase());
  currentElement = currentElement.parentElement;
}

console.log(parentsList.join(" > "));
