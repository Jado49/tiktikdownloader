// Wait for the DOM content to load before executing JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Example 1: Accessing and manipulating DOM elements
    const header = document.getElementById('header');
    header.textContent = 'Hello, Document!'; // Change text content of an element

    const paragraph = document.createElement('p'); // Create a new <p> element
    paragraph.textContent = 'This is a dynamically created paragraph.'; // Set its text content

    const container = document.getElementById('container');
    container.appendChild(paragraph); // Append the paragraph to an existing element

    // Example 2: Handling events
    const button = document.getElementById('btn');
    button.addEventListener('click', function() {
        alert('Button clicked!'); // Show an alert when button is clicked
    });

    // Example 3: Form handling
    const form = document.getElementById('myForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission
        const formData = new FormData(form);
        const inputValue = formData.get('inputField'); // Get value of input field
        console.log('Form submitted with value:', inputValue);
    });

    // Example 4: Manipulating CSS classes
    const box = document.getElementById('box');
    box.classList.add('highlight'); // Add a CSS class to an element

    // Example 5: Working with styles directly
    const text = document.getElementById('text');
    text.style.color = 'blue'; // Change text color dynamically
});
