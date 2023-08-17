import loginDal from './dal.login.js'
import Utils from './../Utils.js'

const login = async (user) => {
    const { email, password } = user
    const users = await loginDal.login()
    for (let user of users) {
        if (user.email === email) {
            const validPassword = await Utils.compareEncodedPassword(password, user.password)
            if (validPassword) {
                return true
            }
        }
    }
    return false
}




const funcs = { login }
export default funcs