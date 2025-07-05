const listItems = document.getElementsByTagName("li");

for (let i = 0; i < listItems.length; i++) {
  listItems[i].addEventListener("mouseover", (e) => {
    e.target.style.display = "none";
  });
}
