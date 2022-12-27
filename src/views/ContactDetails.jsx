import { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { contactService } from '../services/contact.service'
import { TransferFund } from '../cmps/TransferFund'
import { TransactionsList } from '../cmps/TransactionsList'
import { userService } from '../services/user.service'
import { addMove } from '../store/actions/user.actions'

class _ContactDetails extends Component {

    state = {
        contact: null
    }

    componentDidMount() {
        this.loadContact()
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.match.params.id !== this.props.match.params.id) {
            this.loadContact()
        }
    }
    loadContact = async () => {
        try{
            const contact = await contactService.getById(this.props.match.params.id)
            this.setState({ contact })
        }catch(err){
            console.log(`err = `, err)
        }
        
    }

    // onTransfer = async (ev) => {
    //     ev.preventDefault()
    //     try {
    //          await userService.addMove(this.props.contact, this.state.amount)
    //         this.setState({ amount: '' })
    //     } catch (err) {
    //         console.log('err:', err)
    //     }
    // }
    onTransfer = async (ev,contact,amount) => {
        ev.preventDefault()
        try {
            this.props.addMove(contact ,amount)
            this.setState({ amount: '' })
        } catch (err) {
            console.log('err:', err)
        }
    }

    onBack = () => {
        this.props.history.push('/ContactIndex')
    }

    get transactionsList(){
        const user= userService.getUser()
        return user.transactions.filter(transaction=>transaction.to===this.state.contact.name)
    }

    render() {
        const { contact } = this.state
        if (!contact) return <div>Loading...</div>
        return (
            <section className='contact-details'>
                <nav> 
                <button onClick={this.onBack}>Back</button>
                <Link to={`/contact/edit/${contact._id}`}>Edit</Link>
                </nav>
                <div className='content-container'>
                <section>
                <img className='user-img' src={`https://avatars.dicebear.com/api/micah/${contact._id}.svg`} alt=""/>
                </section>
                <section>
                    <h3>Name: {contact.name}</h3>
                </section>
                <section>
                    <h3>Phone: {contact.phone}</h3>
                </section>
                <section>
                    <h3>Email: {contact.email}</h3>
                </section>
                </div>
                <TransferFund onTransfer={this.onTransfer} contact={contact}/>
                <TransactionsList title={"Your moves"} movesList={this.transactionsList}/>
            </section>
        )
    }
}


const mapDispatchToProps = {
    addMove,
}

export const ContactDetails = connect(null, mapDispatchToProps)(_ContactDetails)