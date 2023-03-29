/**
 * @jest-environment jsdom
 */

const { equal } = require('assert');
const fs = require('fs');
 ViewNotes = require('./NotesView');

describe('Page View', () => {
    it('displays zero notes', () => {
      
  
      const viewNotes = new ViewNotes();
      expect(viewNotes.notes).toEqual([])
      
    });
    it('tests add note to return one note', () => {
      
  
        const viewNotes = new ViewNotes();
        viewNotes.addNoteTest("go swimming")
        expect(viewNotes.notes).toEqual(["go swimming"])
        
    });
    it('tests add note to return one note', () => {
      
  
        const viewNotes = new ViewNotes();
        viewNotes.addNoteTest("go swimming")
        viewNotes.addNoteTest("its sunny")
        expect(viewNotes.notes).toEqual(["go swimming","its sunny"])
        
    });
  });
