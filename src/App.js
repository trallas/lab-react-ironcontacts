import logo from './logo.svg';
import './App.css';
import "./contacts.json"

const [contacts, setContacts] = useState(contactsData.slice(0, 5));
const [remainingContacts, setRemainingContacts] = useState(contactsData.slice(5));
<><button onClick={addRandomContact}>Add Random Contact</button><button onClick={resetContacts}>Sort by Popularity</button><button onClick={showAllContacts}>Sort by Name</button></>
  function App() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Won an Oscar</th>
              <th>Won an Emmy</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <tr key={contact.id}>
                <td>
                  <img src={contact.pictureUrl} alt={contact.name} />
                </td>
                <td>{contact.name}</td>
                <td>{contact.popularity}</td>
                <td>{contact.wonOscar}</td>
                <td>{contact.wonEmi}</td>
                <button onClick={addRandomContact}>Add Random Contact</button>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
    
}
export default App;
