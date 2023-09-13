const TestSchema = require("../Models/TestSchema");

const test = async (req, res) => {
    try{
        const test = await TestSchema.find();

        if(test.length === 0){
            res.json({message: "no tests found"}).status(404);
        }

        else{
            res.json({testjohn: test});
        }
    }

    catch(error){
        res.json({message: "Internal server error"}).status(500);
        console.log(error);
    }
}

module.exports = {
    test
}