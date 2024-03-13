fetch('assets/json/pessoas.json')
  .then(response => response.json())
  .then(json => loadElementsInPage(json))

function loadElementsInPage(json){
  const table = document.createElement('table');
  let thName = document.createElement('th');
  let thAge = document.createElement('th');
  let thSalary = document.createElement('th');
  let trHead = document.createElement('tr')

  thName.innerHTML = 'Nome';
  thAge.innerHTML = 'Idade'
  thSalary.innerHTML = 'Salário'

  trHead.appendChild(thName);
  trHead.appendChild(thAge);
  trHead.appendChild(thSalary);
  table.appendChild(trHead);
  
  for (const person of json) {
    let tr = document.createElement('tr')
    let td = document.createElement('td')
    
  }
  const result = document.querySelector('#result')
  result.appendChild(table);
}
// loadElementsInPage()