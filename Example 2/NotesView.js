const View = require("./view")

class ViewNotes  {
    constructor(notes = [])
    {
        this.notes = notes
    }
    addNoteTest(note)
    {
        this.notes.push(note)
    }
   
}
module.exports = ViewNotes