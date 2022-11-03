/* retrieving info from the api */
function getStarWars (url) {

  let myData = []
  fetch(url)
  .then(response => {
    if (response.ok) {
      return response;
    }
    throw Error(response.statusText);
  })
  .then(response => response.json())
  .then(data => myData = data)
  .catch(error => console.log('There was an error:', error))
  console.log(myData);
  return myData;
}

// function setNavigatation(next, previous) {
//   let nextButton = document.getElementById('next');
//   nextButton.setAttribute('value', next);
//   nextButton.addEventListener('click', });
// }


function starWars() {
  let myShips = getStarWars('https://swapi.dev/api/starships');
  buildDisplay(myShips);
  //setNavigatation(myShips.next, myShips.previous);
}

function buildDisplay(data) {
  console.log(data);
  const displayList = document.getElementById('displayList')
  displayList.innerHTML = '';
  data.results.forEach(element => {
    const li = document.createElement('li');
    li.innerText = element.name;
    displayList.appendChild(li);
  });
}

const url = 'https://swapi.dev/api/starships';

starWars();
