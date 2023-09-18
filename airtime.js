var option = prompt("Select the amount of credit you want to buy:\n1. #100\n2. #200\n3. #500\n4. #1000\n5. #1500");

var choice = parseInt(option);
var selectedAmount;

switch (choice) {
  case 1:
    selectedAmount = 100;
    break;
  case 2:
    selectedAmount = 200;
    break;
  case 3:
    selectedAmount = 500;
    break;
  case 4:
    selectedAmount = 1000;
    break;
  case 5:
    selectedAmount = 1500;
    break;
  default:
    alert("Invalid choice. Please select a valid option.");
}

if (selectedAmount !== undefined) {

  alert("You have successfully purchased #" + selectedAmount + " worth of airtime.");
} else {
  alert("Airtime purchase canceled.");
}
