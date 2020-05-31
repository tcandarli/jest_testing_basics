const  functions = require('./functions');

// toBe
test('Adds 2 + 2 to equal 4', () => {
    expect(functions.add(2, 2)).toBe(4);
});

// not.toBe
test('Adds 2 + 2 to not equal 7', () => {
    expect(functions.add(2, 2)).not.toBe(7);
});

// toBeNull
test('should be null', () => {
    expect(functions.isNull()).toBeNull();
});

// toBeFalsy
test('should be falsy', () => {
    expect(functions.checkValue(0)).toBeFalsy();
});

// toEqual
test('User should be John Angular object', () => {
    expect(functions.createUser()).toEqual({firstName: 'John', lastName: 'Angular'});
});

// Less than and greater than
test('should be under 80', () => {
    const speed = 80;
    expect(speed).toBeLessThan(100);
})

// Regex - toMatch
test('There is no b in hicoders', () => {
    expect('team').not.toMatch(/b/);
})

// Arrays - toContain
test('Admin should be in usernames', () => {
    usernames = ['user1', 'admin', 'mike'];
    expect(usernames).toContain('admin');
})