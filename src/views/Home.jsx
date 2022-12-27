import { Component } from 'react'
import { connect } from 'react-redux'
import { userService } from '../services/user.service'
import { bitcoinService } from '../services/bitcoin.service'
import { TransactionsList } from '../cmps/TransactionsList'
import { Signup } from './SignupPage'

 class _Home extends Component {

    state = {
        bitCoinRate: null
    }

    componentDidMount() {
        this.loadUser()
    }
    loadUser = async () => {
        const user= userService.getUser()

        if(!user) {
            this.props.history.push('/signup')
         
            return
        }
        
        this.setState({ user }, ()=>this.userBitcoinRate())
    }
    userBitcoinRate = async () => {
        const coins = this.props.user.coins
        const bitCoinRate = await bitcoinService.getRate(coins)
        this.setState({ bitCoinRate:bitCoinRate.data })
    }
    get transactionsList(){
        const user= userService.getUser()
        return user.transactions.splice(0,3)
    }


    render() {
        const { bitCoinRate } = this.state
        const { user } = this.props
        if (!user) return <div>Loading...</div>
        return (
            <section className='home-page'>
                <h1>Mister BITcoin</h1>
                <div className="user-container">
                    <h2>Hello: {user.name}!</h2>
                    <div><span>💰 coins: {user.coins}</span></div>
                    <div><span>💸 BTC: {bitCoinRate}</span></div>
                </div>
                <TransactionsList title={`Your last ${this.transactionsList.length}  moves`} movesList={this.transactionsList}/>
                <img src={require('../assets/imgs/bit.jpeg')} alt=""/>
            </section>
        )
    }
}

const mapStateToProps = state => ({
    user: state.userModule.user,

})

export const Home = connect(mapStateToProps)(_Home)