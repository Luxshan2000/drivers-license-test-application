const jwt = require("jsonwebtoken");
const verifyUser = (req, res, next) => {
    let token = ""


    console.log(req.header("token"))


    
    
    if(req.header('token')){
        token = req.header("token")

        

        
    }
    else if (req.headers['x-access-token']){
        token = req.headers['x-access-token'];
        console.log(token)

    }
    
    if (!token) {
        res.json({ msg: "provide token!" })
    }
    else {
        jwt.verify(token, process.env.SECURITY_KEY, (err, decoded) => {
            if (err) {
                try {
                    
                    res.clearCookie('token')
                    res.json({ msg: "Done" })
                }
                catch (err) {
                    console.log(err)
                    res.status(404).json({ error: err })
                }
            }
            else {
                
                req.email = decoded.email
                next()
            }
        })
    }
}

module.exports = { verifyUser }