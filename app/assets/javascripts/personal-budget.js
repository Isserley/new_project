var moneyInput = document.getElementById('money_made');
var moneyButton = document.getElementById('money_made_button');
var totalMoney = 0;

moneyButton.addEventListener('click', function() {
  // when I click button, execute code inside this function
  totalMoney = moneyInput.value;
console.log(totalMoney);
});

var moneySpent = document.getElementById('money_spent');
var moneySpentButton = document.getElementById('money_spent_button');
var totalSpent = 0;

moneySpentButton.addEventListener('click', function() {
  totalSpent = moneySpent.value
  console.log(totalSpent)
})

// totalSpent = moneySpent.value;


// Amount<input id= "money_spent" type="number"></input>
// Bill Name<input id= "bill_name" type="string"></input>
// <button type="button" id="money_spent_button">Save</button>
