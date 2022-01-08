const jwt = require('jsonwebtoken')



async function authentication(req: any, res: any, next: any)
{
  
    const autHeader = req.headers["authorization"];
    const token = autHeader && autHeader.split(' ')[1];
  
    if(!token)
    {
        res.sendStatus(401);
    }
    else
    {
        try 
        {
            const user =<any> await jwt.verify(token, process.env.JWT_TOKEN_SECRET || "");
            if(user.refreshToken)
            {
                res.json({staus: 400, error: "please enter token !!"})
            }
            else
            {
                next();     
            }
           
        } catch (error) 
        {
            res.json({status: 400, error: "token is expired"})  
        }
     
    }
}

export default {authentication}