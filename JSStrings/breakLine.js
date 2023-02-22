// Breaking Long Code Lines
// For best readability, programmers often like to avoid code lines longer than 80 characters.
// If a JavaScript statement does not fit on one line, the best place to break it is after an operator:
let longText =
    "For best readability, programmers often like to avoid code lines longer than 80 characters";
console.log(longText);

// You can also break up a code line within a text string with a single backslash:
let longText1 = "For best readability, programmers often like to \
avoid code lines longer than 80 characters";
console.log(longText1);
// The \ method is not the preferred method. It might not have universal support.
// Some browsers do not allow spaces behind the \ character.
let longText2 = "For best readability, programmers often like to" +
    " avoid code lines longer than 80 characters";
console.log(longText2);