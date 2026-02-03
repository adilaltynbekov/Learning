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

const statusText = document.querySelector("#status-display");
const myButton = document.querySelector(".action-btn");

statusText.textContent = "User is Online";
// myButton.style.backgroundColor = "green";

const toggleBtn = document.querySelector(".toggle-btn");
const makeMagicHappen = () => {
  document.body.style.backgroundColor = "navy";
  toggleBtn.textContent = "Done!";
};
// toggleBtn.addEventListener("click", makeMagicHappen);

let isDarkMode = false;
const modeToggle = document.querySelector(".mode-toggle");
const toggleDarkMode = () => {
  if (!isDarkMode) {
    document.body.classList.add("dark-mode");
    isDarkMode = true;
    modeToggle.textContent = "Switch to Light Mode";
  } else {
    document.body.classList.remove("dark-mode");
    isDarkMode = false;
    modeToggle.textContent = "Switch to Dark Mode";
  }
};
modeToggle.addEventListener("click", toggleDarkMode);
