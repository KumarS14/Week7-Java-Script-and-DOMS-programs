/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const View = require('./model');

describe('A test for my web page', () => {

  // We can use the beforeEach() hook 
  // to set the jest `document` HTML before each test
  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync('./index.html');
  });

  it('displays a note', () => {
    // 1. Arrange - instantiate our View class
    const note = new View();
    document.body.innerHTML = fs.readFileSync('./index.html')
    note.addNote("Sonjay")
    expect(document.querySelector('#note').innerText).toBe('my note');
  });
});
