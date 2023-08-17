import loginService from './service.login.js'

const login = async (req, res) => {
    console.log('enter to log-in for check user');
    try{
    const user = req.body
    const loginResult = await loginService.login(user)
    if (loginResult === false){
        return res.send('wrong credentials')
    }
    else{
        return res.send('User is connected')
    }
    }
    catch (err){
        console.log(err);
        res.json({error: "server error"})
    }
}

const funcs = {login}
export default funcs
     
    
        