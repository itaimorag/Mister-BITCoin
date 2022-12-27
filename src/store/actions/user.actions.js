
import { userService } from "../../services/user.service"

export function addMove(contact,amount) {
    return async (dispatch) => {
        try {
       const updatedUser= await userService.addMove(contact,amount)
        dispatch({ type: 'UPDATE_USER',updatedUser })
        }
        catch (err) {
            console.log('err:', err)
        }
    }
}

export function onSignup(username) {
    return async (dispatch) => {
        try {
      const user= await userService.signup(username)
      console.log(`user = `, user)
        dispatch({ type: 'SIGNUP',user})
        }
        catch (err) {
            console.log('err:', err)
        }
    }
}