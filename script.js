document.addEventListener("DOMContentLoaded", function () {
  console.log("Noorul Ilm System Ready");

  const buttons = document.querySelectorAll(".menu-btn");

  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      alert("Noorul Ilm - স্বাগতম!");
    });
  });
});
