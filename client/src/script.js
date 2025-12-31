//Date for top line [hero sec]
const d = new Date();
const year = d.getFullYear();
const month = String(d.getMonth() + 1).padStart(2, "0");
const day = String(d.getDate()).padStart(2, "0"); //Padestart: Adds 0 before x

const formatted = `${year}-${month}-${day}`;

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#date").textContent = formatted;
});

let selectedDelieveryButton = "6 months"; //Button to Pass at B.E
let selectedAudienceButton = "private"; //Button to Pass at B.E

const buttons = document.querySelectorAll(".toggle-btn");
buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    buttons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    selectedDelieveryButton = btn.textContent.trim(); //Button to Pass at B.E
  });
});

const audienceButtons = document.querySelectorAll(".toggle-btn-audience");

audienceButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    audienceButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    selectedAudienceButton = btn.textContent.trim(); //Button to Pass at B.E
  });
});

//Final Button
const finalButton = document.querySelector("#send-btn");

finalButton.addEventListener("click", () => {
  //email middleware
  const emailInput = document.querySelector("#mail").value;
  console.log(emailInput);
  console.log(selectedDelieveryButton);
  if (!emailInput) alert("Error!");

  // console.log("Done!");
});
