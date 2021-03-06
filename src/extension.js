
const vscode = require('vscode');

const tests = require('./tests');
const userInterface = require('./user_interface');
const commands = require("./commands");

// Constructor from user_interface.js
const UI = new userInterface.UserInterface();

function activate(context) {

	let collapsible = vscode.commands.registerCommand(commands.COLLAPSIBLE_CMD, () => {
		UI.collapsible();
	});

	let openMenu = vscode.commands.registerCommand(commands.OPEN_MENU, () => {
		UI.openMenu();
	});

	let getBuildDataButton = vscode.commands.registerCommand(commands.GET_BUILD_DATA_BUTTON, () => {
		UI.getBuildDataButton();
	});

	context.subscriptions.push([openMenu, collapsible, getBuildDataButton]);
}

function deactivate() {}
exports.activate = activate;
exports.deactivate = deactivate;
