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

  // phone price increasing
  const phonePrice = document.getElementById('phone-price').innerText;
  let phonePriceNum = parseFloat(phonePrice);
  phonePriceNum = 1219 * totalPhoneNum;
  document.getElementById('phone-price').innerText = phonePriceNum;

});