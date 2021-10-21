const Engineer = require('../lib/Engineer')

test('create new engineer object', () => {
    const engineer = new Engineer('Jc', 004, 'engineer@example.com', 'engineer1234');

    expect(engineer.github).toEqual(expect.any(String))
})

test('prototype method', () => {
    const engineer = new Engineer('Jc', 004, 'engineer@example.com', 'engineer1234');

    expect(engineer.getRole()).toEqual('Engineer');
})