import userDal from './../dal/usersDal.js'
import Utils from './../Utils.js'

const getUsers = async (req, res) => {
    const users = await userDal.getUsers();
    return users;
    };

const getUser = async (_id) => {
    const user = await userDal.getUser(_id);
    return user;
    };

const addUser = async (newUser) =>{
    newUser.password = await Utils.encodedPassword(newUser.password)
    const createdUser = userDal.addUser(newUser);
    return createdUser
}

const updateUser = async (userForUpdate) =>{
    userForUpdate.password = await Utils.encodedPassword(userForUpdate.password)
    const updatedUser = await userDal.updateUser(userForUpdate);
    return updatedUser
}
const funcs = {getUsers, getUser, addUser, updateUser}
export default funcs