import express from 'express';
import Utils from './Utils.js';
import users from './api/users/route.users.js'
import login from './login/router.login.js'
const app = express()
const port = 3000;
//const users = []
//users.forEach((user) => {user.password = Utils.encodedPassword(user.password)})
app.use(express.json())

app.use('/log-in', login)
app.get('/', (req, res) => {
    res.send('Hello World');
})
app.use('/api/users', users);

app.listen(port, () => {
    console.log(`Server is up and running on port:${port}`);

})