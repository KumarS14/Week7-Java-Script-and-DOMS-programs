class View {
  constructor(notes) {
    this.mainContainerEl = document.querySelector('#main-container');
    this.notes = notes;
    console.log(this.mainContainerEl);
  }
  addParagraph()
  {
    const newP = document.createElement('p')
    newP.textContent = "This is what I made a minute ago"
    const body = document.querySelector('body');
    body.append(newP)
  }
  clearParagraph()
  {
    const elementToRemove = document.querySelector('#main-container');
    elementToRemove.remove();
  }
  getNotes()
  {
    return this.notes
  }
  
}

module.exports = View;