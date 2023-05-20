// Get the element to be inserted
const elementToInsert = document.querySelector('[data-insert="me"]');

// Get the parent element where the insertion will occur
const parentElement = document.querySelector('[data-insert="here"]');

// Get the position where the element should be inserted
const position = parentElement.getAttribute('data-where');

// Function to insert the element at the desired position
function insertElement() {
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
}

// Options for the Intersection Observer
const observerOptions = {
  root: parentElement,
  threshold: 5 // Adjust this threshold as needed
};

// Create an Intersection Observer to track the element's visibility
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      insertElement();
      observer.unobserve(entry.target); // Stop observing once element is inserted
    }
  });
}, observerOptions);

// Observe the element
observer.observe(elementToInsert);
