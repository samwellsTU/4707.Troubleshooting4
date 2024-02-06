const {octaveUp, makeMajChord, sayHello} = require("./script.js");

describe('CTroubleShooting 4 Test', () => {
  test('octaveUp returns correct MIDI pitch', ()=> {
    expect(octaveUp(60)).toBe(72)

  })
  test('makeMajChord returns correct MIDI pitchs', ()=> {
    expect(makeMajChord(60)).toEqual([60,64,67])

  })
  beforeEach(() => {
    // Spy on console.log before each test
    jest.spyOn(console, 'log');
  });

  afterEach(() => {
    // Restore console.log after each test
    console.log.mockRestore();
  });

  test('sayHello prints to the console', () => {
    // Function that logs something
    sayHello();
    expect(console.log).toHaveBeenCalledWith('Hello!');
  });



});

