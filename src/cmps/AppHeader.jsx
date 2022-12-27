import { NavLink, withRouter } from 'react-router-dom'


function _AppHeader(props) {

    return (
        <header className="app-header">   
                <nav>
                    <span>
                    <NavLink exact to="/" >Home</NavLink>
                    </span>
                    <span>

                    <NavLink to="/ContactIndex" >Contacts</NavLink>
                    </span>
                    <span>

                    <NavLink to="/StatisticPage" >Statistic page</NavLink>
                    </span>
                </nav>
          
        </header>
    )
}

export const AppHeader = withRouter(_AppHeader)