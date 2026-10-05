document.querySelector('#clickMe').addEventListener('click', getInput)

function getInput(){

  const userCoinSelection = document.querySelector("#userCoinSelection").value.toLowerCase(); // need to have the .value to get the thing inputted
console.log(userCoinSelection)
  fetch(`/api?coinFlip=${userCoinSelection}`)
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      document.querySelector("#winOrLose").textContent = data.yourChoice
      document.querySelector("#headsOrTailsCalculationFromAPI").textContent = data.flipResult
      document.querySelector("#winOrLoseMessage").textContent = data.winOrLoseMessage
    });

}

