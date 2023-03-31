class Model {
    constructor(notes = new Array)
    {
        
        this.notes = notes
        
    }
    addNote(note){
        this.notes.push(note)
    }
    getNotes()
    {
        return this.notes
    } 
    reset() 
    {
        this.notes = []
    }

}
module.exports = Model;