const Intern = require('../lib/Intern');

test('should create new intern object', () => {
    const intern = new Intern('John', 30, 'intern@example.com', 'UCLA');

    expect(intern.school).toEqual(expect.any(String))
})

test('prototype method', () => {
    const intern = new Intern('John', 30, 'intern@example.com', 'UCLA');

    expect(intern.getRole()).toEqual('Intern');
})

