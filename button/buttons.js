// Everything is written as html. No over-engineering in MY already over-engineered website.

// Buttons to other people's sites!!!!!
var buttons = [
    // Note: Change this to your site's url if you're testing on your computer
    //'<webring-css site="' + window.location.protocol + "//" + window.location.hostname + '"></webring-css>',
    '<a href="https://wiregrrrl.neocities.org/" target="_blank"><img src="https://wiregrrrl.neocities.org/design/wiregrrrlbutton.gif"></a>',
    '<a href="https://other-space.neocities.org/" target="_blank"><img src="https://other-space.neocities.org/resources/OSbuttonX.gif"></a>',
    '<a href="https://sadgrl.online/" target="_blank"><img src="https://sadgrl.online/assets/images/buttons/sadgrlonline.gif"></a>',
    '<a href="https://excessiveclownery.neocities.org/"><img src="https://excessiveclownery.neocities.org/Buttons/DaCircus.png"></a>',
    '<a href="https://doctorispie.neocities.org/"><img src="https://doctorispie.neocities.org/images/DoclingButton.png"></a>',
    '<img src="https://deep-freezer.neocities.org/images/deepfreeze.gif">',
    '<textarea id="copyButton"><a href="https://deep-freezer.neocities.org/" target="_blank"><img src="https://deep-freezer.neocities.org/images/deepfreeze.gif"></a></textarea>',
];

// If you want to steal this [Why would you] change this to be the id of where you want to shove the boxes
var sidebar = document.getElementById("box");
// div containing the buttons
var divButtons = document.createElement("div");

divButtons.className = "buttonsContainer";

// The div that *actually* contains buttons.
var divButtonsReal = document.createElement("div");

divButtonsReal.className = "buttons";
// Just appends the html into the div
for(var button in buttons) {
    divButtonsReal.innerHTML += buttons[button];
}
divButtons.appendChild(divButtonsReal);
divAll.appendChild(divButtons);
//sidebar.appendChild(divButtons);