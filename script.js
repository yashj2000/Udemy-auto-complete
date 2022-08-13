// Stores all unexpanded section headers, and clicks on the unexpanded section headers to expand them
const sectionEl = document.querySelectorAll("section[data-purpose='sidebar'] div.udlite-btn");
sectionEl.forEach((section) => {
  const isClosed = section.parentElement.querySelector("span").getAttribute("data-checked") !== "checked"
  if (isClosed) section.click()
});

// Stores all checkboxes on the page in an array, and clicks on the checkboxes that are unchecked
const checkboxes = document.querySelectorAll("input[type='checkbox']");
checkboxes.forEach((checkbox) => {
  if(!checkbox.checked) {
    checkbox.click();
  }
})
