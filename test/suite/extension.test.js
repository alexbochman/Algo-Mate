const assert = require('assert');
const myTest = require('../../src/user-interface');
//import { myTest } from "../../src/user-interface";
//require('../../src/user-interface');


// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
const vscode = require('vscode');
// const myExtension = require('../extension');

suite('Extension Test Suite', () => {
    vscode.window.showInformationMessage('Start all tests.');

    test('should output "my test" for function myTest()', () => {
        const test = myTest;
        assert(test, ("FAIL"));
    });
});