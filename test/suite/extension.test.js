const assert = require('assert');
const myTest = require('../../src/tests');
//import { myTest } from "../../src/tests";
//require('../../src/tests');


// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
const vscode = require('vscode');
// const mytests = require('../tests');

suite('Extension Test Suite', () => {
    vscode.window.showInformationMessage('Start all tests.');

    test('should output "my test" for function myTest()', () => {
        const test = myTest;
        assert(test, ("my test"));
    });
});