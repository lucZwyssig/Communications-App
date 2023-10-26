const UserSchema = require("../Models/UserSchema");
const argon2 = require("argon2");

const jwt = require("jsonwebtoken");

const createToken = (username) => {
    const payload = { username };
    return jwt.sign(payload, process.env.JWTTOKEN, { expiresIn: "3600s" });
};

const register = async (req, res) => {
    try {
        const { email, password } = req.body;
        const hashedPassword = await argon2.hash(password);
        const user = await UserSchema.create({ email, password: hashedPassword });
        const token = createToken(user._id);
        res.cookie("jwtToken", token, {
            withCredentials: true,
            sameSite: 'strict',
          });
        res.send("user created").status(201);
    
    }
    catch (error) {
        if (error.code === 11000) {
            res.status(409).json({ message: 'Email already exists' });
        } else {
            console.error(error);
            res.status(500).json({ message: 'Internal server error' });
        }
    }
};


const login = async (req, res) => {
    try {
        const { email, password } = req.body;


        const user = await UserSchema.findOne({ email });

        if (!user) {
            return res.sendStatus(404);
        }

        const isPasswordValid = await argon2.verify(user.password, password);

        if (isPasswordValid) {
            const token = createToken(user._id);
            res.cookie("jwtToken", token), {
                withCredentials: true,
            }
            res.send("logged in").status(200);

        } else {
            res.sendStatus(401);
        }
    } catch (error) {
        console.log("There is an error:", error);
        res.status(500).send("Internal server error");
    }
};

const verify = (req, res, next) => {
    const token = req.header("Authorization");

    if (!token) {
        return res.status(401).send("Not Authorized");
    }

    try {
        const decodedToken = jwt.verify(token, process.env.JWTTOKEN);
        req.userId = decodedToken;
        next();
    } catch (error) {
        return res.status(401).send("Invalid token");
    }
};

const logout = (req, res) => {
    res.clearCookie("jwtToken");
    res.json({ message: "logged out" }).status(200);
}





module.exports = {
    register,
    login,
    verify,
    logout

}