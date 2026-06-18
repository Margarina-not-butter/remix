const body = document.querySelector('body');
const switchButton = document.querySelector(".switch input");

switchButton.addEventListener('click', () => {
    body.classList.toggle("light");
    localStorage.setItem("lightTheme", body.classList.contains("light"));
})

if (localStorage.getItem("lightTheme") == "true") {
    body.classList.add("light");
    switchButton.checked = true;
}