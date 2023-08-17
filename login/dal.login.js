import jsonfile from 'jsonfile'; 
const FILE = './data/users.json';

const login = async () => {
    try{
        const users = await jsonfile.readFile(FILE);
        return users
    }
    catch (err){
        console.log(err);
        return
    }
}

const funcs = {login}
export default funcs