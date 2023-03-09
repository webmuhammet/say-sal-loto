let userNumberChoices = [];


function addNumber() {
  // Kullanıcının seçtiği sayıları al
  let numberInput = document.getElementById("numberInput");
  let number = parseInt(numberInput.value);

  // Girilen sayının 1 ve 49 arasında olup olmadığını denetle
  if (isNaN(number) || number < 1 || number > 49) {
    alert("Please enter a number between 1 and 49.");
    return;
  }

  // Aynı numaranın daha önce alınıp alınmadığını denetle
  if (userNumberChoices.includes(number)) {
    alert("You have already entered this number. Please choose a different number.");
    return;
  }

  // 6 numaradan fazla girilip girilmediğini denetle
  if (userNumberChoices.length >= 6) {
    alert("You have already entered 6 numbers.");
    return;
  }

  //Kullanıcının seçtiği numaraları bir diziye aktarıp listede görüntüle
  userNumberChoices.push(number);
  let numberList = document.getElementById("numberList");
  let numberItem = document.createElement("li");
  numberItem.textContent = number;
  numberList.appendChild(numberItem);

  // Her seferinde yeni numara girişi için kutuyu temizle
  numberInput.value = "";


  
}

function playLottery() {
  // 6 numaranın tamamlanıp tamamlanmadığını denetleyip öyle oyuna başla
  if (userNumberChoices.length != 6) {
    alert("Please enter 6 numbers first.");
    return;
  }

  // Eski sonuçları temizle
  let resultsList = document.getElementById("resultsList");
  resultsList.innerHTML = "";

  // 1 ve 49 arasında birbiriyle aynı olmayan 6 sayı belirle
  let lotteryNumbers = [];
  while (lotteryNumbers.length < 6) {
    let randomNumber = Math.floor(Math.random() * 49) + 1;
    if (!lotteryNumbers.includes(randomNumber)) {
      lotteryNumbers.push(randomNumber);
    }
  }

    // Rastgele oluşan numaraları sırala
    lotteryNumbers.sort(function(a, b) {
        return a - b;
      });


      let resultItem = document.createElement("li");
      
      
      let tutanNumaralar=[];
      // Kullanıcının sayılarıyla şanslı numaraları kıyasla eşleşenleri sayıp diziye ekle göster
      let numMatches = 0;
      for (let i = 0; i < userNumberChoices.length; i++) {
        if (lotteryNumbers.includes(userNumberChoices[i])) {
          numMatches++;
          tutanNumaralar.push(userNumberChoices[i]);
          resultItem.classList.add("match");
        }
      }

      // Sonuçları listele
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
    resultItem.textContent = "Congratulations, you won the lottery!";
    resultsList.appendChild(resultItem);
  }


}