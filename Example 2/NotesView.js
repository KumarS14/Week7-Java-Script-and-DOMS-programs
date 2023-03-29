const View = require("./view")

class ViewNotes  {
    constructor(notes = [])
    {
        this.notes = notes
    }
    addNote(note)
    {
        this.notes.push(note)
    }
}
module.exports = ViewNotes