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
   
    document.body.innerHTML = fs.readFileSync('./index.html')
    const note = new View();
    const button = document.querySelector('#add-note-button')
    button.click
    note.addNote()
    expect(document.querySelector('#note').textContent).toBe("note");
  });
});
