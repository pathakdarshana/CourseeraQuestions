var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function IsStackEmpty(arr) {
		return arr.length == 0;
}

function IsABracket(char) {
	return (char == ']' || char == '}' || char == ')'|| char == '[' || char == '{' || char =='(')? true:false;
}

function AddToStack(char, i) {
	let arr= [];
	return arr=[char, i];
}

function IsOpeningBracket(char) {
	return (char == '[' || char == '{' || char =='(') ? true:false;
}

function IsClosingBracket(char) {
	return (char == ']' || char == '}' || char ==')') ? true:false;
}

function CheckForComplimentaryBracket (char, arr) {
	let strNew;
	strNew = (arr[(arr.length-1)][0])+char;
	return (strNew == '[]' || strNew == '{}' || strNew == '()' ) ? true : false;
}

rl.question( '',function (str) {
	let arrayAsStack = [];
	let bracket;
	let i;
	let print = false;
	let char;
	for (i=0; i<str.length; i++) {
		char = str.charAt(i);
		if(IsABracket(char)) {
			if (IsOpeningBracket(char)) {
				bracket = AddToStack(char, i);
				arrayAsStack.push(bracket);
			}
			else if (IsStackEmpty(arrayAsStack)) {
				console.log(i+1);
				print = true;
				break;
			} else {
				if(CheckForComplimentaryBracket(char, arrayAsStack)) {
					arrayAsStack.pop();
				}
				else {
					console.log(i+1);
					print= true;
					break;
				}
			}
		}
	}

	if (arrayAsStack.length == 0 && print == false) {
		console.log('Success');
	}
	else {
		if(print == false){
			console.log((arrayAsStack[arrayAsStack.length-1][1])+1);
		}
	}
	rl.close();
	process.stdin.destroy();
});
