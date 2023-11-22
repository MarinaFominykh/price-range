const range = document.querySelectorAll('.range-container input');
const progress = document.querySelector('.progress');
const priceValue = document.querySelectorAll('.value-container input');
let limit = 140;
range.forEach((input) => {
  input.addEventListener('input', (e) => {
    let minVal = parseInt(range[0].value);
    let maxVal = parseInt(range[1].value);
    console.log('minVal', minVal);
    console.log('max', maxVal);
    if (maxVal - minVal < limit) {
      if (e.target.className === 'min') {
        range[0].value = maxVal - limit;
      } else {
        range[1].value = minVal + limit;
      }
    } else {
      priceValue[0].value = `${minVal} ₽`;
      priceValue[1].value = `${maxVal} ₽`;
      let persentMin = (minVal / range[0].max) * 100;
      let persentMax = (maxVal / range[1].max) * 100;
      progress.style.left = `${persentMin}%`;
      progress.style.right = `${100 - persentMax}%`;
    }
  });
});
