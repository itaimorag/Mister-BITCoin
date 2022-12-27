import { Link } from "react-router-dom"
export function ContactPreview({ contact, onSelectContactId, onRemoveContact }) {

    return (
        <section className="contact-preview">

            <Link to={`/contact/${contact._id}`} className="info">
            <img className='user-img' src={`https://avatars.dicebear.com/api/micah/${contact._id}.svg`} alt=""/>
                <h2> {contact.name}</h2>
                <h4>{contact.email}</h4>
                <h4>{contact.phone}</h4>
            </Link>
            <section className="actions">
                <button className="delete-btn" onClick={() => onRemoveContact(contact._id)}>Delete</button>
                <Link to={`/contact/edit/${contact._id}`}>Edit</Link>
            </section>
        </section>
    )
}
