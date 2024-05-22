const jwt = require("jsonwebtoken");

const verifyAuth = (req, res, next) => {
    try{
        const token = req.headers.authorization;
        if(!token){
            return res.status(400).send("Access Denied");
    
        }
        // move secret to env
        const decode = jwt.verify(token,"secret");
        req.userId = decode.userId;
        next();
    }
    catch(err) {
        res.status(400).send("Invalid Token");
    }
};

module.exports = {verifyAuth};