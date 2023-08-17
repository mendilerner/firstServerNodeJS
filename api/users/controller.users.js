import usersService from './service.users.js'
import { v4 as uuidv4 } from 'uuid';
//import Utils from './../Utils.js'


const getUsers = async (req, res) => {
    console.log('enter to users');
    const users = await usersService.getUsers();
    res.json(users);
};

const getUser = async (req, res) => {
    const currentId = req.params.id
    console.log('enter to user/', currentId);
    const user = await usersService.getUser(currentId);
    if (!user) {
        res.send('user does not exist')
    }
    else {
        res.status(200).json(user)
    }
};

const addUser = async (req, res) => {
    try{
        const newUser = req.body
        newUser.id = uuidv4()
        const createdUser = await usersService.addUser(newUser)
        res.status(200).json(createdUser)
    }
    catch(err){
        console.log("ERROR ", err);
        res.status(500).json({ error: "server error"})
    }
}

const updateUser = async (req, res) => {
    console.log('enter to users for update user');
    const userId = req.params.id;
    const userForUpdate = req.body;
    userForUpdate.id = userId
    const updatedUser = await usersService.updateUser(userForUpdate);
    if (updatedUser === false){
        res.send('user has not exist')
        return
    }
    res.status(200).json(updatedUser)
}

const deleteUser = async (req, res) => {
    console.log('enter to delete user');
    try{
        const userId = req.params.id
        const deletedUser = await usersService.deleteUser(userId)
        if (deletedUser){
            res.status(200).json({deletedUser})
        }
        else if (deletedUser === false){
            res.send('user does not exist')
        }
    }
    catch(err){
        console.log("ERROR ", err);
        res.status(500).json({ error: "server error"})
    }
}



const funcs = { getUsers, getUser, addUser, updateUser, deleteUser }
export default funcs