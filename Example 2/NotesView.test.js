/**
 * @jest-environment jsdom
 */

const { equal } = require('assert');
const fs = require('fs');
const ViewNotes = require('./notes');

describe('Page View', () => {
  it('displays 2 notes', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const viewNotes = new ViewNotes();

    expect(document.querySelectorAll('p').length).toBe(2);
  });
});