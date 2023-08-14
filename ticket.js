// DATES
const today = new Date().toISOString().slice(0, 10);
document.getElementById("selectedDate").min = today;
document.getElementById("currdate").innerText = today;
document.getElementById("selectedDate").addEventListener("change", updateDate);

function updateDate() {
  const pickedDate = document.getElementById("selectedDate").value;
  document.getElementById("currdate").innerText = pickedDate;
  localStorage.setItem("Date", pickedDate);
}

// GUESTS
let peakHour = 0;
let normalHour = 1;
let totalSLAdult = 0;
let totalSLChild = 0;
let totalForeignAdult = 1;
let totalForeignChild = 0;
let totalInfants = 0;
let totalPeople =
  totalSLAdult +
  totalForeignAdult +
  totalSLChild +
  totalForeignChild +
  totalInfants;
let totalHours = peakHour + normalHour;

updateSummary();

// Dynamically update the summary table
function updateSummary() {
  const SLAdults = document.getElementById("totalSLAdults");
  const foreignerAdults = document.getElementById("totalForeignerAdults");
  const SLChildren = document.getElementById("totalSLChildren");
  const foreignerChildren = document.getElementById("totalForeignerChildren");
  const infants = document.getElementById("totalInfants");

  if (totalSLAdult > 0) {
    SLAdults.innerText = totalSLAdult;
  } else {
    SLAdults.innerText = "";
  }
  if (totalSLChild > 0) {
    SLChildren.innerText = totalSLChild;
  } else {
    SLChildren.innerText = "";
  }
  if (totalForeignAdult > 0) {
    foreignerAdults.innerText = totalForeignAdult;
  } else {
    foreignerAdults.innerText = "";
  }
  if (totalForeignChild > 0) {
    foreignerChildren.innerText = totalForeignChild;
  } else {
    foreignerChildren.innerText = "";
  }
  if (totalInfants > 0) {
    infants.innerText = totalInfants;
  } else {
    infants.innerText = "";
  }

  const SLAdultsPrice = document.getElementById("SLAdult1");
  const SLChildrenPrice = document.getElementById("SLChild1");
  const ForeignerAdultsPrice = document.getElementById("ForeignerAdult1");
  const ForeignerChildrenPrice = document.getElementById("ForeignerChild1");
  const TotalPrice = document.getElementById("Total1");

  let SLAdultPrice = totalSLAdult * ((normalHour - 1) * 4 + peakHour * 6);
  let foreignerAdultPrice =
    totalForeignAdult * ((normalHour - 1) * 10 + peakHour * 13);
  let SLChildPrice = totalSLChild * ((normalHour - 1) * 2 + peakHour * 3);
  let foreignerChildPrice =
    totalForeignChild * ((normalHour - 1) * 5 + peakHour * 8);

  let totalPrice =
    SLAdultPrice + foreignerAdultPrice + SLChildPrice + foreignerChildPrice;

  if (SLAdultPrice > 0) {
    SLAdultsPrice.innerText = `$${SLAdultPrice}`;
  } else {
    SLAdultsPrice.innerText = "";
  }
  if (foreignerAdultPrice > 0) {
    ForeignerAdultsPrice.innerText = `$${foreignerAdultPrice}`;
  } else {
    ForeignerAdultsPrice.innerText = "";
  }
  if (SLChildPrice > 0) {
    SLChildrenPrice.innerText = `$${SLChildPrice}`;
  } else {
    SLChildrenPrice.innerText = "";
  }
  if (foreignerChildPrice > 0) {
    ForeignerChildrenPrice.innerText = `$${foreignerChildPrice}`;
  } else {
    ForeignerChildrenPrice.innerText = "";
  }
  TotalPrice.innerText = `$${totalPrice}`;

  localStorage.setItem("Number of SL Adults", totalSLAdult);
  localStorage.setItem("Number of SL Children", totalSLChild);
  localStorage.setItem("Number of Foreign Adults", totalForeignAdult);
  localStorage.setItem("Number of Foreign Children", totalForeignChild);
  localStorage.setItem("Number of Infants", totalInfants);
  localStorage.setItem("Price of SL Adults", SLAdultPrice);
  localStorage.setItem("Price of SL Children", SLChildPrice);
  localStorage.setItem("Price of Foreign Adults", foreignerAdultPrice);
  localStorage.setItem("Price of Foreign Children", foreignerChildPrice);
  localStorage.setItem("Total Price", totalPrice);
}

// Increment and Decrement
const SLAdultD = document.getElementById("SLAdultDecrement");
const SLAdultI = document.getElementById("SLAdultIncrement");
const SLChildD = document.getElementById("SLChildDecrement");
const SlChildI = document.getElementById("SLChildIncrement");
const ForeignAdultI = document.getElementById("ForeignerAdultIncrement");
const ForeignAdultD = document.getElementById("ForeignerAdultDecrement");
const ForeignChildI = document.getElementById("ForeignerChildIncrement");
const ForeignChildD = document.getElementById("ForeignerChildDecrement");
const InfantI = document.getElementById("InfantsIncrement");
const InfantD = document.getElementById("InfantsDecrement");
const AdultSL = document.getElementById("SLAdult");
const ChildSL = document.getElementById("SLChild");
const AdultFr = document.getElementById("ForeignerAdult");
const ChildFr = document.getElementById("ForeignerChild");
const Infant = document.getElementById("Infants");

