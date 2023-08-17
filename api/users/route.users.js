import express from 'express';
import usersController from './controller.users.js'
import emailValidator from './../../middleWare/emailValidator.js';
import passwordValidator from './../../middleWare/passwordValidator.js';
const router = express.Router();



router.get('/', usersController.getUsers);

router.get('/:id', usersController.getUser)

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

router.delete('/:id', usersController.deleteUser)


// router.post('/log-in', (req, res) => {
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