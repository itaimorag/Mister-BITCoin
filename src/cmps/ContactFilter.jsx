import { Component, createRef } from 'react'

export class ContactFilter extends Component {

    state = {
        filterBy: null
    }

    typeInputRef = createRef()

    componentDidMount() {
        const { filterBy } = this.props
        // this.setState({ filterBy: { ...filterBy } }, () => this.inputRef.current.focus())
        this.setState({ filterBy: { ...filterBy } })
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


        this.setState(
            prevState => ({ filterBy: { ...prevState.filterBy, [field]: value } }),
            () => this.props.onChangeFilter({ ...this.state.filterBy })
        )

    }

    render() {
        const { filterBy } = this.state
        if (!filterBy) return <div>Loading...</div>

        const { username, phone,email } = filterBy
        return (
            <form className='contact-filter'>
                <section>
                    <label htmlFor="username">Name:</label>
                    <input ref={this.handleRef} onChange={this.handleChange} value={username} type="text" name="username" id="username" placeholder='Search contacts by name'/>
                </section>
                <section>
                    <label htmlFor="phone">Phone number:</label>
                    <input onChange={this.handleChange} value={phone} type="text" name="phone" id="phone" placeholder='Search contacts by phone'/>
                </section>
                <section>
                    <label htmlFor="email">Email: </label>
                    <input onChange={this.handleChange} value={email} type="text" name="email" id="email" placeholder='Search contacts by email'/>
                </section>
            </form>
        )
    }
}
