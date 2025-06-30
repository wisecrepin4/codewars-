const input = document.getElementById("input");
const listItems = document.querySelectorAll("li");

input.addEventListener("input", (e) => {
  let text = e.target.value;
  for (let i = 0; i < listItems.length; i++) {
    if (!listItems[i].textContent.includes(text)) {
      listItems[i].style.display = "none";
    } else {
      listItems[i].style.display = "block";
    }
  }
});
