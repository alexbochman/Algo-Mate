
const vscode = require("vscode");
const fs = require("fs");
const data = require("./snippets/cpp.json");

// ======================================================================
// TEST AND BUILD
// ======================================================================

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
module.exports = getBuildData;