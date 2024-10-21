document.addEventListener("DOMContentLoaded", function() {
    const inputField = document.getElementById('input-value');
    const fromUnit = document.getElementById('from-unit');
    const toUnit = document.getElementById('to-unit');
    const convertBtn = document.getElementById('convert-btn');
    const clearBtn = document.getElementById('clear-btn');
    const resultDiv = document.getElementById('result');
  
    // Function to handle number button clicks
    document.querySelectorAll('.num-btn').forEach(button => {
      button.addEventListener('click', function() {
        inputField.value += button.textContent;
      });
    });
  
    // Function to handle decimal button click
    document.querySelector('.decimal-btn').addEventListener('click', function() {
      if (!inputField.value.includes('.')) {
        inputField.value += '.';
      }
    });
  
    // Function to clear input field
    document.querySelector('.clear-btn').addEventListener('click', function() {
      inputField.value = '';
    });
  
    convertBtn.addEventListener('click', function() {
      const inputValue = parseFloat(inputField.value);
      const from = fromUnit.value;
      const to = toUnit.value;
      
      if (!isNaN(inputValue)) {
        const convertedValue = convert(inputValue, from, to);
        resultDiv.innerText = `${inputValue} ${from} is equal to ${convertedValue} ${to}`;
      } else {
        resultDiv.innerText = 'Please enter a valid number.';
      }
    });
  
    clearBtn.addEventListener('click', function() {
      inputField.value = '';
      resultDiv.innerText = '';
    });
  
    function convert(value, from, to) {
      if (from === to) return value;
      
      switch (from) {
        case 'm':
          return to === 'km' ? value / 1000 : value * 100;
        case 'km':
          return to === 'm' ? value * 1000 : value * 100000;
        case 'cm':
          return to === 'm' ? value / 100 : value / 100000;
        default:
          return value;
      }
    }
  });
  