// Increment and decrement listeners
SLAdultI.addEventListener("click", IncSLAdult);
SlChildI.addEventListener("click", IncSLChild);
ForeignAdultI.addEventListener("click", IncFrAdult);
ForeignChildI.addEventListener("click", IncFrChild);
InfantI.addEventListener("click", IncInf);
SLAdultD.addEventListener("click", DecSLAdult);
SLChildD.addEventListener("click", DecSLChild);
ForeignAdultD.addEventListener("click", DecFrAdult);
ForeignChildD.addEventListener("click", DecFrChild);
InfantD.addEventListener("click", DecInf);

function IncSLAdult() {
  let value = parseInt(AdultSL.value);
  value++;
  AdultSL.value = value;
  totalSLAdult = value;
  updateSummary();
}
function IncSLChild() {
  let value = parseInt(ChildSL.value);
  value++;
  ChildSL.value = value;
  totalSLChild = value;
  updateSummary();
}
function IncFrAdult() {
  let value = parseInt(AdultFr.value);
  value++;
  AdultFr.value = value;
  totalForeignAdult = value;
  updateSummary();
}
function IncFrChild() {
  let value = parseInt(ChildFr.value);
  value++;
  ChildFr.value = value;
  totalForeignChild = value;
  updateSummary();
}
function IncInf() {
  let value = parseInt(Infant.value);
  value++;
  Infant.value = value;
  totalInfants = value;
  updateSummary();
}

//decrement value
function DecSLAdult() {
  let value = parseInt(AdultSL.value);
  if (value > 0) {
    value--;
    AdultSL.value = value;
    totalSLAdult = value;
    updateSummary();
  }
}
function DecSLChild() {
  let value = parseInt(ChildSL.value);
  if (value > 0) {
    value--;
    ChildSL.value = value;
    totalSLChild = value;
    updateSummary();
  }
}
function DecFrAdult() {
  let value = parseInt(AdultFr.value);
  if (value > 0) {
    value--;
    AdultFr.value = value;
    totalForeignAdult = value;
    updateSummary();
  }
}
function DecFrChild() {
  let value = parseInt(ChildFr.value);
  if (value > 0) {
    value--;
    ChildFr.value = value;
    totalForeignChild = value;
    updateSummary();
  }
}
function DecInf() {
  let value = parseInt(Infant.value);
  if (value > 0) {
    value--;
    Infant.value = value;
    totalInfants = value;
    updateSummary();
  }
}

// DURATION
const durationSlot = document.getElementById("duration-slot");
document.getElementById("MainTime").innerText = `${durationSlot.value}`;
document.getElementById("MainTime2").innerText = `${
  normalHour + peakHour
} hrs (${normalHour} Normal: ${peakHour} Peak)`;

durationSlot.addEventListener("change", updateDuration);

let durations = [];
function updateDuration() {
  const selectedDuration =
    durationSlot.options[durationSlot.selectedIndex].text;
  durations.push(selectedDuration);
  document.getElementById("MainTime").innerHTML = durations.join("<br>");

  if (selectedDuration.includes("(Peak)")) {
    peakHour++;
  } else {
    normalHour++;
  }
  document.getElementById("MainTime2").innerText = `${
    normalHour + peakHour - 1
  } hrs (${normalHour - 1} Normal: ${peakHour} Peak)`;

  localStorage.setItem("Normal Hours", normalHour - 1);
  localStorage.setItem("Peak Hours", peakHour);
  localStorage.setItem("Time slot", JSON.stringify(durations));
}

function checkForm() {
  const selectedDate = document.getElementById("selectedDate").value;
  const duration = document.getElementById("duration-slot").value;
  const SLAdult1 = document.getElementById("totalSLAdults").textContent;
  const SLChild1 = document.getElementById("totalSLChildren").textContent;
  const ForeignerAdult1 = document.getElementById(
    "totalForeignerAdults"
  ).textContent;
  const ForeignerChild1 = document.getElementById(
    "totalForeignerChildren"
  ).textContent;
  const Infant1 = document.getElementById("totalInfants").textContent;

  if (
    selectedDate &&
    duration &&
    (SLAdult1 || SLChild1 || ForeignerAdult1 || ForeignerChild1 || Infant1)
  ) {
    document.getElementById("purchaseButton").disabled = false;
  } else {
    document.getElementById("purchaseButton").disabled = true;
  }
}

// This will call the function every time an input value changes
document.addEventListener("input", checkForm);
