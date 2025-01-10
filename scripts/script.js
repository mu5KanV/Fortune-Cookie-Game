import {fortunes} from "./fortunes.js";

const cookie = document.querySelector('.js-cookie');
const fortuneDisplay = document.querySelector('.js-fortune');
const resetBtn= document.querySelector('.js-reset-btn');


cookie.addEventListener('click', () => {
  // Generate a random fortune
  const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];

  const html=`<p>${randomFortune}</p>`;
  // Display the fortune
  fortuneDisplay.innerHTML=html;
  fortuneDisplay.style.display = 'block';  // Show the fortune
  document.querySelector('.cookie').style.display='none';
  document.querySelector('.cracked-cookie').style.display='block';
  resetBtn.style.display='block';
});

// Close the fortune display when clicked
document.querySelector('.cracked-cookie').addEventListener('click', () => {
  fortuneDisplay.style.display = 'none';
  document.querySelector('.cookie').style.display='block';
  document.querySelector('.cracked-cookie').style.display='none';
  resetBtn.style.display='none';
});

resetBtn.addEventListener('click', ()=>{
    // resets the fortune to original state
    fortuneDisplay.style.display = 'none';
    document.querySelector('.cookie').style.display='block';
    document.querySelector('.cracked-cookie').style.display='none';
    resetBtn.style.display='none';
})

