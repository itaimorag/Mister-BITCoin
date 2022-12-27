
import { HashRouter as Router, Route, Switch } from 'react-router-dom'

import './assets/scss/global.scss';
import { ContactIndex } from './views/ContactIndex'
import { StatisticPage } from './views/StatisticPage'
import { AppHeader } from './cmps/AppHeader'
import { ContactEdit } from './views/ContactEdit'
import { ContactDetails } from './views/ContactDetails'
import { Signup } from './views/SignupPage'
import { Home } from './views/Home'



function App() {
    return (
        <Router>
        <div className="main-app">

        <AppHeader />

            <main className='main-container'>
                <Switch>
                        <Route path="/contact/edit/:id?" component={ContactEdit} />
                        <Route path="/contact/:id" component={ContactDetails} />
                        <Route path="/ContactIndex" component={ContactIndex} />
                        <Route path="/StatisticPage" component={StatisticPage} />
                        <Route path="/signup" component={Signup} />
                        <Route path="/" component={Home} />
                    </Switch>
            </main>

            <footer>
                <section className='container'>
                    contactRights 2022 &copy;
                </section>
            </footer>

        </div>
        </Router>
    );
}

export default App;
