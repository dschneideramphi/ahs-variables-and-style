/*
Goal: Use buttons to adjust the background color & font-size of a target div.

Coding Needs:

let ___ = document.querySelector()
___.addEventListener("click", (e) => {

});
___.style.____ = ____;

*/

//Step 1: Get each div element using querySelector
let redPlusElt = document.querySelector("#redPlus");



let targetElt = document.querySelector("#targetDiv");

//Step 2: Create variables to keep track of the red, green, blue, and font-size.
let redVal = 0;



//Step 3: Add event listeners to the background RGB and font buttons
//Step 4: Use + and - operations to change the values of the color and size variables
//Step 5: Use .style to update the style of the target div on the screen

redPlusElt.addEventListener("click", (e) => {
  redVal = redVal + 5;
  targetElt.style.background = `rgb(${redVal}, ${greenVal}, ${blueVal})`;
});

//Step 6: Celebrate

//Extra Challenges:
//- Make it so if you click on the target div, a box pops up with a prompt and, whatever you type in the prompt appears in the target div.
//- Make it so the text color is the _inverse_ of whatever the background color is (hint: remember that the maximum value for a color is 255)
//- Add two more properties you can adjust. For example: width, height, margin, border-radius, etc.
