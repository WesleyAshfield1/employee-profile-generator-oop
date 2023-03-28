const Employee = require('../lib/Employee');

test('does this create an new object with name, id, email', ()=> {
const emp = new Employee('a', 'b', 'c')
expect(emp.name).toBe('a');
expect(emp.id).toBe('b')
expect(emp.email).toBe('c')
expect(emp.getName()).toBe('a');
})