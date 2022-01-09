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

async function is_Seller(req: any, res: any, next:any)
{
    const autHeader = req.headers["authorization"];
    const token = autHeader && autHeader.split(' ')[1];
    try {
        const user =<any> await jwt.verify(token, process.env.JWT_TOKEN_SECRET || "");
        if(user.user_type === "2")
        {
            next();
        }
        else
        {
            res.json({staus: 401, error: "You dont have permisson !!"})
        }
    } catch (error) {
        
    }
}

async function is_Admin(req: any, res: any, next:any)
{
    const autHeader = req.headers["authorization"];
    const token = autHeader && autHeader.split(' ')[1];
    try {
        const user =<any> await jwt.verify(token, process.env.JWT_TOKEN_SECRET || "");
        if(user.user_type === "3")
        {
            next();
        }
        else
        {
            res.json({staus: 401, error: "You dont have permisson !!"})
        }
    } catch (error) {
        
    }
}
async function is_Seller_Admin(req: any, res: any, next:any)
{
    const autHeader = req.headers["authorization"];
    const token = autHeader && autHeader.split(' ')[1];
    try {
        const user =<any> await jwt.verify(token, process.env.JWT_TOKEN_SECRET || "");
        if(user.user_type === "3" || user.user_type === "2")
        {
            next();
        }
        else
        {
            res.json({staus: 401, error: "You dont have permisson !!"})
        }
    } catch (error) {
        
    }
}
export default {authentication, is_Seller, is_Admin, is_Seller_Admin}