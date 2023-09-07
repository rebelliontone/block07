/* Create a string for the user saying: "You have received this message because 
you have been chosen to opan an important vault. Here is the secret combination:" */

/* Assign three variables. Each variable contains the corresponding result of 
calculation using a unique arithmetic operator(+ - * /). Each must equal one 
of the three codes in the combination. */

let digitOne = 45 - 35;
let digitTwo = 32 + 8;
let digitThree = 78 / 2;
const combination = `You have received this message because you have been chosen to opan an important vault. Here is the secret combination: ${digitOne}-${digitTwo}-${digitThree}.`;

/* Create a dialog box displaying the vault codes and the text if using HTML and a script tag, or create a popup dialog.  */
console.log(combination);
alert(combination);