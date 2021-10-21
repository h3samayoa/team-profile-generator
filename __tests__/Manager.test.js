const Manager = require('../lib/Manager')

test('should create new manager object', () => {
    const manager = new Manager('Bob', 10, 'manager@example.com', 123456789);

    expect(manager.officeNumber).toEqual(expect.any(Number));

});

test('protoype methods', () => {
    const manager = new Manager('Bob', 10, 'manager@example.com', 123456789);

    expect(manager.getRole()).toEqual('Manager');
})