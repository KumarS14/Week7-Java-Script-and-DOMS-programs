class Model {
    constructor()
    {
        this.containerEl = document.querySelector('#main-container')
        this.buttonEl = document.querySelector('#add-note-button')
        this.buttonEl.addEventListener('click',() => {
            this.addNote()
        });
    }
    addNote(){
        const newNote = document.createElement('p');
        newNote.textContent = 'note';
        newNote.id = 'note' ;
        this.containerEl.append(newNote);
    }
   
    reset() 
    {
        this.notes = []
    }

}
module.exports = Model;