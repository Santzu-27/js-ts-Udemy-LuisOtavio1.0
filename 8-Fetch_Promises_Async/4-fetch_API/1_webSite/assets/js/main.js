document.addEventListener("click", (e) => {
  const el = e.target;
  const tag = el.tagName.toLowerCase();
  if (tag === "a") {
    e.preventDefault();
    loadPage(el);
  }
});
async function loadPage(e) {
  try {
    const href = e.getAttribute("href");

    const response = await fetch(href);
    const html = await response.text();
    if(response.status !==200) throw new Error('Errinho')

    loadResult(html);
  } catch (error) {
    console.warn('ERRO')
    window.alert('Erro proposital para testes: '+ error);
  }

  //   fetch(href)
  //     .then((response) => response.text())
  //     .then((responseHTML) => {
  //       loadResult(responseHTML);
  //       alert("Funciionou");
  //     })
  //     .catch((e) => alert(e));
}

function loadResult(response) {
  const result = document.querySelector("#result");
  console.log(response);
  result.innerHTML = response;
}
