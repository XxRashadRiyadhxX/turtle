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
document.getElementById("SLAdult1").innerText = `$${localStorage.getItem(
  "Price of SL Adults"
)}`;
document.getElementById("SLChild1").innerText = `$${localStorage.getItem(
  "Price of SL Children"
)}`;
document.getElementById("ForeignerAdult1").innerText = `$${localStorage.getItem(
  "Price of Foreign Adults"
)}`;
document.getElementById("ForeignerChild1").innerText = `$${localStorage.getItem(
  "Price of Foreign Children"
)}`;
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

const optionMenu = document.querySelector(".select-menu"),
  selectBtn = optionMenu.querySelector(".select-btn"),
  options = optionMenu.querySelectorAll(".option"),
  sBtn_text = optionMenu.querySelector(".sBtn-text");
selectBtn.addEventListener("click", () =>
  optionMenu.classList.toggle("active")
);
options.forEach((option) => {
  option.addEventListener("click", () => {
    let selectedOption = option.querySelector(".option-text").innerText;
    sBtn_text.innerText = selectedOption;
    optionMenu.classList.remove("active");
  });
});


document.addEventListener("DOMContentLoaded", function () {
  // your code here
  const fullName = document.getElementById("FullName");
  const mobileNumber = document.getElementById("MobileNumber");
  const email = document.getElementById("Email");
  const confirmEmail = document.getElementById("ConfirmEmail");
  const gender = document.getElementById("Gender");
  const countryDropdown = document.querySelector(".sBtn-text");

  function validateForm() {
    let valid = true;

    // Check if Full Name is empty
    if (fullName.value.trim() === "") {
      document.getElementById("NameError").textContent =
        "Full Name is required";
      valid = false;
    } else {
      document.getElementById("NameError").textContent = "";
    }

    // Check if Phone Number is empty or not 10 digits
    if (
      mobileNumber.value.trim() === "" ||
      mobileNumber.value.trim().length !== 10
    ) {
      document.getElementById("PhoneError").textContent =
        "Phone number should be 10 digits";
      valid = false;
    } else {
      document.getElementById("PhoneError").textContent = "";
    }

    // Check if Email is empty or doesn't match the Confirm Email
    if (email.value.trim() === "") {
      document.getElementById("EmailError").textContent = "Email is required";
      valid = false;
    } else {
      document.getElementById("EmailError").textContent = "";
    }

    if (confirmEmail.value.trim() === "") {
      document.getElementById("ConfirmEmailError").textContent =
        "Confirm Email is required";
      valid = false;
    } else if (email.value.trim() !== confirmEmail.value.trim()) {
      document.getElementById("ConfirmEmailError").textContent =
        "Emails do not match";
      valid = false;
    } else {
      document.getElementById("ConfirmEmailError").textContent = "";
    }

    // Check if country is selected
    if (countryDropdown.textContent === "Select your option") {
      // Assuming you want to display the error inside the dropdown for now
      countryDropdown.style.backgroundColor = "red";
      valid = false;
    } else {
      countryDropdown.style.backgroundColor = "transparent";
      countryDropdown.style.color = "#171515";
    }

    if (valid) {
      document.getElementById("purchaseButton").disabled = false;
    } else {
      document.getElementById("purchaseButton").disabled = true;
    }

    localStorage.setItem("Name", fullName.value);
    localStorage.setItem("Phone", mobileNumber.value);
    localStorage.setItem("Email", email.value);
    localStorage.setItem("Gender", gender.value);
  }

  // Event Listeners
  fullName.addEventListener("input", validateForm);
  mobileNumber.addEventListener("input", validateForm);
  email.addEventListener("input", validateForm);
  confirmEmail.addEventListener("input", validateForm);

  const optionsDropdown = document.querySelectorAll(".option");
  optionsDropdown.forEach((option) => {
    option.addEventListener("click", function () {
      const selectedText = this.querySelector(".option-text").textContent;
      countryDropdown.textContent = selectedText;
      validateForm();
    });
  });

});


