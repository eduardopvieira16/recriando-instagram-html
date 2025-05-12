document.addEventListener("DOMContentLoaded", function () {
  const profileSection = document.querySelector(".profile-section");
  const formGroup = document.querySelector(".form-group");
  const switchAccountButton = document.querySelector(".switch-account-button");
  const loginButton = document.querySelector(".login-button");

  if (profileSection && formGroup && switchAccountButton && loginButton) {
    formGroup.style.display = "none";
    switchAccountButton.addEventListener("click", () => {
      profileSection.style.display = "none";
      formGroup.style.display = "flex";
    });
    loginButton.addEventListener("click", () => {
      alert("Login realizado como dudupv16 (simulação)");
    });
  }

  const formInputs = document.querySelectorAll(".form-input");
  const formButton = document.querySelector(".form-button");

  formInputs.forEach((input) => {
    input.addEventListener("input", () => {
      const allFilled = Array.from(formInputs).every(
        (input) => input.value.trim() !== ""
      );
      formButton.classList.toggle("active", allFilled);
    });
  });

  const appButtons = document.querySelectorAll(".app-button");
  appButtons.forEach((button) => {
    button.addEventListener("mouseenter", () => {
      button.style.transform = "scale(1.05)";
    });
    button.addEventListener("mouseleave", () => {
      button.style.transform = "scale(1)";
    });
  });
});
