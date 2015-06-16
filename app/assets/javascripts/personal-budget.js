var moneyInput = document.getElementById('money_made');
var moneyButton = document.getElementById('money_made_button');
var totalMoney = 0;
var totalGone = 0;

moneyButton.addEventListener('click', function() {
  // when I click button, execute code inside this function
  totalMoney = moneyInput.value;
console.log(totalMoney);
});

var moneySpent = document.getElementsByClassName('bill_input');
var moneySpentButton = document.getElementById('total_spent_button');
// var totalSpent = 0;

moneySpentButton.addEventListener('click', function() {
  for(var i = 0; i < moneySpent.length; i++){
    var element = moneySpent[i];
    console.log(element);
    totalGone += parseInt(element.value);
  }
});
console.log(totalGone);


// totalSpent = moneySpent.value;


// Amount<input id= "money_spent" type="number"></input>
// Bill Name<input id= "bill_name" type="string"></input>
// <button type="button" id="money_spent_button">Save</button>
