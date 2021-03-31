
const vscode = require('vscode');
const data = require("./cpp.json");
const fs = require('fs');

// Travis CI test function
function myTest() {
    let testVar = "my test";
    console.log(testVar);
    return testVar;
}
module.exports = myTest;

function getBuildData() {
	var buildData = [];
	var temp;

	// Populating buildData with the time (ms) it takes to print JSON data to console
	for (let i = 0; i < 100; i++) {
		const start = Date.now();
		console.log(data);
		const end = Date.now();

		temp = end - start;
		var t = temp.toString();
		buildData[i] = t;
	}

	buildData.unshift("");
	let csvContent = ",Build Time";
	csvContent += buildData.map((e) => (e += "\n"));
	let file = vscode.workspace.workspaceFolders[0].uri.path + "/data.csv";

	if (file[1] != "U")
		file = file.substring(1);

	fs.writeFile(file, csvContent, function (err) {
		if (err) throw err;
	});
}

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	getBuildData();

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
