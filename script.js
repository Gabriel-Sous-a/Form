const button = document.getElementById("button");
const colors = ["pink", "red", "orange", "yellow", "green", "blue", "purple"];

button.addEventListener("mouseout", () => {
  button.style.backgroundColor = colors[colorsChange ()];
});
button.addEventListener("mouseup", () => {
  button.style.color = colors[colorsChange ()];
});

function colorsChange () {
    return Math.floor(Math.random() * colors.length);
}

let age = document.getElementById("age");
const range = document.getElementById("range");

range.addEventListener("input", (e) => {
    age.innerHTML = e.target.value;
})

