const button = document.getElementById('click');

const clickCountElement = document.getElementById('click-count');

let clickCount = 0; 

function debounce(fn, delay) {
  let timeout;
  return function () {
    clearTimeout(timeout);  
    timeout = setTimeout(() => {
      fn();
    }, delay);
  };
}

function updateClickCount() {
  clickCount++; 
  clickCountElement.textContent = `Click count: ${clickCount}`; 
}

button.addEventListener("click", debounce(updateClickCount, 3000));
