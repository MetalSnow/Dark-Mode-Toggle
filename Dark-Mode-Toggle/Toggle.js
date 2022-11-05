const inputD = document.querySelector(".input");

inputD.checked = false;

const body = document.querySelector("body");
const heading = document.querySelector("p");

updateDiv();

function updateDiv() {
  if (inputD.checked) {
    body.style.background = "black";
    heading.innerHTML = "Dark Mode";
    heading.style.color = "white";
  } else {
    body.style.background = "white";
    heading.innerHTML = "Light Mode";
    heading.style.color = "black";
  }
}

inputD.addEventListener("input", () => {
  updateDiv();
});
