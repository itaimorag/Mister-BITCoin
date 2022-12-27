
const INITIAL_STATE = {
    user: null
    
}

export function userReducer(state = INITIAL_STATE, action) {

    const { user } = state
    switch (action.type) {
        case 'UPDATE_USER':
            return {
                ...state,
                user: { ...action.updatedUser }
            }
            case 'SIGNUP':  
                return {
                    ...state,
                    user: { ...action.user }
                }
        default:
            return state;
    }

}