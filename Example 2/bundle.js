(() => {
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // view.js
  var require_view = __commonJS({
    "view.js"(exports, module) {
      var View2 = class {
        constructor(notes2) {
          this.mainContainerEl = document.querySelector("#main-container");
          this.notes = notes2;
          console.log(this.mainContainerEl);
        }
        addParagraph() {
          const newP = document.createElement("p");
          newP.textContent = "This is what I made a minute ago";
          const body = document.querySelector("body");
          body.append(newP);
        }
        clearParagraph() {
          const elementToRemove = document.querySelector("#main-container");
          elementToRemove.remove();
        }
        getNotesTest() {
          return this.notes;
        }
        getNotes() {
          this.notes.forEach((element) => {
            const newElement = document.createElement("div");
            newElement.textContent = element;
            newElement.className = "note";
            this.mainContainerEl.append(newElement);
          });
        }
      };
      module.exports = View2;
    }
  });

  // NotesView.js
  var require_NotesView = __commonJS({
    "NotesView.js"(exports, module) {
      var View2 = require_view();
      var ViewNotes2 = class {
        constructor(notes2 = []) {
          this.notes = notes2;
        }
        addNoteTest(note) {
          this.notes.push(note);
        }
      };
      module.exports = ViewNotes2;
    }
  });

  // index.js
  var View = require_view();
  var ViewNotes = require_NotesView();
  var notes = new ViewNotes();
  notes.addNoteTest("swimming");
  notes.addNoteTest("jogging");
  var view = new View(notes.notes);
  view.getNotes();
})();
