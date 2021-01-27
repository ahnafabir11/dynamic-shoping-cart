// increasing phone items number, price and total
const increaseBtn = document.getElementById('increase-item');
increaseBtn.addEventListener('click', function() {

  // phone item and price Increment
  let phonePriceNum = itemPriceIncrement('total-phone', 'phone-price', 1219);

  // updating subtotal, tax and total Price
  totalCalculation("case-price", phonePriceNum);

});

// increasing case item number, price and total
const caseIncreseBtn = document.getElementById('increase-case-item');
caseIncreseBtn.addEventListener('click', function () {

  // case item amd price increment
  let casePriceNum = itemPriceIncrement('total-case', 'case-price', 59);
  // updating subtotal and total Price
  totalCalculation("phone-price", casePriceNum);

});



// decreasing phone items number , Price and total
const decreaseBtn = document.getElementById('decrease-item');
decreaseBtn.addEventListener('click', function() {

  // phone item and price decrement
  let phonePriceNum = itemPriceDecrement('total-phone', 'phone-price', 1219);
  // updating subtotal, tax and total Price
  totalCalculation("case-price", phonePriceNum);

});


// decreasing case items number, price and total
const caseDecreaseBtn = document.getElementById('decrease-case-item');
caseDecreaseBtn.addEventListener('click', function () {
  
  //case item and price decrement
  let casePriceNum = itemPriceDecrement('total-case', 'case-price', 59)
  // updating subtotal and total Price
  totalCalculation("phone-price", casePriceNum);

});

// code simplifier functions

function itemPriceIncrement(items, price, value) {
  // items increasing
  const itemValue = document.getElementById(items).value;
  let itemValueNum = parseFloat(itemValue);
  itemValueNum++;
  document.getElementById(items).value = itemValueNum;

  // price increasing
  const itemPrice = document.getElementById(price).innerText;
  let itemsPriceNum = parseFloat(itemPrice);
  itemsPriceNum = value * itemValueNum;
  document.getElementById(price).innerText = itemsPriceNum;
  return itemsPriceNum;
}

function itemPriceDecrement(items, price, value) {
  // phone items decreasing
  const totlaItems = document.getElementById(items).value;
  let totalItemsNum = parseFloat(totlaItems);
  totalItemsNum--;
  if (totalItemsNum > 0) {
    document.getElementById(items).value = totalItemsNum;
  } else {
    totalItemsNum = 1;
  }

  // phone price decreasing
  const totalPrice = document.getElementById(price).innerText;
  let totalPriceNum = parseFloat(totalPrice);
  totalPriceNum = value * totalItemsNum;
  document.getElementById(price).innerText = totalPriceNum;
  return totalPriceNum;
}


function totalCalculation(id, otherItemNum) {
  const price = document.getElementById(id).innerText;
  const priceNum = parseFloat(price);
  const subTotal = document.getElementById('sub-total').innerText;
  let subTotalNum = parseFloat(subTotal);
  const totalTax = document.getElementById('tax').innerText;
  let totalTaxNum = parseFloat(totalTax);
  const total = document.getElementById('total').innerText;
  let totalNum = parseFloat(total);

  subTotalNum = priceNum + otherItemNum;
  totalTaxNum = (subTotalNum * 15) / 100;
  totalNum = Math.ceil(subTotalNum + totalTaxNum);

  document.getElementById('sub-total').innerText = subTotalNum;
  document.getElementById('tax').innerText = totalTaxNum;
  document.getElementById('total').innerText = totalNum;
}