import express from 'express';
import Utils from './Utils.js';
import { v4 as uuidv4 } from 'uuid';
const app = express()
const port = 3000;

const users = [{ id: '101', email: 'eaxm@gmail.com', password: '12232533' }, { id: '102', email: 'second@gmail.com', password: '10001000' }, { id: '103', email: 'third@gmail.com', password: '80808080' }]
users.forEach((user) => {user.password = Utils.encodedPassword(user.password)})
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello World');
})

app.get('/users', (req, res) => {
    console.log('enter to users');
    res.status(200).json({ users })
})

app.get('/users/:id', (req, res) => {
    console.log('enter to users/:id');
    const currentId = req.params.id
    const user = users.find((user) => user.id === currentId);
    if (!user) {
        res.send('user does not exist')
    }
    else {
        res.status(200).json(user)
    }
})

app.post('/users', (req, res) => {
    console.log('enter to users for create user');
    const newUser = req.body;
    newUser.id = uuidv4();
    if (Utils.checkUserExist(res, users, newUser.id)) {
        res.send('user has already exist')
        return
    }
    if (!Utils.CheckValidUser(res, users, newUser)){
        return
    }
    newUser.password = Utils.encodedPassword(newUser.password)
    users.push(newUser)
    res.status(200).json(newUser)
})

app.put('/users/:id', (req, res) => {
    console.log('enter to users for update user');
    const currentId = req.params.id
    const newUser = req.body;
    newUser.id = currentId;
    if (Utils.checkUserExist(res, users, currentId)) {
        if (Utils.CheckValidUser(res, users, newUser)) {
            let userIndex = users.findIndex((user) => user.id === newUser.id)
            newUser.password = Utils.encodedPassword(newUser.password)
            users[userIndex] = newUser;
            res.status(200).json(users[userIndex])
        }
    }
    else {
        res.send('user has not exist')
    }
})

app.delete('/users/:id', (req, res) => {
    console.log('enter to users for delete user');
    const currentId = req.params.id
    if (Utils.checkUserExist(res, users, currentId)) {
        let userIndex = users.findIndex((user) => user.id === currentId)
        res.json(users[userIndex])
        users.splice(userIndex,1)
    }
    else {
        res.send('user has not exist')
    }
})

app.post('/users/check-in', (req, res) => {
    console.log('enter to /users/check-in for check user');
    const {email, password} = req.body;
    for(let user of users){
        if (user.email === email && Utils.compareEncodedPassword(password, user.password)){
            res.send('User is connected')
            return }
    }
    res.send('wrong credentials')
})

app.listen(port, () => {
    console.log(`Server is up and running on port:${port}`);

})