
const vscode = require('vscode');
const myTest = require('./src/user-interface');

test('should output "my test" for function myTest()', () => {
    const text = myTest();
    expect(text).toBe("my test");
});