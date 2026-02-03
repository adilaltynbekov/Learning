const accountID = 12341234;
let currentStatus = "Online";
let postCount = 0;

const itemName = "Socks";
let price = 10;
let quantity = 2;
const totalMessage = `You are buying ${quantity} ${itemName} for a total of $${price * quantity}.`;
console.log(totalMessage);

const calculateTotal = (price, quantity) => {
  const total = price * quantity;
  console.log(`Your total is $${total}`);
};
calculateTotal(50, 3);

const secretPassword = "pizza123";
const checkAccess = (input) => {
  if (input === secretPassword) {
    console.log("Access Granted! Welcome.");
  } else {
    console.log("Wrong password. Try again.");
  }
};

checkAccess("pizza123");
checkAccess("pizza12345");
// Access Granted! Welcome.
// Wrong password. Try again.
