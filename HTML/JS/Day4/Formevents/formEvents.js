const form = document.getElementById("userForm");
const formOutput = document.getElementById("formOutput");

// Submit event
form.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent form submission
  formOutput.textContent = `Submitted: ${form.username.value}, Age: ${form.age.value}`;
});

// Change event
form.age.addEventListener("change", () => {
  formOutput.textContent = `Age updated: ${form.age.value}`;
});

// Input event
form.username.addEventListener("input", () => {
  formOutput.textContent = `Username: ${form.username.value}`;
});
