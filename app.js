// increasing items number
const increaseBtn = document.getElementById('increase-item');
increaseBtn.addEventListener('click', function() {
  // phone items increasing
  const totalPhone = document.getElementById('total-phone').value;
  let totalPhoneNum = parseFloat(totalPhone);
  totalPhoneNum++;
  document.getElementById('total-phone').value = totalPhoneNum;

  // phone price increasing
  const phonePrice = document.getElementById('phone-price').innerText;
  let phonePriceNum = parseFloat(phonePrice);
  phonePriceNum = 1219 * totalPhoneNum;
  document.getElementById('phone-price').innerText = phonePriceNum;

});

// decreasing items number
const decreaseBtn = document.getElementById('decrease-item');
decreaseBtn.addEventListener('click', function() {
  // phone items decreasing
  const totalPhone = document.getElementById('total-phone').value;
  let totalPhoneNum = parseFloat(totalPhone);
  totalPhoneNum--;
  if (totalPhoneNum > 0) {
    document.getElementById('total-phone').value = totalPhoneNum;
  } else {
    totalPhoneNum = 1;
  }

  // phone price decreasing
  const phonePrice = document.getElementById('phone-price').innerText;
  let phonePriceNum = parseFloat(phonePrice);
  phonePriceNum = 1219 * totalPhoneNum;
  document.getElementById('phone-price').innerText = phonePriceNum;

});


// increasing case items and price
const caseIncreseBtn = document.getElementById('increase-case-item');
caseIncreseBtn.addEventListener('click', function() {
  // case items increasing
  const totalCase = document.getElementById('total-case').value;
  let totalCaseNum = parseFloat(totalCase);
  totalCaseNum++;
  document.getElementById('total-case').value = totalCaseNum;

  // phone price increasing
  const casePrice = document.getElementById('case-price').innerText;
  let casePriceNum = parseFloat(casePrice);
  casePriceNum = 59 * totalCaseNum;
  document.getElementById('case-price').innerText = casePriceNum;
});

// decreasing case items and price
const caseDecreaseBtn = document.getElementById('decrease-case-item');
caseDecreaseBtn.addEventListener('click', function () {
  // case items decreasing
  const totalCase = document.getElementById('total-case').value;
  let totalCaseNum = parseFloat(totalCase);
  totalCaseNum--;
  if (totalCaseNum > 0) {
    document.getElementById('total-case').value = totalCaseNum;
  } else {
    totalCaseNum = 1;
  }

  // case price decreasing
  const casePrice = document.getElementById('case-price').innerText;
  let casePriceNum = parseFloat(casePrice);
  casePriceNum = 59 * totalCaseNum;
  document.getElementById('case-price').innerText = casePriceNum;

});