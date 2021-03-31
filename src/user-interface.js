
const vscode = require('vscode');
const data = require("./cpp.json");

function myTest() {
    let testVar = "my test";
    console.log(testVar);
    return testVar;
}
module.exports = myTest;

function printData() {
	console.log(data);
}

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	var buildData = [];
	var temp;
	for (let i = 0; i < 100; i++) {
		const start = Date.now();
		printData();
		const end = Date.now();
		temp = end-start;
		var t = temp.toString();
		buildData[i] = t;
	}

	//console.log(t);
	let myShid =
    "data:text/csv;charset=utf-8," + buildData.map((e) => e.join(",")).join("\n");

	console.log(buildData);

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "algo-mate" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('algo-mate.helloWorld', function () {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		vscode.window.showInformationMessage('Hello World from Algo-Mate!');
	});

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
