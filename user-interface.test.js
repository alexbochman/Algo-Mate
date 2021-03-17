
const myTest = require('./src/user-interface');

test('should output "my test" for function myTest()', () => {
    expect(myTest()).toBe("my test");
});