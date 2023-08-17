import express from 'express';
import Utils from './Utils.js';
import users from './routes/usersRoute.js'
const app = express()
const port = 3000;
//const users = []
//users.forEach((user) => {user.password = Utils.encodedPassword(user.password)})
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello World');
})
app.use('/users', users);

app.listen(port, () => {
    console.log(`Server is up and running on port:${port}`);

})