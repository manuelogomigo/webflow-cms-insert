const elementToInsert = document.querySelector('[data-insert="me"]');

// Get the parent element where the insertion will occur
const parentElement = document.querySelector('[data-insert="here"]');

// Get the position where the element should be inserted
const position = parentElement.getAttribute('data-where');

// Insert the element based on the specified position
if (position === 'first') {
  parentElement.prepend(elementToInsert);
} else if (position === 'last') {
  parentElement.appendChild(elementToInsert);
} else if (position === 'center') {
  const childCount = parentElement.childElementCount;
  const centerIndex = Math.floor(childCount / 2);
  parentElement.insertBefore(elementToInsert, parentElement.children[centerIndex]);
} else if (!isNaN(parseInt(position))) {
  const index = parseInt(position);
  parentElement.insertBefore(elementToInsert, parentElement.children[index]);
}