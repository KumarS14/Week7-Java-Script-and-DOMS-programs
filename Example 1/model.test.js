notes = require("./model")
describe('testing model class that has notes',() =>
{
  it('tests to see if model object can be made and just fine',() =>
  {
    newNotes = new notes()
    expect(newNotes.notes).toEqual([])
  });
  it('tests to see if add method allows for task to be put into array',() =>
  {
    newNotes = new notes()
    newNotes.addNote("Swimming")
    expect(newNotes.notes).toEqual(["Swimming"])
  });
  it('tests to see if getNotes method returns all notes',() =>
  {
    newNotes = new notes()
    newNotes.addNote("Swimming")
    expect(newNotes.getNotes()).toEqual(["Swimming"])
  });
  it('tests to see if reset method resets array so all notes are removed',() =>
  {
    newNotes = new notes()
    newNotes.addNote("Swimming")
    newNotes.reset()
    expect(newNotes.getNotes()).toEqual([])
  });
    

  
});