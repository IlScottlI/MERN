import './App.css';
import PersonCard from "./components/PersonCard.js";
import usersData from "./Data/usersData";


let users;
if (!localStorage.getItem('users')) {
  localStorage.setItem('users', JSON.stringify(usersData));
  users = JSON.parse(localStorage.getItem('users'));
} else {
  users = JSON.parse(localStorage.getItem('users'));
}

function App() {
  return (
    <div className="App">
      <ul className="ul">
        {users.map((user) => (
          <PersonCard
            firstName={user.firstName}
            lastName={user.lastName}
            age={user.age}
            hairColor={user.hairColor}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
