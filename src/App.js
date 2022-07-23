import logo from './logo.svg';
import './App.css';
import contactsData from './contacts.json';
import ContactDetails from './components/ContactDetails';

import { useState } from 'react';

function App() {
  //console.log(contactsData);
  let contactsArray = [];
  contactsArray = contactsData.slice(0,5);

  const [contacts, setContacts ] = useState(contactsArray);
  
  console.log('contacts Array',contactsArray);

  const displayContacts = () => {
    return (
      contacts.map((contact) => {
          return (
           
            

            <ContactDetails key={contact.id} 
            {...contact} 

            />
          )
      })
    )
  }

  const handleAdd = () => {
    const randmIndex = Math.random() * contactsData.length;
    

  }
  return (
    <div className="table">
      <h1>Ironhack Contacts</h1>
      <button>Add Random Contact</button>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
          </tr>
        </thead>
        <tbody>
         
            <tr>
            {
              displayContacts()
            }
            
            </tr>
            
      

        </tbody>
      </table>

    </div>
  );
}
export default App;
