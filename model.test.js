notes = require("./model")
describe('testing model class that has notes',() =>
{
  it('tests to see if model object can be made and just fine',() =>
  {
    newNotes = new notes()
    expect(newNotes.notes).toEqual([])
  });
    

  
});
