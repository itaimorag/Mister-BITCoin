import { Component } from 'react'

import { MyChart2 } from '../cmps/MyChart2'
import { bitcoinService } from '../services/bitcoin.service'
export class StatisticPage extends Component {

    state = {
        marketPrice: null,
        transitionPerSec: null,
    }

    async componentDidMount() {
        const marketPrice = await bitcoinService.getMarketPrice()
        const transitionPerSec = await bitcoinService.getConfirmedTransactions()
        this.setState({ marketPrice: marketPrice.values })
        this.setState({ transitionPerSec: transitionPerSec.values })
    }




    render() {
        const { marketPrice, transitionPerSec } = this.state
        if (!marketPrice || !transitionPerSec) return <div>Loading...</div>
        return (
            <>
            <section className='statistics-page'>
                <h1>Statistics</h1>
                <h2>Market Price (USD)</h2>
                <MyChart2 data={marketPrice} title={"Market price"} />
                <h2> Confirmed transactions per second</h2>
                <MyChart2 data={transitionPerSec} title={"Transition per second "} />
            </section>
            </>
        )
    }
}