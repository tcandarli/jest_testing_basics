const  functions = require('./functions');

const initDatabase = () => console.log('Database Initialized...');
const closeDatabase = () => console.log('Database Closed...');

// beforeEach, afterEach
// beforeEach(() => initDatabase());
// afterEach(() => closeDatabase());

beforeAll(() => initDatabase());
afterAll(() => closeDatabase());

const nameCheck = () => console.log('Checking name...');

describe('Checking names', () => {
    beforeEach(() => nameCheck());

    test('User is Mike', () => {
        const user = 'Mike';
        expect(user).toBe('Mike');

    });

    test('User is John', () => {
        const user = 'John';
        expect(user).toBe('John');

    });
});

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

// Working with async data

// // Promise 
// test('User fetched name should be Leanne Graham', () => {
//     expect.assertions(1);
//     return functions.fetchUser().then(data => {
//             expect(data.name).toEqual('Leanne Graham');
//         })
// })

// Async Await 
test('User fetched name should be Leanne Graham with async await', async () => {
    expect.assertions(1);
    const data = await functions.fetchUser().then(data => {
            expect(data.name).toEqual('Leanne Graham');
        })
})