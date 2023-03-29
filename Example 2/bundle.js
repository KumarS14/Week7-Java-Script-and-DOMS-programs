(() => {
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // view.js
  var require_view = __commonJS({
    "view.js"(exports, module) {
      var View2 = class {
        constructor(notes) {
          this.mainContainerEl = document.querySelector("#main-container");
          this.notes = notes;
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
        getNotes() {
          return this.notes;
        }
      };
      module.exports = View2;
    }
  });

  // index.js
  var View = require_view();
  var view = new View();
  view.addParagraph();
})();
