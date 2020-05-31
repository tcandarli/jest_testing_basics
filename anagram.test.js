const isAnagram = require('./anagram');

test('isAnagram function exists', () => {
    expect(isAnagram).toBeDefined;
    expect(typeof isAnagram).toEqual('function');
})

test('"merhaba" is an anagram of "bahamer##"', () => {
    expect(isAnagram('merhaba', 'bahamer')).toBeTruthy();
})

test('"hoscakalin" is NOT an anagram of "hosgeldiniz"', () => {
    expect(isAnagram('hoscakalin', 'hosgeldiniz')).toBeFalsy();
})