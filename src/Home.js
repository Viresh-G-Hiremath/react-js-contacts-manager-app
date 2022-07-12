import { useState } from "react";
import ContactList from "./ContactList";
import Form from "./Form";

const Home = () => {
      const [contacts, setContacts] = useState([]);
      const [name, setName] = useState('');
      const [email, setEmail] = useState('');
      const [updateId, setUpdateId] = useState(null);

      const handleAdd = (e) => {
            e.preventDefault();
            if(name.trim() ==='' || email===''){
                  alert("Please enter rquired fields");
                  return;
            }
            if(updateId !== null){
                  const contact = contacts.map(contact => {
                        if(updateId===contact.id)
                        return {...contact, updateId, name, email};
                        
                        return contact;
                  });
                  setContacts(contact);
                  setEmail('');
                  setName('');
                  setUpdateId(null);
                  return;
            }
            const contact = {id: Math.random()*1000, name, email};
            setContacts([...contacts, contact]);
            setEmail('');
            setName('');
      }

      const handleDelete = (e, targetedId) => {
            e.stopPropagation();
            const updatedContacts=contacts.filter((contact) => targetedId !== contact.id);
            setContacts(updatedContacts);
            setUpdateId(null);
      }

      return(
            <div className="home">
                  <Form
                  name={name}
                  setName={setName} 
                  email={email}
                  setEmail={setEmail}
                  handleAdd={handleAdd}/>

                  <ContactList 
                  contacts={contacts}
                  setName={setName}
                  setEmail={setEmail}
                  setUpdateId={setUpdateId}
                  handleDelete={handleDelete}/>
            </div>
      );
}

export default Home;