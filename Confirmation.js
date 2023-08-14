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
