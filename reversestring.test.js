const reverseString = require('./reversestring');

test('reverseString function exitst', () => {
    expect(reverseString).toBeDefined();
});

test('String reverses', () => {
    expect(reverseString('hello')).toEqual('olleh');
});

test('String reverses with UpperCase', () => {
    expect(reverseString('Hello')).toEqual('olleh');
});