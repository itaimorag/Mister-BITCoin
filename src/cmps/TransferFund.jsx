import { Component } from 'react'
import { connect } from 'react-redux'
import { userService } from '../services/user.service'
import { bitcoinService } from '../services/bitcoin.service'
import { addMove } from '../store/actions/user.actions'

export class TransferFund extends Component {

    state = {
        amount: '',

    }

    componentDidMount() {

    }

    

    handleRef = (elInput) => {
        elInput?.focus()
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

        this.setState({ amount: value })

    }


    render() {
        const { amount } = this.state
        const { contact } = this.props
        if (!contact) return <div>Loading...</div>
        return (
            <section className='transfer-fund'>
                <h2>Transfer coins to {contact.name}:</h2>
                <form onSubmit={(ev)=>this.props.onTransfer(ev,contact,amount)}>
                    <label htmlFor="amount">Amount: </label>
                    <input ref={this.handleRef} onChange={this.handleChange} value={amount} type="number" name="amount" id="amount" placeholder='Please Enter amount' />
                    <div>
                        <button>Transfer</button>
                    </div>
                </form>
            </section>
        )
    }
}


