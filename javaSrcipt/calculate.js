document.getElementById("calculating").addEventListener("click", function () {
  const playerValue = getInputValueById("players");

  if (isNaN(playerValue)) {
    alert("Please provide  number");
    return;
  } else if (playerValue < 0) {
    alert("Provide positive number");
    return;
  }

  const selectedPlayerTotal = getElementById("selected-All");

  const totalPlayerExpenseAmount = playerValue * selectedPlayerTotal;

  const playerExpenses = setElementValueById("playervalue", totalPlayerExpenseAmount);
});

// Calculate Total

document.getElementById("calculation").addEventListener("click", function () {
  const managerAmount = getInputValueById("managermoney");

  const coachAmount = getInputValueById("coachmoney");

  const playerExpenses = getElementById("playervalue");

  if (managerAmount < 0) {
    alert("Provide positive value");
    return;
  } else if (coachAmount < 0) {
    alert("Provide positive value");
    return;
  }
  if (isNaN(coachAmount)) {
    alert("Please provide Numarice value");
    return;
  } else if (isNaN(managerAmount)) {
    alert("Please provide Numarice value");
    return;
  }

  const totalAmount = managerAmount + coachAmount + playerExpenses;

  const total = document.getElementById("totalmoney");
  total.innerText = totalAmount;
});
