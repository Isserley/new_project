var moneyInput = document.getElementById('money_made');
var moneyButton = document.getElementById('money_made_button');
var totalMoney = 0;

moneyButton.addEventListener('click', function() {
  // when I click button, execute code inside this function
  totalMoney = moneyInput.value;
console.log(totalMoney);
});

// console.log(totalMoney);
