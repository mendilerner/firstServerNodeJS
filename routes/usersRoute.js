import express from 'express';
import usersController from './../controllers/usersController.js'
import emailValidator from './../middleware/emailValidator.js';
import passwordValidator from './../middleware/passwordValidator.js';
const router = express.Router();


// router.get('/', (req, res) => {
// res.send('About me page');
// });
// router.get('/how-to-use', (req, res) => {
// res.send('How to use');
// });
router.get('/', usersController.getUsers);
// router.get('/', usersController.getUsers()(req, res) => {
//     console.log('enter to users');
//     res.status(200).json({ users })
// })

router.get('/:id', usersController.getUser)
// router.get('/:id', (req, res) => {
//     console.log('enter to users/:id');
//     const currentId = req.params.id
//     const user = users.find((user) => user.id === currentId);
//     if (!user) {
//         res.send('user does not exist')
//     }
//     else {
//         res.status(200).json(user)
//     }
// })

router.post('/',emailValidator, passwordValidator, usersController.addUser)
// router.post('/', (req, res) => {
//     console.log('enter to users for create user');
//     const newUser = req.body;
//     newUser.id = uuidv4();
//     if (Utils.checkUserExist(res, users, newUser.id)) {
//         res.send('user has already exist')
//         return
//     }
//     if (!Utils.CheckValidUser(res, users, newUser)){
//         return
//     }
//     newUser.password = Utils.encodedPassword(newUser.password)
//     users.push(newUser)
//     res.status(200).json(newUser)
// })
router.put('/:id', emailValidator, passwordValidator, usersController.updateUser)
// router.put('/:id', (req, res) => {
//     console.log('enter to users for update user');
//     const currentId = req.params.id
//     const newUser = req.body;
//     newUser.id = currentId;
//     if (Utils.checkUserExist(res, users, currentId)) {
//         if (Utils.CheckValidUser(res, users, newUser)) {
//             let userIndex = users.findIndex((user) => user.id === newUser.id)
//             newUser.password = Utils.encodedPassword(newUser.password)
//             users[userIndex] = newUser;
//             res.status(200).json(users[userIndex])
//         }
//     }
//     else {
//         res.send('user has not exist')
//     }
// })

// router.delete('/:id', (req, res) => {
//     console.log('enter to users for delete user');
//     const currentId = req.params.id
//     if (Utils.checkUserExist(res, users, currentId)) {
//         let userIndex = users.findIndex((user) => user.id === currentId)
//         res.json(users[userIndex])
//         users.splice(userIndex,1)
//     }
//     else {
//         res.send('user has not exist')
//     }
// })

// router.post('/check-in', (req, res) => {
//     console.log('enter to /users/check-in for check user');
//     const {email, password} = req.body;
//     for(let user of users){
//         if (user.email === email && Utils.compareEncodedPassword(password, user.password)){
//             res.send('User is connected')
//             return }
//     }
//     res.send('wrong credentials')
// })


export default router;