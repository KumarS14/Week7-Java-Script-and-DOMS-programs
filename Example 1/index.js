model = require("./model")
new_model = new model()
new_model.addNote("Swimming")
new_model.addNote("Shopping")
new_model.addNote("Surfing")
console.log(new_model.getNotes())
console.log("the notes app is running");