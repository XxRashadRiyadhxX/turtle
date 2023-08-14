document.getElementById("currdate").innerText = localStorage.getItem("Date");
document.getElementById("totalSLAdults").innerText = localStorage.getItem(
  "Number of SL Adults"
);
document.getElementById("totalSLChildren").innerText = localStorage.getItem(
  "Number of SL Children"
);
document.getElementById("totalForeignerAdults").innerText =
  localStorage.getItem("Number of Foreign Adults");
document.getElementById("totalForeignerChildren").innerText =
  localStorage.getItem("Number of Foreign Children");
document.getElementById("totalInfants").innerText =
  localStorage.getItem("Number of Infants");
document.getElementById("Total1").innerText = `$${localStorage.getItem(
  "Total Price"
)}`;

let timeSlotArray = JSON.parse(localStorage.getItem("Time slot"));

let mainTimeElement = document.getElementById("MainTime");
mainTimeElement.innerText = "";
timeSlotArray.forEach((slot) => {
  let slotDiv = document.createElement("div");
  slotDiv.innerText = slot;
  mainTimeElement.appendChild(slotDiv);
});

document.getElementById("MainTime2").innerText = `${
  parseInt(localStorage.getItem("Normal Hours")) +
  parseInt(localStorage.getItem("Peak Hours"))
} hrs ( ${localStorage.getItem("Normal Hours")} Normal : ${localStorage.getItem(
  "Peak Hours"
)} Peak)`;

document.getElementById("name").innerText = localStorage.getItem("Name");
document.getElementById("mobile").innerText = localStorage.getItem("Phone");
document.getElementById("email").innerText = localStorage.getItem("Email");
document.getElementById("gender").innerText = localStorage.getItem("Gender");

const cardNumber = document.getElementById("CardNumber");
const cardName = document.getElementById("CardName");
const expDate = document.getElementById("Exp_Date");
const cvv = document.getElementById("CVV");

function validateForm() {
  let valid = true;

  // Check Card Number
  if (cardNumber.value.length !== 16) {
    document.getElementById("CreditCardNumber_Error").textContent =
      "Card number should be 16 digits";
    valid = false;
  } else {
    document.getElementById("CreditCardNumber_Error").textContent = "";
  }

  // Check Card Name
  if (!cardName.value.trim()) {
    document.getElementById("CreditCardName_Error").textContent =
      "Name on card is required";
    valid = false;
  } else {
    document.getElementById("CreditCardName_Error").textContent = "";
  }

  // Check Expiry Date
  const currentMonth = new Date().toISOString().slice(0, 7); // format: YYYY-MM
  if (expDate.value <= currentMonth) {
    document.getElementById("ExpirationDate_Error").textContent =
      "Expiration date should be after current month";
    valid = false;
  } else {
    document.getElementById("ExpirationDate_Error").textContent = "";
  }

  // Check CVV
  if (cvv.value.length !== 3) {
    document.getElementById("CVV_Error").textContent = "CVV should be 3 digits";
    valid = false;
  } else {
    document.getElementById("CVV_Error").textContent = "";
  }

  if (valid) {
    document.getElementById("paymentButton").disabled = false;
    document.getElementById(
      "paymentButton"
    ).innerText = `Pay $${localStorage.getItem("Total Price")}`;
  } else {
    document.getElementById("paymentButton").disabled = true;
  }
}

cardNumber.addEventListener("input", validateForm);
cardName.addEventListener("input", validateForm);
expDate.addEventListener("input", validateForm);
cvv.addEventListener("input", validateForm);
