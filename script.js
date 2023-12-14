// Get the DOM elements


const billInput = document.getElementById("billTotalInput"),
  tipInput = document.getElementById("tipInput"),
  noOfPeople = document.getElementById("numberOfPeople"),
  perPersonBill =document.getElementById("perPersonTotal"),
  btn = document.querySelector("body");


// Get number of people from number of people div
let totalPeople = Number(noOfPeople.innerHTML);

// ** Calculate the total bill per person **
const calculateBill = () => {
  
  // get bill from user input & convert it into a number
  const bill = Number(billInput.value);
  
  // get the tip from user & convert it into a percentage (divide by 100)
  const tip = Number(tipInput.value) / 100;
  
  // get the total tip amount
  const tipAmount = tip * bill; 

  // calculate the total (tip amount + bill)
  const total = bill + tipAmount;

  // calculate the per person total (total divided by number of people)
  const totalPerPerson = total / totalPeople;
  
  // update the perPersonTotal on DOM & show it to user
  perPersonBill.innerHTML = `$${totalPerPerson.toFixed(2)}`;

  // Check if the input is not a number
  if (isNaN(bill) || isNaN(tip)) {
    // Display an error message to the user
    alert("Please enter valid numerical values for the bill total and tip percentage. Or else.......");
    return; /* Exit the function to prevent further     
    calculations*/
  }

}

// ** Splits the bill between more people **
const increasePeople = () => {
  // increment the amount of people 
  totalPeople++;
  // update the DOM with the new number of people
  noOfPeople.innerHTML = totalPeople;
  // calculate the bill based on the new number of people
  calculateBill();

  // generate a random bg-color for the body
  changeColor();
}

// ** Splits the bill between fewer people **
const decreasePeople = () => {
  
  /* if amount is 1 or less simply return(stop the function from execiting any further)
  (a.k.a you can't decrease the number of people to 0 or negative!)*/
  if (totalPeople <= 1) {
    return alert("Hey, stop trying to do that!!!!!");
  }

  // decrement the amount of people
  totalPeople--;

  // update the DOM with the new number of people
  noOfPeople.innerHTML = totalPeople;

  // calculate the bill based on the new number of people
  calculateBill();

  // generate a random bg-color for the body
  changeColor();
}

// Generate a random background-color for the body
const changeColor = () => {
    btn.style.background = "rgb(" + Math.round(Math.random() * 255)+ "," + Math.round(Math.random() * 255) + "," + Math.round(Math.random() * 255) + ")";
}
