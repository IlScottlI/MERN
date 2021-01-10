
import './App.css';
import PersonCard from "./components/PersonCard.js";
import users from "./Data/usersData";
function App() {
  return (
    <div className="App">
      <ul className="ul">
        {users.map((user) => (
          <PersonCard user={user} />
        ))}
      </ul>
    </div>
  );
}

export default App;
