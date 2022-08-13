const sectionEl = document.querySelectorAll("section[data-purpose='sidebar'] div.udlite-btn");
sectionEl.forEach((section) => {
  const isClosed = section.parentElement.querySelector("span").getAttribute("data-checked") !== "checked"
  if (isClosed) section.click()
});

// Stores all checkboxes on the page, and clicks on any checkboxes on that currently checked
const checkboxes = document.querySelectorAll("input[type='checkbox']");
checkboxes.forEach((checkbox) => {
  if(!checkbox.checked) {
    checkbox.click();
  }
})
