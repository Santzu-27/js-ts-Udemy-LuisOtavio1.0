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
  loadResult(response);
}

function loadResult(response) {
  const result = document.querySelector("#result");
  console.log(response);
  result.innerHTML = response;
}
