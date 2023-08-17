import jsonfile from 'jsonfile';
const FILE = './data/users.json'

const getUsers = async (req, res) => {
    try{
        const data = await jsonfile.readFile(FILE);
        return data
    }
    catch (err){
        console.log(err);
    }
}

const getUser = async (_id) => {
    try{
        const users = await jsonfile.readFile(FILE);
        const user = users.find((user) => user.id === _id);
        return user
    }
    catch (err){
        console.log(err);
    }
}

const addUser = async (newUser) => {
    try{
        const users = await jsonfile.readFile(FILE);
        users.push(newUser)
        await jsonfile.writeFile(FILE, users)
        return newUser
    }
    catch (err){
        console.log(err);
    }
}

const updateUser = async (userForUpdate) => {
    try{
        const users = await jsonfile.readFile(FILE);
        let userIndex = users.findIndex((user) => user.id === userForUpdate.id)
        if (userIndex === -1) {
            return false
        }
        users[userIndex] = userForUpdate;
        await jsonfile.writeFile(FILE, users)
        return userForUpdate
    }
    catch (err){
        console.log(err);
    }
}

const funcs = {getUsers, getUser, addUser, updateUser}
export default funcs