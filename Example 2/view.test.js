/**
 * @jest-environment jsdom
 */

const { equal } = require('assert');
const fs = require('fs');
const View = require('./view');

describe('Page view', () => {
  it('displays 2 paragraphs', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const view = new View();

    expect(document.querySelectorAll('p').length).toBe(2);
  });
  it('should add a paragraph that can be displayed', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const view = new View();
    view.addParagraph("Hola guys")

    expect(document.querySelectorAll('p').length).toBe(3);
  });
  it('clearParagraphs method should delete all paragraphs so length should be 0', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const view = new View();
    view.clearParagraph()

    expect(document.querySelectorAll('p').length).toBe(0);
  });
 

});