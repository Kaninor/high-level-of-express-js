const button = document.getElementById("click");
const num_label = document.getElementById("num");

let number = 0;

button.addEventListener("click", () => {
    num_label.innerText = ++number;
})