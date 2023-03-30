const View = require("./view");
const ViewNotes = require('./NotesView');

const notes = new ViewNotes();
notes.addNoteTest("swimming");
notes.addNoteTest("jogging");
const view = new View(notes.notes);
view.getNotes();
