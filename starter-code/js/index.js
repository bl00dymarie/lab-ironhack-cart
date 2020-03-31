var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');

function updateSubtotal($product) {
  let prices = [];
  let quantity = [];
  let subtotal = [];
  document.querySelectorAll('.pu span').forEach(onePrice => {
    console.log(onePrice.innerHTML)
    prices.push(parseFloat(onePrice.innerHTML))
  })
  document.querySelectorAll('.qty input').forEach(q => {
    console.log(q.value)
    quantity.push(parseInt(q.value))
  })
  document.querySelectorAll('.subtot span').forEach(subt => {
    subtotal.push(subt.innerHTML)
    for (let i = 0; i < prices.length; i++) {
      console.log(subtotal[i] = prices[i] * quantity[i])
    }
  })
}


function calculateAll() {
  updateSubtotal()
}
$calc.onclick = calculateAll;