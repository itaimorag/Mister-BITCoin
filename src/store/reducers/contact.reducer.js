const INITIAL_STATE = {
    contacts: null,
    selectedContactId: null,
    filterBy: {
        username: '',
        phone: '',
        email: ''
    }
}


export function contactReducer(state = INITIAL_STATE, action) {

    switch (action.type) {
        case 'SET_CONTACTS':
            return {
                ...state,
                contacts: action.contacts
            }
        case 'ADD_CONTACT':
            return {
                ...state,
                contacts: [...state.contacts, action.newContact]
            }
        case 'REMOVE_CONTACT':
            return {
                ...state,
                contacts: state.contacts.filter(contact => contact._id !== action.contactId)
            }
        case 'UPDATE_CONTACT':
            return {
                ...state,
                contacts: state.contacts.map(contact => contact._id === action.newContact._id ? action.newContact : contact)
            }
        case 'SET_FILTER_BY':
            return {
                ...state,
                filterBy: {...action.filterBy}
            }

        default:
            return state
    }

}