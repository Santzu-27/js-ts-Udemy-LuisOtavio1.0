fetch('assets/json/pessoas.json')
  .then(response => response.json())
  .then(json => loadElementsInPage(json))

function loadElementsInPage(json){
  
}
