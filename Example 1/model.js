class Model {
    constructor()
    {
        this.containerEl = document.querySelector('#main-container')
        
    }
    addNote(note){
        const newNote = document.createElement('p');
        newNote.innerText = note;
        newNote.id = 'note' ;
        this.containerEl.append(newNote);
    }
   
    reset() 
    {
        this.notes = []
    }

}
module.exports = Model;