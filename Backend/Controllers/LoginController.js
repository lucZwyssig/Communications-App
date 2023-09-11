const UserSchema = require("../Models/UserSchema");

const jwt = require("jsonwebtoken");

const createToken = (username) => {
    const payload = { username };
    return jwt.sign(payload, process.env.JWTTOKEN, {expiresIn: "3600s"});
};

const login = async (req, res, next) => {
    try{
        const{email, password} = req.body;
        const user = await UserSchema.create({email, password});
        const token = createToken(user._id);
        res.cookie("jwtToken", token), {
            withCredentials: true
        };
        res.send("user created").status(201);
    }
    catch(error){
        console.log(error);
        res.send("error");
    }

}

/*const register = (req, res, next) => {
    try{
    
    }

}*/

module.exports = {
    login
    //register
}