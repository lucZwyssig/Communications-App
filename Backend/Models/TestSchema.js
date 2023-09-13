const mongoose = require("mongoose");

const Testschema = new mongoose.Schema({
    test: {type: String, required: true}
    
});


module.exports = mongoose.model("Test", Testschema, "Test");