// --- bouton vers lien ----
clicBTN0 = () => window.location.href="https://www.symalean.com/";
clicBTN1 = () => window.location.href="https://www.symalean.com/";
clicBTN2 = () => window.location.href="https://www.symalean.com/";
clicBTN3 = () => window.location.href="https://www.symalean.com/";
clicBTN4 = () => window.location.href="https://www.symalean.com/";

// -- fermeture lorsque le mail est envoyé
const dial = document.querySelector('#dial');
const confirm = document.querySelector('#confirm');
const textOut = document.querySelector('.textOut');

let outputCreate = document.createElement("output");
const outputClass = outputCreate.classList.add("txtOutPut");
const outputTxt = document.createTextNode("Thanks! Email received.");
let outBox = document.querySelector('.txtOutPut');

confirm.addEventListener('click', () => {
    textOut.appendChild(outputCreate).appendChild(outputTxt);
        dial.close();
        console.log("non");
});

// -- hamburger nav bar --
const navBtton = document.getElementById("navButton");
const miniNav = document.querySelector(".miniNavHide");

navButton.addEventListener('click', () => {
  miniNav.classList.toggle('miniNavShow');
  miniNav.classList.toggle('miniNavHide')
});
