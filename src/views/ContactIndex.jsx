import { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { ContactFilter } from '../cmps/ContactFilter'
import { ContactList } from '../cmps/ContactList'
import { contactService } from '../services/contact.service'
import { loadContacts, removeContact, setFilterBy } from '../store/actions/contact.actions'

 class _ContactIndex extends Component {

    // state = {
    //     contacts: null,
    //     selectedContactId: null,
    //     filterBy: {
    //         username: '',
    //         phone: '',
    //         email: ''
    //     }
    // }

    componentDidMount() {
        this.props.loadContacts()
    }

    // loadContacts = async () => {
    //     try {
    //         const contacts = await contactService.query(this.state.filterBy)
    //         this.setState({ contacts })
    //     } catch (err) {
    //         console.log('err:', err)
    //     }
    // }

    // onRemoveContact = async (contactId) => {
    //     try {
    //         await contactService.remove(contactId)
    //         this.setState(({ contacts }) => ({
    //             contacts: contacts.filter(contact => contact._id !== contactId)
    //         }))
    //     } catch (err) {
    //         console.log('err:', err)
    //     }
    // }

    onRemoveContact = async (contactId) => {
        try {
            this.props.removeContact(contactId)
        } catch (err) {
            console.log('err:', err)
        }
    }

    // onChangeFilter = (filterBy) => {
    //     this.setState({ filterBy }, this.loadContacts)
    // }
    onChangeFilter = (filterBy) => {
        this.props.setFilterBy(filterBy)
        this.props.loadContacts()
    }

    render() {
        const { contacts, filterBy } = this.props
        if (!contacts) return <div>Loading...</div>
        return (
            <section className='contact-index'>
               <h1>Contacts </h1>           
                    <ContactFilter onChangeFilter={this.onChangeFilter} filterBy={filterBy} />
                    <span className='link-add-contact'>
                <Link to='/contact/edit'>Add Contact</Link>
                    </span>
                <ContactList history={this.props.history} onRemoveContact={this.onRemoveContact} contacts={contacts} />

            </section>
        )
    }
}


const mapStateToProps = state => ({
    contacts: state.contactModule.contacts,
    filterBy: state.contactModule.filterBy,

})

const mapDispatchToProps = {
    loadContacts,
    removeContact,
    setFilterBy,
}

export const ContactIndex = connect(mapStateToProps, mapDispatchToProps)(_ContactIndex)