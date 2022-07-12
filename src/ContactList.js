import contactIcon from "./images/contactIcon.png";

function ContactList({contacts, setName, setEmail, setUpdateId, handleDelete}) {

      const handleUpdate= (contact) => {
            setName(contact.name);
            setEmail(contact.email);
            setUpdateId(contact.id);
      }

      return (
            <div className="contacts">
                  <h2>Contact Lists</h2>
                  <p>To show contacts, Please add contacts!!!</p>
                  {contacts.map((contact, i) => (
                        <div className="contact" key={i} onClick={() => handleUpdate(contact)}>
                              <img src={contactIcon} alt="img" />
                              <div>
                                    <h5>{contact.name}</h5>
                                    <p>{contact.email}</p>
                              </div>
                              <button onClick={(e) => handleDelete(e, contact.id)}>X</button>
                        </div>
                  ))}
            </div>
       );
}

export default ContactList;