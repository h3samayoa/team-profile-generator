const Employee = require("../lib/Employee");

test('should create employee object', () => {
    const employee = new Employee('Joe', 10, 'employee@example.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test('test prototypes', () => {
    const employee = new Employee('Joe', 10, 'employee@example.com');

    expect(employee.getName()).toEqual(expect.any(String))
    expect(employee.getId()).toEqual(expect.any(Number))
    expect(employee.getEmail()).toEqual(expect.any(String))
})