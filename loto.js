let userNumberChoices = [];


function numaraekle() {

  let numberInput = document.getElementById("numberInput");
  let number = parseInt(numberInput.value);

  if (isNaN(number) || number < 1 || number > 100) {
    alert("Please enter a number between 1 and 100.");
    return;
  }

  
  if (userNumberChoices.includes(number)) {
    alert("You have already entered this number. Please choose a different number.");
    return;
  }

  if (userNumberChoices.length >= 6) {
    alert("You have already entered 6 numbers.");
    return;
  }

  userNumberChoices.push(number);
  let numberList = document.getElementById("numberList");
  let numberItem = document.createElement("li");
  numberItem.textContent = number;
  numberList.appendChild(numberItem);


  numberInput.value = "";


  
}

function lotOoyna() {
 
  if (userNumberChoices.length != 6) {
    alert("Please enter 6 numbers first.");
    return;
  }

  
  let resultsList = document.getElementById("resultsList");
  resultsList.innerHTML = "";


  let lotteryNumbers = [];
  while (lotteryNumbers.length < 6) {
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    if (!lotteryNumbers.includes(randomNumber)) {
      lotteryNumbers.push(randomNumber);
    }
  }

    lotteryNumbers.sort(function(a, b) {
        return a - b;
      });


      let resultItem = document.createElement("li");
      
      
      let tutanNumaralar=[];
     
      let numMatches = 0;
      for (let i = 0; i < userNumberChoices.length; i++) {
        if (lotteryNumbers.includes(userNumberChoices[i])) {
          numMatches++;
          tutanNumaralar.push(userNumberChoices[i]);
          resultItem.classList.add("match");
        }
      }
      resultItem.textContent = "Tutan numaralar: " + tutanNumaralar.join(", ");
      resultsList.appendChild(resultItem);

      
      resultItem = document.createElement("li");
      resultItem.textContent = "Lottery numbers: " + lotteryNumbers.join(", ");
      resultsList.appendChild(resultItem);


      resultItem = document.createElement("li");
      resultItem.textContent = "Matches: " + numMatches;
      resultsList.appendChild(resultItem);

  if (numMatches == 6) {
    resultItem = document.createElement("li");
    resultItem.textContent = "Tebriklerr lotoyu kazandınızz!";
    resultsList.appendChild(resultItem);
  }


}