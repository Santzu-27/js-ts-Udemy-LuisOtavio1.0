document.addEventListener("click", (e) => {
  const el = e.target;
  const tag = el.tagName.toLowerCase();
  if (tag === "a") {
    e.preventDefault();
    loadPage(el);
  }
});
async function loadPage(e) {
  const href = e.getAttribute("href");
  fetch(href)
  .then(response => response.text())
  .then(responseHTML => {loadResult(responseHTML); alert('Funciionou')})
  .catch(e => alert(e))
}

function loadResult(response) {
  const result = document.querySelector("#result");
  console.log(response);
  result.innerHTML = response;
}
