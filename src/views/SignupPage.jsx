import { Component } from 'react'
import { connect } from 'react-redux'
import { userService } from '../services/user.service'
import { bitcoinService } from '../services/bitcoin.service'
import { onSignup } from '../store/actions/user.actions'

 class _Signup extends Component {

    state = {
        username: '',
      
    }

    componentDidMount() {
      
    }


    // onSignup = async (ev) => {
    //     ev.preventDefault()
    //     try {

    //         await userService.signup(this.state.username )
    //         this.props.history.push('/')
           
    //     } catch (err) {
    //         console.log('err:', err)
    //     }
    // }

    onSignup = async (ev) => {
        ev.preventDefault()
        try {

            this.props.onSignup(this.state.username )
            this.props.history.push('/')
           
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

        this.setState({ username:  value })

    }


    render() {
        const { username } = this.state
        return (
            <section className='signup-page'>
                <img src={require('../assets/imgs/bitcoin-graphic.webp')} alt=""/>
                <h2>Please enter your name:</h2>
                <form onSubmit={this.onSignup}>
                        <label htmlFor="name"></label>
                        <input onChange={this.handleChange} value={username} type="text" name="name" id="name" placeholder='Please Enter full name'/>
                    <div>
                        <button>Sign up</button>
                    </div>
                </form>
            </section>
        )
    }
}

const mapDispatchToProps = {
    onSignup,
}


export const Signup = connect(null,mapDispatchToProps)(_Signup)