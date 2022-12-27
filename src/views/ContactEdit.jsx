import { Component } from 'react'
import { connect } from 'react-redux'
import { contactService } from '../services/contact.service.js'
import { addContact, updateContact,removeContact } from '../store/actions/contact.actions'

export class _ContactEdit extends Component {

    state = {
        contact: contactService.getEmptyContact()
    }

    async componentDidMount() {
        const contactId = this.props.match.params.id
        if (contactId) {
            const contact = await contactService.getById(contactId)
            this.setState({ contact })
        }
    }

    // onAddContact = async (ev) => {
    //     ev.preventDefault()
    //     try {
    //         await contactService.save({ ...this.state.contact })
    //         this.props.history.push('/ContactIndex')
           
    //     } catch (err) {
    //         console.log('err:', err)
    //     }
    // }
    onAddContact = async (ev) => {
        ev.preventDefault()
        try {
            if(this.state.contact._id)  this.props.addContact({ ...this.state.contact })
            else this.props.updateContact({ ...this.state.contact })
            this.props.history.push('/ContactIndex')
           
        } catch (err) {
            console.log('err:', err)
        }
    }


    // onRemoveContact = async () => {
    //     try {
    //         await contactService.remove(this.state.contact._id)
    //         this.props.history.push('/ContactIndex')
    //     } catch (err) {
    //         console.log('err:', err)
    //     }
    // }

    onRemoveContact = async () => {
        try {
            this.props.removeContact(this.state.contact._id)
            this.props.history.push('/ContactIndex')
        } catch (err) {
            console.log('err:', err)
        }
    }

    handleChange = ({ target }) => {
        const field = target.name
        let value = target.value
        switch (target.type) {
            case 'number':
            case 'range':
                value = +value
                break;
            case 'checkbox':
                value = target.checked
                break
            default:
                break;
        }

        this.setState(prevState => ({ contact: { ...prevState.contact, [field]: value } }))

    }
    onBack = () => {
        this.props.history.goBack()
    }

    render() {
        const { contact } = this.state
        if (!contact) return

        const { name, phone, email } = contact
        return (
            <section className='contact-edit'>
                <h1>{contact._id ? 'Edit' : 'Add'} Contact</h1>
                <nav>
                    <button className='back-btn' onClick={this.onBack}>Back</button>
                    {contact._id && 
                    <button onClick={this.onRemoveContact}>🗑️</button>
                    }
                </nav>
                <form onSubmit={this.onAddContact}>
                {contact._id && 
                <img className='user-img' src={`https://avatars.dicebear.com/api/micah/${contact._id}.svg`} alt=""/>
                }
                {!contact._id && 
                <img className='user-img' src={require('../assets/imgs/user.png')} alt=""/>
                }
                <div>

                    <section className='edit-user-field'>
                        <label htmlFor="name">Name:  </label>
                        <input onChange={this.handleChange} value={name} type="text" name="name" id="name" placeholder='Enter full name'/>
                    </section>

                    <section className='edit-user-field'>
                        <label htmlFor="phone">Phone: </label>
                        <input onChange={this.handleChange} value={phone} type="text" name="phone" id="phone" placeholder='Enter phone number'/>
                    </section>

                    <section className='edit-user-field'>
                        <label htmlFor="email">Email: </label>
                        <input onChange={this.handleChange} value={email} type="text" name="email" id="email" placeholder='Enter email address'/>
                    </section>
                </div>

                    <div>
                        <button>Save</button>
                    </div>
                </form>
            </section>
        )
    }
}

const mapDispatchToProps = {
    addContact, 
    updateContact,
    removeContact
}

export const ContactEdit = connect(null, mapDispatchToProps)(_ContactEdit)