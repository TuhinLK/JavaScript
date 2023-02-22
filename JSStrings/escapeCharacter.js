//Escape Character
//Because strings must be written within quotes, JavaScript will misunderstand this string:
// let text = "We are the so-called "Vikings" from the north.";
// The string will be chopped to "We are the so-called ".
// The solution to avoid this problem, is to use the backslash escape character.
// The backslash (\) escape character turns special characters into string characters:

// Code	Result	Description
// \'	'	Single quote
// \"	"	Double quote
// \\	\	Backslash
// The sequence \"  inserts a double quote in a string:
let text = "We are the so-called \"Vikings\" from the north.";
console.log(text);
// The sequence \'  inserts a single quote in a string:
let text1= 'It\'s alright.';
console.log(text1);
// The sequence \\  inserts a backslash in a string:
let text2 = "The character \\ is called backslash.";
console.log(text2);

