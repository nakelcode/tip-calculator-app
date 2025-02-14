const bill = document.querySelector(".bill-input");
const custom = document.querySelector(".custom-input");
const people = document.querySelector(".people-input");
const tipAmount = document.querySelector("#tip-amount");
const total = document.querySelector("#total-cost");
const warning = document.querySelector("#warn");
const resetBtn = document.querySelector(".reset-btn");

// Function to calculate tip
function calculateTip(tipPercent) {
    const billValue = parseFloat(bill.value);
    const peopleValue = parseInt(people.value);

    // Validation
    if (!billValue || !peopleValue || peopleValue === 0) {
        warning.textContent = "Can't be zero";
        tipAmount.textContent = "0.00";
        total.textContent = "0.00";
        people.style.border = "2px solid red";
        return;
    }

    // Tip calculations
    const tip = billValue * tipPercent;
    const tipPerPerson = tip / peopleValue;
    const totalPerPerson = (billValue + tip) / peopleValue;

    // Update UI
    tipAmount.textContent = tipPerPerson.toFixed(2);
    total.textContent = totalPerPerson.toFixed(2);
    warning.textContent = ""; // Remove warning if valid
}

// Handle tip percentage buttons
document.querySelectorAll(".percent").forEach(button => {
    button.addEventListener("click", function () {
        const tipPercent = parseFloat(this.innerText) / 100;
        calculateTip(tipPercent);
    });
});

// Handle custom tip input
custom.addEventListener("input", function () {
    const tipPercent = parseFloat(custom.value) / 100;
    if (!isNaN(tipPercent)) {
        calculateTip(tipPercent);
    }
});

// Remove warning when people input is valid
people.addEventListener("input", function () {
    if (parseInt(people.value) > 0) {
        warning.textContent = "";
    }
});

// Reset button functionality
resetBtn.addEventListener("click", function () {
    bill.value = "";
    people.value = "";
    custom.value = "";
    tipAmount.textContent = "0.00";
    total.textContent = "0.00";
    warning.textContent = "";
    people.style.border = "none";
});
