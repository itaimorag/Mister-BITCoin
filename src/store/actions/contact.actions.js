import { contactService } from "../../services/contact.service"

export function loadContacts() {

    return async (dispatch, getState) => {
        try {
            const filterBy = getState().contactModule.filterBy
            const contacts = await contactService.query(filterBy)
            dispatch({ type: 'SET_CONTACTS', contacts })
        } catch (err) {
            console.log('err:', err)
        }
    }
}

export function removeContact(contactId) {

    return async (dispatch) => {
        try {
            const contacts = await contactService.remove(contactId)
            dispatch({ type: 'REMOVE_CONTACT', contactId })
        } catch (err) {
            console.log('err:', err)
        }
    }
}

export function setFilterBy(filterBy) {

    return (dispatch) => {
        try {
            dispatch({ type: 'SET_FILTER_BY', filterBy: { ...filterBy } })
        } catch (err) {
            console.log('err:', err)
        }
    }
}
//do i need both of them?
export function addContact(contact) {

    return async (dispatch) => {
        try {
            const newContact = await contactService.save(contact)
            dispatch({ type: 'ADD_CONTACT', newContact })
        } catch (err) {
            console.log('err:', err)
        }
    }
}

export function updateContact(contact) {

    return async (dispatch) => {
        try {
            const newContact = await contactService.save(contact)
            dispatch({ type: 'UPDATE_CONTACT', newContact })
        } catch (err) {
            console.log('err:', err)
        }
    }
}